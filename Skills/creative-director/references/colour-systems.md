# Colour Systems

Build colour palettes that communicate brand personality and function across all applications.

## Colour System Structure

### Primary Palette (1-3 colours)

The brand's core identity. Rules:
- One colour should dominate (the "brand colour")
- Others support, never compete
- Must work in isolation (single-colour applications exist)

**Selection criteria:**
- Does it feel like the brand personality?
- Is it distinctive in context? (Check competitors)
- Does it have sufficient range? (Can generate tints/shades)

### Supporting Palette (2-4 colours)

Extends the primary palette. Rules:
- Should feel like they belong together
- Different enough to provide contrast
- Each has a distinct role

**Selection criteria:**
- Do they complement without matching?
- Can each stand alone if needed?
- Is there clear hierarchy?

### Functional Colours

Semantic colours for states and feedback:
- **Success**: Typically green family (but check cultural context)
- **Warning**: Typically amber/yellow family
- **Error**: Typically red family
- **Info**: Typically blue family or neutral

**Selection criteria:**
- Distinct from brand colours (don't confuse meaning)
- Meet contrast requirements (WCAG AA minimum)
- Consistent with overall temperature (warm brand = warm success green)

### Neutrals

The workhorses. Build a scale:
- **Background**: Lightest neutral
- **Surface**: Elevated surfaces (cards, modals)
- **Border**: Subtle divisions
- **Text muted**: Secondary text
- **Text**: Primary text
- **Text strong**: Emphasis

**Selection criteria:**
- Slightly tinted toward brand colour (not pure grey)
- Sufficient steps (typically 7-10)
- Clear use cases for each step

## Colour Relationships

### Harmony Methods

**Complementary**: Opposite on colour wheel. High energy, use sparingly.

**Analogous**: Neighbours on colour wheel. Harmonious, can lack contrast.

**Triadic**: Evenly spaced (120°). Vibrant, requires careful balance.

**Split-complementary**: Base + two colours adjacent to complement. Contrast with less tension.

**Temperature contrast**: Warm + cool. Natural visual tension.

Choose based on brand personality:
- Serious/refined → Analogous or single-hue
- Energetic/playful → Complementary or triadic
- Sophisticated → Temperature contrast with restraint

### Creating Relationships

Start with brand colour, then:

1. **Tints/shades**: Same hue, different lightness
2. **Desaturated variants**: Same hue, reduced chroma
3. **Temperature shifts**: Adjust warm/cool while maintaining relationship
4. **Harmonic additions**: Use colour wheel relationships

## Colour Spaces

### For Design Work

Use **OKLCH** or **HSLuv** for perceptually uniform manipulation:
- Consistent lightness perception across hues
- Predictable saturation adjustments
- Better for generating scales

### For Output

- **Hex**: Web, simple cases
- **RGB**: Digital applications
- **HSL**: CSS custom properties (easier manipulation)
- **OKLCH**: Modern CSS, perceptual accuracy

### Common Gotchas

- Yellow appears lighter than blue at same L value (in HSL)
- Red and green can appear similar in certain contexts
- Saturated colours on saturated backgrounds vibrate (optical interference)
- Dark mode ≠ inverted light mode (rethink, don't flip)

## Building Scales

### Lightness Scale Method

For each base colour, create 9-10 steps:

```
50:  Lightest (backgrounds, subtle highlights)
100: Very light (hover states on light backgrounds)
200: Light (borders, dividers)
300: Medium-light (disabled states)
400: Medium (secondary elements)
500: Base (the colour itself)
600: Medium-dark (hover states)
700: Dark (pressed states)
800: Very dark (high contrast needs)
900: Darkest (text on light backgrounds)
950: Near-black (maximum contrast)
```

### Generating Steps

In OKLCH, adjust L value in roughly equal perceptual steps:
- Light end: L 95-98%
- Dark end: L 15-25%
- Maintain or slightly reduce C (chroma) at extremes

Avoid:
- Pure white (L 100%) or pure black (L 0%) in scales
- Abrupt saturation changes between steps
- Non-monotonic lightness progression

## Accessibility Requirements

### Contrast Ratios (WCAG 2.1)

- **AA Normal text**: 4.5:1 minimum
- **AA Large text**: 3:1 minimum (18px+ or 14px+ bold)
- **AAA Normal text**: 7:1 minimum
- **UI components**: 3:1 against adjacent colours

### Testing Approach

1. Primary text on all background colours
2. Interactive elements against backgrounds
3. State colours (hover, focus, active) against backgrounds
4. Disabled states (can be lower contrast, but should be visible)

### Common Failures

- Light grey text on white (aesthetics vs accessibility)
- Coloured text on coloured backgrounds (brand colour overuse)
- Focus states that don't meet contrast requirements
- Error states relying on colour alone (add icons/text)

## Dark Mode Considerations

Don't simply invert. Instead:

**Rethink hierarchy:**
- Background becomes dark neutral
- Surfaces become slightly lighter
- Elevation shown through lighter backgrounds (not shadows)

**Adjust colours:**
- Reduce saturation slightly (saturated colours glow on dark)
- May need different brand colour variants for dark contexts
- Functional colours often need adjustment

**Maintain personality:**
- Dark mode should feel like the same brand
- Same colour relationships, different execution

## Documentation Format

For brand guidelines, document colours as:

```
PRIMARY
Brand Blue
Hex: #2563EB
RGB: 37, 99, 235
HSL: 221, 83%, 53%
OKLCH: 54% 0.19 262

Use for: Primary actions, key brand moments
Avoid: Large background areas, text (too saturated)
Pairs with: Snow White (#FAFAFA), Slate 900 (#0F172A)
```

Include:
- Name (functional or evocative, depending on brand)
- Values in multiple formats
- Usage guidance
- Pairing suggestions
- Scale reference if applicable
