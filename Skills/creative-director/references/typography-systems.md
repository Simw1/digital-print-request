# Typography Systems

Build type systems that establish hierarchy, express personality, and function across all contexts.

## System Components

### Display Typeface

For headlines, titles, impact moments. Selection criteria:

**Personality fit:**
- Does it embody the brand character?
- Serious: Strong, authoritative serifs or structured sans
- Playful: Round, bouncy, characterful
- Progressive: Variable, experimental, distinctive
- Traditional: Classical proportions, historical references

**Distinctiveness:**
- Would someone recognise this as "yours"?
- Avoid overused display fonts (Montserrat, Poppins in 2024)
- Consider: Could you identify the brand from the type alone?

**Range:**
- Multiple weights available?
- Optical sizes for different scales?
- Display cuts vs text cuts?

### Body Typeface

For readable text. Selection criteria:

**Readability first:**
- Clear letterforms at small sizes
- Comfortable for extended reading
- Good x-height and open counters

**Personality second:**
- Should complement, not compete with display
- Can be more neutral while display carries character
- Or can carry subtle personality (humanist vs geometric sans)

**Technical requirements:**
- Full character set (accents, special characters)
- True italics (not sloped roman)
- Multiple weights (at minimum: regular, medium/semibold, bold)

### Supporting Typefaces

Optional. Common additions:

**Monospace**: For code, technical content, tabular data
**Accent**: Occasional use for special moments
**Functional**: UI-specific needs (numerals, labels)

Rule: Each typeface must justify its existence. If body can do the job, don't add another.

## Pairing Strategies

### Contrast Pairing

Different structural categories:
- Serif display + Sans body
- Geometric display + Humanist body
- Slab serif display + Elegant serif body

Creates clear hierarchy through fundamental difference.

### Superfamily Pairing

Related typefaces designed together:
- Different cuts of same family (Roboto + Roboto Slab)
- Designed companions (Source Sans + Source Serif)

Guarantees harmony, can lack visual interest.

### Era/Origin Pairing

Types from similar design movements:
- Both Swiss modernist
- Both British traditional
- Both contemporary Dutch

Shared DNA creates subtle harmony.

### Weight Pairing

Same family, different weights:
- Display at Black, body at Regular
- Uses weight for hierarchy, not different typefaces

Minimal, cohesive, requires strong typeface.

## Type Scale

### Scale Method

Use a consistent ratio to generate sizes:

**Common ratios:**
- 1.125 (Major Second): Tight, subtle progression
- 1.200 (Minor Third): Moderate, readable
- 1.250 (Major Third): Clear hierarchy
- 1.333 (Perfect Fourth): Strong distinction
- 1.500 (Perfect Fifth): Dramatic jumps

**Example scale at 1.25 ratio, 16px base:**
```
xs:   10px (16 ÷ 1.25²)
sm:   13px (16 ÷ 1.25)
base: 16px
lg:   20px (16 × 1.25)
xl:   25px (16 × 1.25²)
2xl:  31px (16 × 1.25³)
3xl:  39px (16 × 1.25⁴)
4xl:  49px (16 × 1.25⁵)
```

### Responsive Scaling

Type should scale with viewport:
- Mobile: Start smaller, tighter ratio
- Desktop: Larger base, can handle bigger ratios
- Large displays: Prevent over-scaling (cap maximums)

**Methods:**
- Fluid type (clamp with vw units)
- Breakpoint steps (defined sizes per breakpoint)
- Combination (fluid within breakpoint ranges)

## Hierarchy System

### Levels

Define clear typographic roles:

**Display**: Brand moments, hero text, major headings
- Largest sizes, display typeface, maximum impact

**Title**: Section headings, card titles
- Large but not display scale, can be display or body typeface

**Body**: Main content
- Optimised for reading, body typeface, base size

**Supporting**: Captions, labels, meta information
- Smaller than body, often different weight or colour

**Micro**: Legal, timestamps, technical labels
- Smallest readable size, highest functional priority

### Differentiation Methods

Establish hierarchy through:
- **Size**: Primary differentiator
- **Weight**: Secondary (bold headlines, regular body)
- **Case**: Tertiary (all caps for labels)
- **Colour**: Subtle hierarchy (dark vs grey)
- **Typeface**: Only if justified

Avoid relying on too many methods at once.

## Line Height and Spacing

### Line Height Rules

- **Display text**: Tight (1.0–1.2)
- **Body text**: Comfortable (1.4–1.6)
- **Small text**: Looser (1.5–1.7)

Adjust based on:
- Line length (longer lines need more leading)
- x-height (large x-height needs more leading)
- Weight (bold needs more leading)

### Paragraph Spacing

Options:
- **Margin between**: Traditional, clear separation
- **Indent first line**: Dense, continuous flow
- **Extra leading**: Subtle breaks

Choose based on content density and brand personality.

### Letter Spacing

- **Display/Headlines**: Often negative (tighter)
- **Body**: Default (0)
- **All caps**: Positive (looser, aids readability)
- **Small text**: Slightly positive

## Weights and Styles

### Weight Strategy

Don't use all weights. Define:
- **Regular/Book** (400): Body text
- **Medium** (500): Subtle emphasis, UI elements
- **Semibold** (600): Headings, strong emphasis
- **Bold** (700): Maximum emphasis, calls to action

Some systems skip Medium and use only Regular + Bold.

### Style Usage

- **Italic**: Emphasis within text, citations, foreign words
- **All caps**: Short labels, buttons, category names (with letter-spacing)
- **Small caps**: Formal contexts, abbreviations (if available)

## Font Sources

### Google Fonts

Pros: Free, easy implementation, good selection
Cons: Overused options, performance overhead
Best for: Projects with tight budgets, quick implementation

### Adobe Fonts

Pros: Excellent selection, professional quality
Cons: Subscription required, dependency
Best for: Adobe workflow integration, broader selection needs

### Independent Foundries

Pros: Distinctive, supports designers, less overused
Cons: Cost, licensing complexity
Best for: Premium projects, strong differentiation needs

Quality foundries: Klim, Grilli, Dinamo, Commercial Type, Colophon

### Self-Hosted

Pros: Performance control, no external dependencies
Cons: Setup complexity, manual updates
Best for: Performance-critical applications, privacy requirements

## Documentation Format

```
DISPLAY TYPEFACE
GT Sectra Display

Source: Grilli Type
Weights used: Regular, Bold
Usage: Headlines H1-H3, hero text, brand moments
Line height: 1.1
Letter spacing: -0.02em at display sizes

BODY TYPEFACE  
Inter

Source: Google Fonts
Weights used: 400, 500, 700
Usage: Body text, UI elements, supporting content
Line height: 1.5
Letter spacing: 0

TYPE SCALE (base 16px, ratio 1.25)
6xl: 61px / GT Sectra Display Bold / hero headlines
5xl: 49px / GT Sectra Display Bold / page titles
4xl: 39px / GT Sectra Display / section titles
3xl: 31px / Inter 700 / card titles
2xl: 25px / Inter 600 / subsections
xl:  20px / Inter 500 / large body
lg:  18px / Inter 400 / comfortable reading
base: 16px / Inter 400 / standard body
sm:  14px / Inter 400 / secondary text
xs:  12px / Inter 500 / labels, captions
```
