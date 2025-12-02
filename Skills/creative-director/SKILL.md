---
name: creative-director
description: Strategic creative direction for brand identity, design systems, and visual strategy. Use when creating brand guidelines, design system documentation, visual identity, mood/aesthetic direction, or any upstream creative work that will inform implementation. Produces documentation, style guides, and implementation briefs for Claude Code - not code itself. Sits upstream of frontend-design and frontend-designer skills. Triggers include requests for branding, visual identity, design systems, style guides, aesthetic direction, look-and-feel, or creative strategy.
---

# Creative Director

Strategic creative direction for brand identity and design systems. This skill produces the vision and documentation that technical skills then execute.

## Scope

**This skill produces:**
- Brand identity systems and guidelines
- Design system documentation
- Visual strategy and aesthetic direction
- Implementation briefs for Claude Code
- Mood and personality frameworks

**This skill does NOT produce:**
- Working code (use frontend-design)
- Code refinements (use frontend-designer)
- Finished visual assets

## Initial Questions

Before creating any brand system, establish:

1. **Scope**: What's being branded? (Product, company, feature, campaign, personal project)
2. **Depth**: How comprehensive? (Quick mood board → Full brand bible)
3. **Formality**: Who's the audience? (Personal use, team handoff, client presentation, external documentation)
4. **Constraints**: Technical, budget, timeline, existing assets?
5. **Starting point**: Blank slate, existing rough direction, or refinement of something established?

Adjust depth and formality based on answers. A personal side project needs different documentation than a client brand package.

## Core Workflow

### 1. Discovery

Understand the entity being branded:

**Purpose & Position**
- What does it do? What problem does it solve?
- Who is it for? (Be specific - not "everyone")
- What makes it different from alternatives?
- Where does it sit in its market/context?

**Personality**
- If this were a person, how would they speak? Move? Dress?
- What three adjectives capture its essence?
- What should people *feel* when they encounter it?

**Aspirations & Constraints**
- Where is it going? What does success look like?
- What must be avoided? (Competitors to differentiate from, past mistakes, cultural sensitivities)
- Technical constraints (platforms, accessibility requirements, existing systems)

### 2. Strategic Foundation

Before any visual decisions, establish:

**Positioning Statement**
One sentence: [Entity] is [what] for [who] that [unique value].

**Brand Pillars**
3-5 core attributes that guide all decisions. Each pillar should be:
- Defensible (not just "quality" or "innovation")
- Actionable (can evaluate decisions against it)
- Differentiating (not table stakes)

**Personality Spectrum**
See `references/personality-framework.md` for the full framework. Position on key spectrums:
- Formal ↔ Casual
- Traditional ↔ Progressive
- Serious ↔ Playful
- Reserved ↔ Expressive
- Refined ↔ Raw

### 3. Visual System

With strategy established, build the visual language:

**Colour System**
See `references/colour-systems.md` for methodology.
- Primary palette (1-3 colours)
- Supporting palette (2-4 colours)
- Functional colours (success, warning, error, info)
- Colour roles and usage rules

**Typography System**
See `references/typography-systems.md` for methodology.
- Display typeface (headlines, impact moments)
- Body typeface (readable text)
- Supporting typefaces if needed (code, accents)
- Type scale and hierarchy
- Usage rules

**Spatial System**
- Base unit and scale
- Rhythm and density philosophy
- Layout principles

**Motion Principles**
See `references/motion-principles.md` for philosophy.
- Personality of movement (snappy, fluid, bouncy, precise)
- Hierarchy of motion (what moves, what doesn't)
- Timing and easing defaults

### 4. Documentation

Produce deliverables appropriate to the scope:

**Quick Direction** (Minimal scope)
- Colour palette with hex values
- Typography recommendation
- 3-5 mood/reference images or descriptions
- Core personality notes

**Design System** (Standard scope)
- Everything above, plus:
- Detailed colour usage guide
- Typography scale and hierarchy
- Spacing system
- Component-level direction
- Do's and don'ts

**Brand Bible** (Comprehensive scope)
- Everything above, plus:
- Brand story and positioning
- Voice and tone guidelines
- Photography/imagery direction
- Application examples
- Partner/co-branding rules

### 5. Handoff

For implementation via Claude Code:
See `references/handoff-templates.md` for prompt structures.

Generate implementation briefs that include:
- Concrete values (hex codes, font names, pixel values)
- Priority order (what to implement first)
- Quality criteria (how to know it's right)
- Anti-patterns (what to avoid)

## Design Principles

### Timeless Over Trendy

Current aesthetics inform but don't dictate. A brand should feel:
- Of its moment (not dated)
- Built to last (not disposable)
- Considered (not reactive)

See `references/visual-principles.md` for enduring principles.

### Coherence Over Consistency

A system that holds together through shared logic, not rigid rules. Elements should rhyme, not repeat.

### Distinctive Over Safe

Every brand decision is a chance to differentiate. "Safe" choices compound into forgettable results. Push for specificity.

### Defensible Over Arbitrary

Every choice should be explainable. "Because it looked nice" isn't sufficient. "Because it reinforces the approachable-but-professional positioning" is.

## Anti-Patterns

See `references/anti-patterns.md` for detailed checklist.

**Strategic Anti-Patterns**
- Brand pillars that could apply to anyone
- Positioning that doesn't differentiate
- Personality descriptions without teeth

**Visual Anti-Patterns**
- Palettes that don't commit (too many colours, no hierarchy)
- "Startup blue" and other default choices
- Typography that says nothing (Inter, system fonts, safe pairs)
- Generic gradients (especially purple/blue on white)

## Reference Materials

Load as needed:

| Reference | When to Load |
|-----------|--------------|
| `references/personality-framework.md` | Defining brand personality |
| `references/colour-systems.md` | Building colour palettes |
| `references/typography-systems.md` | Type selection and systems |
| `references/motion-principles.md` | Interaction and animation philosophy |
| `references/visual-principles.md` | Core design principles |
| `references/anti-patterns.md` | Quality checklist |
| `references/handoff-templates.md` | Claude Code implementation briefs |

## Output Quality

**Strong output:**
- Choices are specific and defensible
- System components relate to each other logically
- Documentation matches requested formality
- Implementation guidance is actionable

**Weak output:**
- Generic choices that could apply to anything
- Components that don't connect
- Over-engineered for simple needs (or under-engineered for complex ones)
- Abstract guidance without concrete values
