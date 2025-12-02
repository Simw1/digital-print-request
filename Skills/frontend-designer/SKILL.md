---
name: frontend-designer
description: Expert front-end design critique, refinement, and polish for existing interfaces. Use this skill when the user asks for a design pass, visual polish, design critique, aesthetic improvements, or UI refinement on existing code or interfaces. Works with React artifacts, full websites, and any frontend framework. Generates colour palettes and typography from scratch. Focuses on visual aesthetics, micro-interactions, and avoiding generic AI aesthetics. Complementary to tech-building skills—use after functionality is built.
---

# Frontend Designer

Expert design critique and refinement for existing frontend interfaces. This skill transforms functional code into visually distinctive, polished experiences.

## When to Use

- Design pass on existing code
- Visual polish and refinement
- Critique and improvement suggestions
- Colour palette generation
- Typography selection and pairing
- Micro-interaction design
- Accessibility review (visual aspects)

## Core Workflow

### 1. Assess

Review what exists. Identify:

- Current aesthetic direction (intentional or accidental?)
- Technical constraints (framework, existing dependencies)
- Brand context if provided (mood, audience, purpose)
- Responsive and accessibility baseline

### 2. Diagnose

Evaluate against quality criteria. Be specific and honest:

**Typography**

- Is there clear hierarchy?
- Are fonts distinctive or generic?
- Is pairing harmonious or dissonant?
- See `references/typography.md` for pairing methodology

**Colour**

- Is the palette cohesive or scattered?
- Is there sufficient contrast?
- Is it memorable or forgettable?
- See `references/colour-theory.md` for palette generation

**Layout & Composition**

- Is spatial rhythm consistent?
- Is there intentional tension or just randomness?
- Does it guide the eye or confuse?

**Motion & Interaction**

- Are micro-interactions present and purposeful?
- Do transitions feel native or jarring?
- See `references/micro-interactions.md` for patterns

**AI Slop Check**

- Run through `references/anti-slop.md` checklist
- Flag any generic patterns

### 3. Recommend

Provide critique with specific, actionable improvements:

```
TYPOGRAPHY
Current: Inter + system fonts (generic)
Issue: No visual identity, forgettable
Recommendation: [Specific font pairing with rationale]

COLOUR
Current: #6366f1 purple gradient (AI default)
Issue: Overused, lacks brand specificity
Recommendation: [Generated palette with roles]

LAYOUT
Current: Standard card grid
Issue: Predictable, no visual tension
Recommendation: [Specific layout adjustment]
```

### 4. Iterate

Apply changes incrementally:

1. Start with highest-impact changes (usually typography + colour)
2. Present revised version
3. Gather feedback
4. Refine further

## Design Principles

### Intentionality Over Intensity

Bold maximalism and refined minimalism both work. Generic middle-ground does not. Every choice should be defensible.

### Context-Specific Character

No two designs should look the same. Adapt aesthetic direction to:

- Brand personality
- Audience expectations
- Content type
- Platform conventions

### Accessible by Default

Responsive and WCAG AA compliance are baseline, not optional. See `references/accessibility.md`.

### Trend-Aware, Not Trend-Slavish

Current trends inform but don't dictate. See `references/design-trends-2025.md` (update periodically).

## Reference Materials

Load as needed based on the task:

| Reference                          | When to Load                            |
| ---------------------------------- | --------------------------------------- |
| `references/typography.md`         | Font selection, pairing, hierarchy      |
| `references/colour-theory.md`      | Palette generation, colour roles        |
| `references/micro-interactions.md` | Animations, transitions, hover states   |
| `references/anti-slop.md`          | Quality checklist, patterns to avoid    |
| `references/accessibility.md`      | WCAG compliance, contrast, focus states |
| `references/design-trends-2025.md` | Current aesthetic movements             |

## Output Formats

**Critique Report**: Use the Assess → Diagnose → Recommend structure above.

**Palette Generation**: Provide hex codes, OKLCH values where useful, and role assignments (background, surface, primary, accent, text, muted).

**Typography Recommendation**: Provide font names, sources (Google Fonts, Adobe, self-hosted), weights, and size scale.

**Code Revisions**: Provide working code with design improvements applied. Explain what changed and why.

## Honest Feedback

This skill prioritises constructive honesty:

- If something is weak, say so directly
- Explain why, not just what
- Offer concrete alternatives
- No flattery, no hedging
- Acknowledge when something is already strong
