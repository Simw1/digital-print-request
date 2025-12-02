# Colour Theory Reference

## Palette Generation Methodology

### Role-Based System

Every palette needs clear role assignments:

```
BACKGROUNDS
--bg-base: Primary background
--bg-surface: Cards, elevated elements
--bg-subtle: Secondary sections, alternating rows

PRIMARY
--primary: Main brand/action colour
--primary-hover: Interaction state
--primary-muted: Backgrounds, badges

ACCENT
--accent: Secondary action, highlights
--accent-hover: Interaction state

TEXT
--text: Primary text
--text-muted: Secondary, captions
--text-inverted: On dark/coloured backgrounds

SEMANTIC
--success: Positive states
--warning: Caution states
--error: Error states
--info: Informational
```

### Generation Approaches

**1. Anchored Expansion**
Start with one colour (brand, mood, inspiration), then expand:

- Background: Desaturate and lighten/darken dramatically
- Accent: Complementary or split-complementary
- Text: Near-black with slight hue tint from primary

**2. Natural Harmony**
Sample from photographs, art, nature:

- Extract 5–7 colours
- Assign roles based on visual weight
- Adjust saturation for digital use (usually reduce)

**3. Systematic Construction**
Use OKLCH for perceptually uniform adjustments:

```css
/* Same perceived lightness, different hues */
--blue: oklch(65% 0.15 250);
--purple: oklch(65% 0.15 300);
--teal: oklch(65% 0.15 180);
```

### OKLCH Primer

`oklch(lightness chroma hue)`

- Lightness: 0%–100%
- Chroma: 0–0.4 (0 = grey, higher = more saturated)
- Hue: 0–360 degrees

**Why OKLCH over HSL:**

- Perceptually uniform (same L value = same perceived brightness)
- Better for generating harmonious palettes
- Native CSS support (modern browsers)

### Contrast Requirements

**WCAG AA (minimum)**

- Normal text: 4.5:1
- Large text (18px+ bold or 24px+): 3:1
- UI components: 3:1

**WCAG AAA (enhanced)**

- Normal text: 7:1
- Large text: 4.5:1

**Tools:**

- Contrast checker: webaim.org/resources/contrastchecker
- Palette testing: randoma11y.com

## Palette Archetypes

### Light Mode Foundations

**Warm neutral:**

```css
--bg-base: #faf8f5;
--bg-surface: #ffffff;
--text: #1a1613;
--text-muted: #6b5d52;
```

**Cool neutral:**

```css
--bg-base: #f5f7fa;
--bg-surface: #ffffff;
--text: #0f172a;
--text-muted: #64748b;
```

**Paper/Cream:**

```css
--bg-base: #f9f6f0;
--bg-surface: #fffdf8;
--text: #2d2a24;
--text-muted: #78746a;
```

### Dark Mode Foundations

**True dark:**

```css
--bg-base: #0a0a0b;
--bg-surface: #141416;
--text: #fafafa;
--text-muted: #a1a1aa;
```

**Soft dark:**

```css
--bg-base: #1a1a1e;
--bg-surface: #242428;
--text: #f0f0f2;
--text-muted: #9898a0;
```

**Warm dark:**

```css
--bg-base: #171412;
--bg-surface: #211d1a;
--text: #f5f0eb;
--text-muted: #a89e94;
```

## Anti-Patterns

**AI Slop colours:**

- `#6366f1` (Indigo-500) → the default AI purple
- Purple-to-blue gradients → overused to meaninglessness
- Teal + coral combination → 2019 startup kit
- `#10b981` (Emerald-500) → generic "success" green

**Contrast failures:**

- Light grey text on white
- Coloured text on coloured backgrounds without checking
- Placeholder text that fails contrast

**Saturation issues:**

- Over-saturated palettes that strain eyes
- Under-saturated palettes that feel washed out
- Inconsistent saturation across palette (jarring)

**Missing roles:**

- No hover states defined
- No disabled state colours
- No focus ring colour considered

## Contextual Guidelines

**Finance/Corporate:** Muted, high contrast, trustworthy. Navy, forest, burgundy.

**Creative/Portfolio:** Can push boundaries. Consider monochromatic with single accent.

**E-commerce:** Clear CTAs, scannable. Neutral base with strong action colour.

**Editorial:** Often near-monochromatic. Typography carries weight, colour is accent.

**Playful/Consumer:** Higher saturation acceptable. Consider gradients if purposeful.

**Healthcare/Wellness:** Calming, accessible. Blue, green, soft neutrals.
