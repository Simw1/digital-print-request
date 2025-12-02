# Handoff Templates

Structures for handing creative direction to implementation (Claude Code or other technical execution).

## Implementation Brief Structure

When handing off to Claude Code, provide structured briefs that include concrete values and clear priorities.

### Basic Brief Template

```markdown
# [Project Name] Implementation Brief

## Brand Context
[2-3 sentences on brand personality and positioning]

## Colour System

### Primary
- Brand colour: [name] #HEXVAL
- Usage: [when to use]

### Supporting
- [name]: #HEXVAL - [role]
- [name]: #HEXVAL - [role]

### Functional
- Success: #HEXVAL
- Warning: #HEXVAL
- Error: #HEXVAL

### Neutrals
- Background: #HEXVAL
- Surface: #HEXVAL
- Border: #HEXVAL
- Text muted: #HEXVAL
- Text: #HEXVAL

## Typography

### Fonts
- Display: [Font Name] from [source]
- Body: [Font Name] from [source]

### Scale (base 16px)
- Display: 48px / weight 700
- Title: 32px / weight 600
- Heading: 24px / weight 600
- Body: 16px / weight 400
- Small: 14px / weight 400
- Micro: 12px / weight 500

### Line Heights
- Display: 1.1
- Title/Heading: 1.2
- Body: 1.5
- Small/Micro: 1.4

## Spacing
Base unit: [8px]
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96

## Border Radius
- Small: [4px] (inputs, small buttons)
- Medium: [8px] (cards, containers)
- Large: [16px] (modals, feature sections)
- Full: [9999px] (pills, avatars)

## Motion

### Timing
- Micro: 100ms
- Fast: 150ms
- Normal: 250ms
- Slow: 400ms

### Easing
- Default: cubic-bezier(0.4, 0, 0.2, 1)
- Enter: cubic-bezier(0.16, 1, 0.3, 1)
- Exit: cubic-bezier(0.4, 0, 1, 1)

## Implementation Priority

1. [First priority - what to implement first]
2. [Second priority]
3. [Third priority]

## Anti-Patterns to Avoid

- [Specific thing NOT to do]
- [Another thing to avoid]
- [Pattern that would break brand]

## Quality Criteria

The implementation is correct when:
- [ ] [Checkable criterion]
- [ ] [Another criterion]
- [ ] [Final criterion]
```

## CSS Custom Properties Template

For direct implementation, provide as CSS custom properties:

```css
:root {
  /* Colours - Primary */
  --color-brand: #HEXVAL;
  --color-brand-light: #HEXVAL;
  --color-brand-dark: #HEXVAL;
  
  /* Colours - Supporting */
  --color-accent: #HEXVAL;
  --color-secondary: #HEXVAL;
  
  /* Colours - Functional */
  --color-success: #HEXVAL;
  --color-warning: #HEXVAL;
  --color-error: #HEXVAL;
  --color-info: #HEXVAL;
  
  /* Colours - Neutrals */
  --color-background: #HEXVAL;
  --color-surface: #HEXVAL;
  --color-border: #HEXVAL;
  --color-text-muted: #HEXVAL;
  --color-text: #HEXVAL;
  --color-text-strong: #HEXVAL;
  
  /* Typography - Families */
  --font-display: 'Font Name', fallback, sans-serif;
  --font-body: 'Font Name', fallback, sans-serif;
  --font-mono: 'Font Name', monospace;
  
  /* Typography - Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Typography - Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Typography - Line Heights */
  --leading-none: 1;
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  
  /* Typography - Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  
  /* Spacing */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
  
  /* Border Radius */
  --radius-sm: 0.25rem;  /* 4px */
  --radius-md: 0.5rem;   /* 8px */
  --radius-lg: 1rem;     /* 16px */
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1);
  
  /* Motion */
  --duration-micro: 100ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
}
```

## Tailwind Config Template

For Tailwind projects:

```javascript
// tailwind.config.js
export default {
  theme: {
    colors: {
      brand: {
        DEFAULT: '#HEXVAL',
        light: '#HEXVAL',
        dark: '#HEXVAL',
      },
      accent: '#HEXVAL',
      // ... etc
    },
    fontFamily: {
      display: ['Font Name', 'fallback', 'sans-serif'],
      body: ['Font Name', 'fallback', 'sans-serif'],
    },
    fontSize: {
      // Scale with line-height
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      // ... etc
    },
    borderRadius: {
      sm: '0.25rem',
      DEFAULT: '0.5rem',
      lg: '1rem',
      full: '9999px',
    },
    // ... extend with motion, shadows, etc
  }
}
```

## Component Direction Template

For component-level guidance:

```markdown
# [Component Name] Direction

## Purpose
[What this component does and when to use it]

## Visual Specifications

### Structure
- [Key structural elements]
- [Layout approach]

### Sizing
- Height: [value] / Padding: [values]
- Min-width: [value] / Max-width: [value]

### States
- Default: [description]
- Hover: [changes]
- Focus: [changes]
- Active: [changes]
- Disabled: [changes]

### Variants
- Primary: [description]
- Secondary: [description]
- Ghost: [description]

## Typography
- Text: [size] / [weight] / [colour]
- Line height: [value]

## Motion
- Hover transition: [property] [duration] [easing]
- State change: [property] [duration] [easing]

## Accessibility
- Focus visible: [description]
- Min touch target: [size]
- ARIA requirements: [notes]

## Anti-Patterns
- Don't: [specific thing to avoid]
- Don't: [another thing]
```

## Quick Direction Format

For minimal handoffs (quick projects, informal contexts):

```markdown
# Quick Direction: [Project]

**Vibe**: [3 words describing feel]

**Colours**: 
- Main: #HEXVAL
- Accent: #HEXVAL  
- Background: #HEXVAL
- Text: #HEXVAL

**Fonts**:
- Headlines: [Font] bold
- Body: [Font] regular

**Feel**: [1-2 sentences on personality]

**Avoid**: [Key anti-patterns]
```

## Prompt Format for Claude Code

When generating prompts for Claude Code execution:

```markdown
Create [component/page/feature] following this brand direction:

VISUAL SYSTEM:
[Paste relevant portions of brand system]

SPECIFIC REQUIREMENTS:
- [Requirement 1]
- [Requirement 2]

THIS SHOULD FEEL:
[Personality notes]

AVOID:
- [Anti-pattern 1]
- [Anti-pattern 2]

QUALITY CHECK:
Implementation is correct when [criteria].
```

Keep prompts focused. Claude Code doesn't need full brand bible for every component—extract relevant portions.
