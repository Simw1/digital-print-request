# Anti-Slop Reference

Comprehensive checklist of AI aesthetic patterns to identify and replace. Use during critique to flag generic elements.

## Typography Slop

### Fonts to Flag

- **Inter**: Fine typeface, massively overused. Replace with: Söhne, General Sans, Switzer, Outfit
- **Space Grotesk**: Was fresh in 2021, now AI default. Replace with: Instrument Sans, ABC Favorit, DM Sans
- **Roboto/Open Sans/Lato**: Google Docs energy. Replace with anything distinctive
- **System UI stack alone**: Acceptable for apps, lazy for marketing
- **Poppins**: The geometric sans of "I didn't think about fonts"

### Typography Anti-Patterns

- Single font family for everything
- No variation in weight beyond regular/bold
- Identical line-height across all sizes
- No tracking adjustments at display sizes
- Generic heading sizes (h1=32, h2=24, h3=20...)

## Colour Slop

### Specific Hex Codes to Avoid

```
#6366f1 - Indigo-500 (THE AI purple)
#8b5cf6 - Violet-500 (second most common)
#3b82f6 - Blue-500 (generic tech blue)
#10b981 - Emerald-500 (default success)
#f97316 - Orange-500 (default warning)
#ef4444 - Red-500 (default error)
```

These aren't bad colours—they're bad because they're defaults. Seeing them signals "no design thought occurred."

### Palette Anti-Patterns

- Purple-to-blue gradient (especially diagonal)
- Teal + coral accent combination
- Generic grey scale (#f5f5f5, #e5e5e5, #737373...)
- Tailwind defaults used verbatim
- White background with single accent colour (no depth)
- Gradients on everything
- Gradients on nothing (flat when texture would help)

### Missing Colour Considerations

- No hover state variations
- No disabled states
- No dark mode consideration
- Surface colours identical to background

## Layout Slop

### Hero Section Patterns

- Centered text, big heading, subheading, CTA button
- Left text, right image (the "SaaS landing page")
- Full-bleed gradient background
- Generic blob SVG decoration
- Stock illustration in corner

### Card Patterns

- 3-column equal-width grid
- Identical cards in a row
- Rounded corners + shadow (the combo)
- Icon, heading, paragraph, link (in that exact order)
- No variation in card sizes

### Spacing Anti-Patterns

- 4px increments only (Tailwind defaults)
- Uniform padding everywhere
- No intentional density variation
- Section spacing identical throughout
- Container max-width: always 1200px

### Responsive Anti-Patterns

- Desktop first, mobile afterthought
- Columns just stack without reimagining
- Same padding ratios at all breakpoints
- No layout changes between tablet and mobile

## Component Slop

### Buttons

- Pill shape (rounded-full) by default
- Indigo/purple fill
- "Get Started" copy
- Shadow on hover (the only interaction)

### Forms

- Grey border inputs
- Purple focus ring
- Rounded corners on everything
- Floating labels (when unnecessary)
- No error state styling

### Navigation

- Logo left, links center, CTA right
- Hamburger at mobile (without reimagining)
- Transparent header going solid on scroll
- Mega menus that look like spreadsheets

### Footers

- 4-column link grid
- Newsletter signup
- Social icons in a row
- Grey background, always

## Motion Slop

### Animation Anti-Patterns

- Fade-in-from-bottom on every element
- Identical stagger timing
- Slow animations (>400ms for simple states)
- Bounce/spring on everything
- Scroll-triggered animations on every section
- Parallax for its own sake

### Missing Motion

- No hover states
- No focus states
- No loading states
- No transition between states
- Instant show/hide instead of fade

## Content Slop

### Copy Patterns

- "Supercharge your workflow"
- "The modern solution for..."
- "Trusted by thousands"
- "Start your journey"
- "Take your X to the next level"

### Lorem Ipsum Problems

- Obvious placeholder text shipped
- Content that's clearly "fill this later"
- Mismatched content lengths

## Image/Visual Slop

### Illustration Styles

- Flat illustration with purple/blue figures
- Geometric people with tiny heads
- Undraw-style SVGs
- 3D rendered abstract shapes
- Blob gradients as decoration

### Photography Anti-Patterns

- Obvious stock (handshake photos, laptop-at-coffee-shop)
- Over-processed filters
- Inconsistent image treatment
- Low quality/resolution
- No art direction

## Diagnostic Questions

Run through these when critiquing:

1. **Font check**: Would I recognise this font as a deliberate choice?
2. **Colour check**: Could I have generated this palette with a default tool?
3. **Layout check**: Have I seen this exact layout on 10+ other sites?
4. **Component check**: Do these look like Tailwind UI defaults?
5. **Motion check**: Is animation present, purposeful, and restrained?
6. **Overall**: If I squint, does this look like it was designed or generated?

## Replacement Principles

When flagging slop, don't just identify—offer alternatives:

**Instead of defaults** → Context-specific choices
**Instead of safe** → Intentional (bold or restrained)
**Instead of generic** → Memorable
**Instead of decoration** → Purposeful

The goal isn't originality for its own sake. It's demonstrating that a human (or thoughtful AI) considered the specific context and made deliberate choices.
