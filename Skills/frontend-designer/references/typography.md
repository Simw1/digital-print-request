# Typography Reference

## Pairing Methodology

### The Contrast-Complement Principle

Strong pairings create tension through difference while maintaining harmony through shared qualities.

**High contrast, shared DNA:**

- Serif display + Sans body (classic editorial)
- Geometric display + Humanist body (modern warmth)
- Monospace display + Proportional body (tech editorial)

**Low contrast, varied weight:**

- Same family, different weights (safe but can be bland)
- Same designer, different families (subtle sophistication)

### Pairing Categories

**Editorial/Magazine**

- Display: Freight Display, Tiempos, GT Super
- Body: Söhne, Untitled Sans, Akkurat

**Tech/Modern**

- Display: Monument Extended, ABC Favorit, Neue Haas Grotesk
- Body: IBM Plex Sans, Atkinson Hyperlegible, General Sans

**Luxury/Refined**

- Display: Canela, Sang Bleu, Austin
- Body: Founders Grotesk, Graphik, Suisse Int'l

**Playful/Bold**

- Display: Clash Display, Cabinet Grotesk, Basement Grotesque
- Body: Switzer, Satoshi, DM Sans

**Brutalist/Raw**

- Display: Druk, Neue Machina, GT America Compressed
- Body: Favorit Mono, JetBrains Mono, iA Writer

**Organic/Warm**

- Display: Recoleta, Fraunces, Lora
- Body: Source Serif Pro, Literata, Newsreader

## Free Font Sources

**Google Fonts (reliable, free)**

- Inter (overused—avoid unless justified)
- Space Grotesk (overused—avoid)
- DM Sans, DM Serif Display
- Fraunces, Lora
- JetBrains Mono
- Sora, Outfit
- Bricolage Grotesque (underused, excellent)
- Instrument Sans/Serif (underused)

**Fontsource (npm packages)**

- Same fonts as Google, better loading control

**Variable fonts to consider**

- Recursive (mono/sans axis)
- Fraunces (optical size, wonk)
- Roboto Flex (if you must use Roboto)

## Hierarchy System

### Scale Ratios

- **Minor third (1.2)**: Subtle, body-heavy content
- **Major third (1.25)**: Balanced, general purpose
- **Perfect fourth (1.333)**: Strong hierarchy, marketing
- **Golden ratio (1.618)**: Dramatic, display-heavy

### Recommended Scale (1.25 ratio, base 16px)

```
--text-xs: 0.64rem;    /* 10.24px */
--text-sm: 0.8rem;     /* 12.8px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.25rem;    /* 20px */
--text-xl: 1.563rem;   /* 25px */
--text-2xl: 1.953rem;  /* 31.25px */
--text-3xl: 2.441rem;  /* 39px */
--text-4xl: 3.052rem;  /* 48.8px */
--text-5xl: 3.815rem;  /* 61px */
```

### Weight Distribution

- Body: 400 (regular), 500 (medium for emphasis)
- Headings: 500–700 depending on typeface
- Display: Often lighter works better (300–500) at large sizes

## Line Height & Spacing

**Body text**: 1.5–1.7 (longer lines need more)
**Headings**: 1.1–1.3 (tighter is usually better)
**Display**: 0.9–1.1 (can go negative for impact)

**Letter spacing**

- Body: 0 to -0.01em
- Small caps/labels: 0.05–0.1em
- Large display: -0.02 to -0.05em (tighten as size increases)

## Anti-Patterns

**Generic defaults to replace:**

- Inter, Roboto, Open Sans, Lato → context-specific alternatives
- Arial, Helvetica → literally anything else
- System UI stack alone → at minimum add display font

**Hierarchy failures:**

- All same weight
- Insufficient size contrast between levels
- Too many weights (more than 3–4)

**Spacing issues:**

- Uniform line-height across all sizes
- No tracking adjustment at display sizes
- Orphans and widows ignored
