/**
 * ============================================================================
 * UNIVERSITY OF WESTMINSTER HARROW DIGITAL PRINT REQUEST
 * Google Apps Script - Backend Handler
 * ============================================================================
 *
 * SETUP INSTRUCTIONS:
 * -------------------
 *
 * 1. CREATE A NEW GOOGLE SHEET
 *    - Go to https://sheets.google.com
 *    - Create a new blank spreadsheet
 *    - Name it something like "Digital Print Requests"
 *
 * 2. OPEN THE SCRIPT EDITOR
 *    - In your Google Sheet, go to: Extensions � Apps Script
 *    - This will open a new Apps Script project
 *    - Delete any existing code in the editor
 *
 * 3. PASTE THIS CODE
 *    - Copy all the code from this file
 *    - Paste it into the Apps Script editor
 *    - Click the save icon (or Ctrl/Cmd + S)
 *    - Name your project (e.g., "Print Request Handler")
 *
 * 4. DEPLOY AS A WEB APP
 *    - Click "Deploy" � "New deployment"
 *    - Click the gear icon next to "Select type" and choose "Web app"
 *    - Configure the following settings:
 *        " Description: "Print Request API v1" (or similar)
 *        " Execute as: "Me" (your account)
 *        " Who has access: "Anyone"
 *    - Click "Deploy"
 *    - You'll be asked to authorise the script - click "Authorise access"
 *    - Select your Google account and grant permissions
 *    - Copy the Web App URL that appears (it will look like:
 *      https://script.google.com/macros/s/XXXXX.../exec)
 *
 * 5. UPDATE YOUR HTML FORM
 *    - Open your index.html file
 *    - Find the CONFIG object near the bottom
 *    - Replace the googleScriptUrl placeholder with your Web App URL
 *
 * 6. TEST THE INTEGRATION
 *    - Open your HTML form in a browser
 *    - Submit a test request
 *    - Check your Google Sheet - a new row should appear
 *    - Check the email inbox for the confirmation email
 *
 * IMPORTANT NOTES:
 * ----------------
 * - If you modify this script, you must create a NEW deployment for changes
 *   to take effect on the web app URL
 * - The script needs permission to access Gmail to send emails
 * - Make sure the Google account running this has sufficient Gmail quota
 * - The custom menu will only appear when the sheet is opened directly
 *
 * TROUBLESHOOTING:
 * ----------------
 * - If submissions aren't appearing: Check the Executions log in Apps Script
 * - If emails aren't sending: Verify Gmail permissions are granted
 * - If menu doesn't appear: Refresh the Google Sheet
 * - For CORS issues: Ensure the form uses mode: 'no-cors' in the fetch request
 *
 * ============================================================================
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * PARENT FOLDER ID FOR UPLOAD FOLDERS
 * ------------------------------------
 * Each print request creates a subfolder for file uploads.
 * These subfolders are created inside a parent folder you specify here.
 *
 * TO SET THIS UP:
 * 1. Go to Google Drive (https://drive.google.com)
 * 2. Create a new folder called "Print Requests" (or similar)
 * 3. Open that folder
 * 4. Look at the URL - it will be something like:
 *    https://drive.google.com/drive/folders/1ABCxyz123456789
 * 5. Copy the long string after /folders/ (e.g., "1ABCxyz123456789")
 * 6. Paste it below, replacing 'YOUR_FOLDER_ID_HERE'
 */
const PARENT_FOLDER_ID = 'YOUR_FOLDER_ID_HERE';

const CONFIG = {
  // Email settings
  senderName: 'Harrow Digital Print',
  universityName: 'University of Westminster',
  departmentEmail: 'harrow.digitalprint@westminster.ac.uk', // Reply-to address

  // Sheet settings
  sheetName: 'Sheet1', // Change if your sheet has a different name

  // Status options
  statuses: {
    NEW: 'New',
    PROCESSING: 'Processing',
    READY: 'Ready for Collection',
    COLLECTED: 'Collected'
  }
};

// Column headers for the spreadsheet
const HEADERS = [
  'Timestamp',
  'Reference',
  'Status',
  'Upload Folder',
  'First Name',
  'Surname',
  'Email',
  'Student ID',
  'Course',
  'Print Size',
  'Paper Type',
  'Paper Category',
  'Quantity',
  'Estimated Price',
  'DPI Check',
  'RGB Check',
  'Flattened Check',
  'Notes',
  'Ready Date',
  'Technician Notes'
];

// ============================================================================
// WEB APP ENDPOINTS
// ============================================================================

/**
 * Handles GET requests to the web app
 * Returns a simple status message to confirm the API is running
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Digital Print Request API is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handles POST requests from the HTML form
 * Parses the JSON data, adds it to the spreadsheet, and sends confirmation email
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    const requiredFields = ['referenceNumber', 'firstName', 'surname', 'email', 'universityId', 'course', 'printSize', 'paperType', 'quantity'];
    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }

    // Validate quantity is a positive number
    if (typeof data.quantity !== 'number' || data.quantity < 1) {
      throw new Error('Quantity must be a positive number');
    }

    // Create a Google Drive folder for this submission
    let folderUrl = '';
    try {
      const parentFolder = DriveApp.getFolderById(PARENT_FOLDER_ID);
      const submissionFolder = parentFolder.createFolder(data.referenceNumber);

      // Set sharing to "anyone with the link can edit"
      submissionFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);

      folderUrl = submissionFolder.getUrl();
    } catch (folderError) {
      console.error('Failed to create upload folder:', folderError);
      // Continue without folder - submission can still proceed
      folderUrl = 'Folder creation failed';
    }

    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(CONFIG.sheetName);

    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    // Check if headers exist, create them if not
    if (sheet.getLastRow() === 0) {
      createHeaders(sheet);
    }

    // Format the timestamp for display
    const timestamp = new Date(data.timestamp).toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Prepare the row data
    const rowData = [
      timestamp,                                    // Timestamp
      data.referenceNumber,                         // Reference
      CONFIG.statuses.NEW,                          // Status
      folderUrl,                                    // Upload Folder
      data.firstName,                               // First Name
      data.surname,                                 // Surname
      data.email,                                   // Email
      data.universityId,                            // Student ID
      data.course,                                  // Course
      data.printSize,                               // Print Size
      data.paperType,                               // Paper Type
      data.paperCategory,                           // Paper Category
      data.quantity,                                // Quantity
      '£' + data.totalPrice.toFixed(2),            // Estimated Price
      data.checkDpi ? 'Yes' : 'No',                // DPI Check
      data.checkRgb ? 'Yes' : 'No',                // RGB Check
      data.checkFlattened ? 'Yes' : 'No',          // Flattened Check
      data.notes || '',                             // Notes
      '',                                           // Ready Date (filled later)
      ''                                            // Technician Notes (filled later)
    ];

    // Append the row to the sheet
    sheet.appendRow(rowData);

    // Send confirmation email to the student
    // Wrapped in try-catch so email failure doesn't prevent submission
    try {
      sendConfirmationEmail(data);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Continue - the submission was still successful
    }

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Request submitted successfully',
        referenceNumber: data.referenceNumber,
        folderUrl: folderUrl
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error for debugging
    console.error('Error processing request:', error);

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================================
// SPREADSHEET FUNCTIONS
// ============================================================================

/**
 * Creates and formats the header row in the spreadsheet
 */
function createHeaders(sheet) {
  // Add headers to the first row
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

  // Format the header row
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);

  // Bold text
  headerRange.setFontWeight('bold');

  // Dark blue background (#1e3a5f)
  headerRange.setBackground('#1e3a5f');

  // White text
  headerRange.setFontColor('#ffffff');

  // Centre align
  headerRange.setHorizontalAlignment('center');

  // Freeze the header row
  sheet.setFrozenRows(1);

  // Auto-resize columns to fit content
  for (let i = 1; i <= HEADERS.length; i++) {
    sheet.autoResizeColumn(i);
  }

  // Set minimum column widths for better readability
  sheet.setColumnWidth(1, 150);  // Timestamp
  sheet.setColumnWidth(2, 100);  // Reference
  sheet.setColumnWidth(3, 120);  // Status
  sheet.setColumnWidth(4, 250);  // Upload Folder
  sheet.setColumnWidth(18, 200); // Notes (shifted by 1 due to new column)
  sheet.setColumnWidth(20, 200); // Technician Notes (shifted by 1 due to new column)
}

/**
 * Finds a row by reference number
 * Returns the row number or -1 if not found
 */
function findRowByReference(referenceNumber) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName)
                || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();

  // Reference number is in column B (index 1)
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === referenceNumber) {
      return i + 1; // Return 1-based row number
    }
  }

  return -1; // Not found
}

/**
 * Gets the data for a specific row
 */
function getRowData(rowNumber) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName)
                || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const rowData = sheet.getRange(rowNumber, 1, 1, HEADERS.length).getValues()[0];

  return {
    timestamp: rowData[0],
    referenceNumber: rowData[1],
    status: rowData[2],
    firstName: rowData[3],
    surname: rowData[4],
    email: rowData[5],
    studentId: rowData[6],
    course: rowData[7],
    printSize: rowData[8],
    paperType: rowData[9],
    paperCategory: rowData[10],
    quantity: rowData[11],
    estimatedPrice: rowData[12],
    dpiCheck: rowData[13],
    rgbCheck: rowData[14],
    flattenedCheck: rowData[15],
    notes: rowData[16],
    readyDate: rowData[17],
    technicianNotes: rowData[18]
  };
}

/**
 * Updates the status of a specific row
 */
function updateRowStatus(rowNumber, newStatus) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName)
                || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // Status is in column C (column 3)
  sheet.getRange(rowNumber, 3).setValue(newStatus);

  // If status is "Ready for Collection", update the Ready Date
  if (newStatus === CONFIG.statuses.READY) {
    const readyDate = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    sheet.getRange(rowNumber, 18).setValue(readyDate); // Ready Date column
  }
}

// ============================================================================
// EMAIL FUNCTIONS
// ============================================================================

/**
 * Sends a confirmation email to the student after form submission
 */
function sendConfirmationEmail(data) {
  const subject = `Print Request Received - ${data.referenceNumber}`;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e3a5f; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .reference { background: #1e3a5f; color: white; padding: 15px; text-align: center;
                     font-size: 24px; font-family: monospace; margin: 20px 0; }
        .details { background: white; padding: 15px; border-left: 4px solid #1e3a5f; margin: 15px 0; }
        .details table { width: 100%; border-collapse: collapse; }
        .details td { padding: 8px 0; }
        .details td:first-child { font-weight: bold; width: 40%; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        .important { background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Print Request Received</h1>
          <p>${CONFIG.universityName} - Harrow Digital Print</p>
        </div>

        <div class="content">
          <p>Dear ${data.firstName},</p>

          <p>Thank you for submitting your print request. We have received your order and it is now in our queue.</p>

          <p><strong>Your Reference Number:</strong></p>
          <div class="reference">${data.referenceNumber}</div>

          <p>Please keep this reference number safe - you will need it when collecting your prints.</p>

          <div class="important">
            <strong>� Important: Don't forget to upload your files!</strong><br>
            If you haven't already, please upload your print files via Microsoft Forms using the link provided after submission. Include your reference number when uploading.
          </div>

          <div class="details">
            <h3>Order Details</h3>
            <table>
              <tr><td>Print Size:</td><td>${data.printSize} (${data.printDimensions})</td></tr>
              <tr><td>Paper Type:</td><td>${data.paperType}</td></tr>
              <tr><td>Quantity:</td><td>${data.quantity}</td></tr>
              <tr><td>Estimated Price:</td><td>�${data.totalPrice.toFixed(2)}</td></tr>
            </table>
          </div>

          <div class="details">
            <h3>Your Details</h3>
            <table>
              <tr><td>Name:</td><td>${data.firstName} ${data.surname}</td></tr>
              <tr><td>Student ID:</td><td>${data.universityId}</td></tr>
              <tr><td>Course:</td><td>${data.course}</td></tr>
            </table>
          </div>

          ${data.notes ? `
          <div class="details">
            <h3>Additional Notes</h3>
            <p>${data.notes}</p>
          </div>
          ` : ''}

          <h3>What Happens Next?</h3>
          <ol>
            <li>Our technicians will review your request and uploaded files</li>
            <li>Your prints will be produced (typically 2-3 working days)</li>
            <li>You will receive an email when your prints are ready for collection</li>
            <li>Collect your prints from the Digital Print room and make payment</li>
          </ol>

          <p>If you have any questions about your order, please reply to this email or contact us directly.</p>

          <p>Best regards,<br>
          <strong>Harrow Digital Print Team</strong></p>
        </div>

        <div class="footer">
          <p>${CONFIG.universityName}<br>
          Harrow Campus - Digital Print Services</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const plainBody = `
Print Request Received - ${data.referenceNumber}

Dear ${data.firstName},

Thank you for submitting your print request. We have received your order and it is now in our queue.

Your Reference Number: ${data.referenceNumber}

Please keep this reference number safe - you will need it when collecting your prints.

IMPORTANT: Don't forget to upload your files! If you haven't already, please upload your print files via Microsoft Forms using the link provided after submission.

ORDER DETAILS
-------------
Print Size: ${data.printSize} (${data.printDimensions})
Paper Type: ${data.paperType}
Quantity: ${data.quantity}
Estimated Price: �${data.totalPrice.toFixed(2)}

YOUR DETAILS
------------
Name: ${data.firstName} ${data.surname}
Student ID: ${data.universityId}
Course: ${data.course}

${data.notes ? `ADDITIONAL NOTES\n----------------\n${data.notes}\n` : ''}

WHAT HAPPENS NEXT?
------------------
1. Our technicians will review your request and uploaded files
2. Your prints will be produced (typically 2-3 working days)
3. You will receive an email when your prints are ready for collection
4. Collect your prints from the Digital Print room and make payment

If you have any questions, please reply to this email.

Best regards,
Harrow Digital Print Team

${CONFIG.universityName}
Harrow Campus - Digital Print Services
  `;

  // Send the email
  GmailApp.sendEmail(
    data.email,
    subject,
    plainBody,
    {
      name: CONFIG.senderName,
      replyTo: CONFIG.departmentEmail,
      htmlBody: htmlBody
    }
  );
}

/**
 * Sends an email to notify the student that their prints are ready for collection
 * Can be called manually or via the custom menu
 */
function sendReadyEmail(referenceNumber) {
  // Find the row with this reference number
  const rowNumber = findRowByReference(referenceNumber);

  if (rowNumber === -1) {
    throw new Error(`Reference number ${referenceNumber} not found`);
  }

  // Get the row data
  const data = getRowData(rowNumber);

  const subject = `Your Prints Are Ready! - ${data.referenceNumber}`;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #28a745; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .reference { background: #1e3a5f; color: white; padding: 15px; text-align: center;
                     font-size: 24px; font-family: monospace; margin: 20px 0; }
        .details { background: white; padding: 15px; border-left: 4px solid #28a745; margin: 15px 0; }
        .details table { width: 100%; border-collapse: collapse; }
        .details td { padding: 8px 0; }
        .details td:first-child { font-weight: bold; width: 40%; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        .ready-badge { background: #28a745; color: white; padding: 10px 20px;
                       display: inline-block; border-radius: 5px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1> Your Prints Are Ready!</h1>
          <p>${CONFIG.universityName} - Harrow Digital Print</p>
        </div>

        <div class="content">
          <p>Dear ${data.firstName},</p>

          <p>Great news! Your print order is now ready for collection.</p>

          <p><strong>Your Reference Number:</strong></p>
          <div class="reference">${data.referenceNumber}</div>

          <div class="details">
            <h3>Order Summary</h3>
            <table>
              <tr><td>Print Size:</td><td>${data.printSize}</td></tr>
              <tr><td>Paper Type:</td><td>${data.paperType}</td></tr>
              <tr><td>Quantity:</td><td>${data.quantity}</td></tr>
              <tr><td>Amount Due:</td><td>${data.estimatedPrice}</td></tr>
            </table>
          </div>

          <h3>Collection Information</h3>
          <p>Please collect your prints from the <strong>Digital Print Room</strong> at Harrow Campus.</p>
          <p>Remember to bring:</p>
          <ul>
            <li>Your reference number: <strong>${data.referenceNumber}</strong></li>
            <li>Your student ID card</li>
            <li>Payment (${data.estimatedPrice})</li>
          </ul>

          <p>If you have any questions, please reply to this email or contact us directly.</p>

          <p>Best regards,<br>
          <strong>Harrow Digital Print Team</strong></p>
        </div>

        <div class="footer">
          <p>${CONFIG.universityName}<br>
          Harrow Campus - Digital Print Services</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const plainBody = `
Your Prints Are Ready! - ${data.referenceNumber}

Dear ${data.firstName},

Great news! Your print order is now ready for collection.

Your Reference Number: ${data.referenceNumber}

ORDER SUMMARY
-------------
Print Size: ${data.printSize}
Paper Type: ${data.paperType}
Quantity: ${data.quantity}
Amount Due: ${data.estimatedPrice}

COLLECTION INFORMATION
----------------------
Please collect your prints from the Digital Print Room at Harrow Campus.

Remember to bring:
- Your reference number: ${data.referenceNumber}
- Your student ID card
- Payment (${data.estimatedPrice})

If you have any questions, please reply to this email.

Best regards,
Harrow Digital Print Team

${CONFIG.universityName}
Harrow Campus - Digital Print Services
  `;

  // Send the email
  GmailApp.sendEmail(
    data.email,
    subject,
    plainBody,
    {
      name: CONFIG.senderName,
      replyTo: CONFIG.departmentEmail,
      htmlBody: htmlBody
    }
  );

  // Update the status to Ready
  updateRowStatus(rowNumber, CONFIG.statuses.READY);

  return `Ready email sent to ${data.email} for reference ${data.referenceNumber}`;
}

// ============================================================================
// CUSTOM MENU FUNCTIONS
// ============================================================================

/**
 * Creates a custom menu when the spreadsheet is opened
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('Print Requests')
    .addItem('Send Ready Email for Selected Row', 'menuSendReadyEmail')
    .addSeparator()
    .addItem('Update Status to Processing', 'menuSetProcessing')
    .addItem('Update Status to Ready', 'menuSetReady')
    .addItem('Update Status to Collected', 'menuSetCollected')
    .addSeparator()
    .addItem('Refresh Headers', 'menuRefreshHeaders')
    .addToUi();
}

/**
 * Gets the currently selected row number
 */
function getSelectedRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const selection = sheet.getActiveRange();
  return selection.getRow();
}

/**
 * Menu action: Send ready email for the selected row
 */
function menuSendReadyEmail() {
  const ui = SpreadsheetApp.getUi();
  const rowNumber = getSelectedRow();

  if (rowNumber <= 1) {
    ui.alert('Error', 'Please select a data row (not the header row).', ui.ButtonSet.OK);
    return;
  }

  try {
    const data = getRowData(rowNumber);

    // Confirm before sending
    const response = ui.alert(
      'Send Ready Email',
      `Send "prints ready" email to ${data.firstName} ${data.surname} (${data.email}) for reference ${data.referenceNumber}?`,
      ui.ButtonSet.YES_NO
    );

    if (response === ui.Button.YES) {
      const result = sendReadyEmail(data.referenceNumber);
      ui.alert('Success', result, ui.ButtonSet.OK);
    }
  } catch (error) {
    ui.alert('Error', error.toString(), ui.ButtonSet.OK);
  }
}

/**
 * Menu action: Set status to Processing
 */
function menuSetProcessing() {
  updateSelectedRowStatus(CONFIG.statuses.PROCESSING);
}

/**
 * Menu action: Set status to Ready
 */
function menuSetReady() {
  updateSelectedRowStatus(CONFIG.statuses.READY);
}

/**
 * Menu action: Set status to Collected
 */
function menuSetCollected() {
  updateSelectedRowStatus(CONFIG.statuses.COLLECTED);
}

/**
 * Helper function to update the status of the selected row
 */
function updateSelectedRowStatus(newStatus) {
  const ui = SpreadsheetApp.getUi();
  const rowNumber = getSelectedRow();

  if (rowNumber <= 1) {
    ui.alert('Error', 'Please select a data row (not the header row).', ui.ButtonSet.OK);
    return;
  }

  try {
    const data = getRowData(rowNumber);

    // Confirm before updating
    const response = ui.alert(
      'Update Status',
      `Update status for ${data.referenceNumber} to "${newStatus}"?`,
      ui.ButtonSet.YES_NO
    );

    if (response === ui.Button.YES) {
      updateRowStatus(rowNumber, newStatus);
      ui.alert('Success', `Status updated to "${newStatus}" for ${data.referenceNumber}`, ui.ButtonSet.OK);
    }
  } catch (error) {
    ui.alert('Error', error.toString(), ui.ButtonSet.OK);
  }
}

/**
 * Menu action: Refresh/recreate headers
 */
function menuRefreshHeaders() {
  const ui = SpreadsheetApp.getUi();

  const response = ui.alert(
    'Refresh Headers',
    'This will reformat the header row. Continue?',
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName)
                  || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Update header values
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);

    // Reformat
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#1e3a5f');
    headerRange.setFontColor('#ffffff');
    headerRange.setHorizontalAlignment('center');
    sheet.setFrozenRows(1);

    ui.alert('Success', 'Headers have been refreshed.', ui.ButtonSet.OK);
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Test function to verify the script is working
 * Run this from the Apps Script editor to test
 */
function testScript() {
  console.log('Script is working!');
  console.log('Headers:', HEADERS);
  console.log('Config:', CONFIG);
}

/**
 * Manually trigger header creation (for initial setup)
 * Run this from the Apps Script editor if headers weren't created automatically
 */
function manuallyCreateHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName)
                || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  createHeaders(sheet);
  console.log('Headers created successfully');
}

// ============================================================================
// AUTOMATED CLEANUP
// ============================================================================

/**
 * Cleans up old completed submissions by deleting their Google Drive folders
 *
 * This function:
 * 1. Finds all rows with Status = "Collected"
 * 2. Checks if Ready Date is more than 14 days ago
 * 3. Deletes the associated Google Drive folder
 * 4. Updates the Upload Folder cell to "Deleted - [date]"
 *
 * HOW TO SET UP AUTOMATIC DAILY CLEANUP:
 * --------------------------------------
 * 1. In the Apps Script editor, click the clock icon (Triggers) in the left sidebar
 * 2. Click "+ Add Trigger" in the bottom right
 * 3. Configure the trigger:
 *    - Choose which function to run: cleanupOldSubmissions
 *    - Choose which deployment should run: Head
 *    - Select event source: Time-driven
 *    - Select type of time based trigger: Day timer
 *    - Select time of day: 2am to 3am (or your preferred time)
 * 4. Click "Save"
 *
 * The cleanup will now run automatically every day at the specified time.
 */
function cleanupOldSubmissions() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName)
                || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  // Find column indices
  const statusCol = headers.indexOf('Status');
  const uploadFolderCol = headers.indexOf('Upload Folder');
  const readyDateCol = headers.indexOf('Ready Date');
  const referenceCol = headers.indexOf('Reference');

  if (statusCol === -1 || uploadFolderCol === -1 || readyDateCol === -1) {
    console.error('Required columns not found');
    return;
  }

  const now = new Date();
  const fourteenDaysAgo = new Date(now.getTime() - (14 * 24 * 60 * 60 * 1000));
  let deletedCount = 0;
  let skippedCount = 0;

  console.log(`Starting cleanup. Looking for items collected before ${fourteenDaysAgo.toLocaleDateString('en-GB')}`);

  // Process rows from bottom to top (in case we need to delete rows in future)
  for (let i = data.length - 1; i >= 1; i--) {
    const row = data[i];
    const status = row[statusCol];
    const uploadFolderUrl = row[uploadFolderCol];
    const readyDate = row[readyDateCol];
    const reference = row[referenceCol];

    // Skip if not "Collected"
    if (status !== CONFIG.statuses.COLLECTED) {
      continue;
    }

    // Skip if no ready date
    if (!readyDate) {
      continue;
    }

    // Skip if already deleted
    if (uploadFolderUrl && uploadFolderUrl.toString().startsWith('Deleted')) {
      continue;
    }

    // Parse the ready date
    let readyDateObj;
    if (readyDate instanceof Date) {
      readyDateObj = readyDate;
    } else {
      // Try to parse the date string (handles DD/MM/YYYY format)
      const parts = readyDate.toString().split(/[\/\-]/);
      if (parts.length === 3) {
        // Assume DD/MM/YYYY format
        readyDateObj = new Date(parts[2], parts[1] - 1, parts[0]);
      } else {
        readyDateObj = new Date(readyDate);
      }
    }

    // Skip if date is invalid
    if (isNaN(readyDateObj.getTime())) {
      console.log(`Skipping ${reference}: Invalid ready date`);
      skippedCount++;
      continue;
    }

    // Skip if not old enough
    if (readyDateObj > fourteenDaysAgo) {
      continue;
    }

    // Try to delete the folder
    const deletionDate = new Date().toLocaleDateString('en-GB');

    if (uploadFolderUrl && uploadFolderUrl.toString().includes('drive.google.com')) {
      try {
        // Extract folder ID from URL
        // URL format: https://drive.google.com/drive/folders/FOLDER_ID
        const folderIdMatch = uploadFolderUrl.toString().match(/folders\/([a-zA-Z0-9_-]+)/);

        if (folderIdMatch && folderIdMatch[1]) {
          const folderId = folderIdMatch[1];
          const folder = DriveApp.getFolderById(folderId);
          folder.setTrashed(true);
          console.log(`Deleted folder for ${reference} (Ready: ${readyDateObj.toLocaleDateString('en-GB')})`);
        }
      } catch (folderError) {
        // Folder might already be deleted or inaccessible - that's okay
        console.log(`Could not delete folder for ${reference}: ${folderError.message}`);
      }
    }

    // Update the cell to show it's been deleted
    sheet.getRange(i + 1, uploadFolderCol + 1).setValue(`Deleted - ${deletionDate}`);
    deletedCount++;
  }

  console.log(`Cleanup complete. Deleted: ${deletedCount}, Skipped: ${skippedCount}`);
}
