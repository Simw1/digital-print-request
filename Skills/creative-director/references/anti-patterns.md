# Anti-Patterns

What to avoid. These patterns indicate weak creative direction, generic output, or poor execution.

## Strategic Anti-Patterns

### Toothless Positioning

**Symptom**: Brand pillars that could apply to anyone.

Examples of weak pillars:
- "Quality" (expected, not differentiating)
- "Innovation" (meaningless without specifics)
- "Customer-focused" (baseline expectation)
- "Trustworthy" (says nothing, who claims untrustworthy?)

**Fix**: Pillars should create enemies. If no one would claim the opposite, it's not distinctive.

### Fence-Sitting Personality

**Symptom**: Personality described in balanced pairs.

Examples:
- "Professional yet friendly"
- "Innovative but reliable"
- "Modern with classic values"

**Fix**: Commit to a position. Accept tradeoffs. Saying "we're X, which means we're not Y" is stronger than "we're both X and Y."

### Aspirational vs Actual

**Symptom**: Brand claims not reflected in execution.

Examples:
- Claims "playful" but no humour anywhere
- Claims "premium" but generic stock imagery
- Claims "human" but robotic copy

**Fix**: Every touchpoint must express the claimed personality. If it doesn't, either change the execution or change the claim.

## Visual Anti-Patterns

### The AI Slop Palette

**Symptom**: Generic gradient palettes, especially:
- Purple to blue gradients on white
- Teal to purple combinations
- Pink to orange "sunrise" gradients
- Over-saturated complementary pairs

**Why it happens**: AI defaults to visually "safe" palettes that photograph well but say nothing.

**Fix**: Start with meaning. What colour tells this brand's story? Derive palette from intent, not aesthetics alone.

### Safe Typography

**Symptom**: Fonts chosen for availability, not character.

Common offenders:
- Inter (good font, overused to meaninglessness)
- System font stacks (no commitment)
- Montserrat (the "I didn't choose" choice)
- Roboto (Google default)
- Poppins (friendly generic)

**Why it happens**: These fonts work well and are free. But so does white paint—doesn't mean every room should be white.

**Fix**: Typography is brand voice. Invest time finding type that sounds like this brand, even if implementation is harder.

### Everything Is A Card

**Symptom**: Every element in a rounded-corner container with shadow.

- Cards containing single elements
- Cards within cards
- Cards as sole visual organisation
- Uniform card sizes throughout

**Why it happens**: Cards are a safe, predictable pattern. They "work."

**Fix**: Question each container. Does this need separation? Could hierarchy be achieved through typography or space instead?

### Gradient As Personality

**Symptom**: Gradient used as primary brand element because nothing else is distinctive.

- Gradient backgrounds
- Gradient text
- Gradient buttons
- Gradient everywhere

**Why it happens**: Gradients add visual interest cheaply. They're a shortcut to "designed."

**Fix**: If the gradient does the heavy lifting, the system is weak. Build distinctiveness into structure, then add gradients if appropriate.

### Rounded Corner Overload

**Symptom**: Maximum border-radius on everything.

- Fully rounded buttons (pill shape)
- Large border-radius on containers
- Rounded image masks
- Rounded everything

**Why it happens**: Rounded = friendly = approachable. Became default.

**Fix**: Border radius is a dial, not a switch. Adjust based on brand personality. Sharp corners have meaning too.

### Hero Section Template

**Symptom**: Identical hero section structure:
- Large heading
- Subheading paragraph
- Two buttons (primary + secondary)
- Illustration or stock photo on right
- Centered on mobile

**Why it happens**: It "works." It's expected. It's easy.

**Fix**: If the hero is templated, what makes this brand memorable? Question every convention.

## Colour Anti-Patterns

### Too Many Colours

**Symptom**: 6+ colours with no clear hierarchy.

**Why it happens**: Adding colour feels like adding design. More = more designed?

**Fix**: Constraint creates cohesion. Most strong brands operate with 2-3 primary colours maximum.

### Colour Without Meaning

**Symptom**: Colours assigned arbitrarily.

- Random section backgrounds
- Colour for "interest" without logic
- Different colours for similar elements

**Why it happens**: Need visual variety, colour is easy lever.

**Fix**: Every colour should have a role. Background. Surface. Action. Accent. If you can't name the role, question the colour.

### Dark Mode Inversion

**Symptom**: Dark mode is just inverted light mode.

- White becomes black
- Black becomes white
- Everything else stays

**Why it happens**: Quick implementation.

**Fix**: Dark mode needs rethinking, not inverting. Adjust saturations, rethink elevation model, may need colour variants.

## Typography Anti-Patterns

### Font Soup

**Symptom**: Too many typefaces without logic.

- Different font per section
- Decorative fonts for headings everywhere
- No consistent text treatment

**Why it happens**: Variety confused with design.

**Fix**: Maximum 2-3 typefaces. Each must have clear role.

### Size Soup

**Symptom**: Arbitrary type sizes throughout.

- No consistent scale
- Similar but not identical sizes
- Sizes that almost relate but don't

**Why it happens**: Sizing by feel per element.

**Fix**: Define scale, apply consistently. If it doesn't fit scale, question whether it should exist.

### Weight Soup

**Symptom**: Multiple weights without system.

- Bold for some headings, not others
- Various weights scattered throughout
- Semibold and bold used interchangeably

**Why it happens**: Adjusting weight per element for "emphasis."

**Fix**: Define weight roles. Stick to 2-3 weights with clear usage rules.

## Motion Anti-Patterns

### Everything Animates

**Symptom**: Animation on every interaction, scroll, load.

- Page load animations that delay content
- Scroll-triggered animations everywhere
- Animated backgrounds
- Hover animations on everything

**Why it happens**: Animation = polish, more animation = more polish?

**Fix**: Motion is emphasis. If everything moves, nothing is emphasised. Animate deliberately.

### Inconsistent Timing

**Symptom**: Different durations and easings throughout.

- Some transitions 200ms, others 500ms
- Mixed easing functions
- No timing relationship between elements

**Why it happens**: Adding motion per element without system.

**Fix**: Define timing scale and easing set. Apply consistently.

### Performance-Killing Animation

**Symptom**: Animations that hurt performance.

- Animating expensive properties (width, height, top, left)
- Large animated areas
- Animation on scroll without throttle

**Fix**: Animate only transform and opacity. Test on low-end devices.

## Layout Anti-Patterns

### Arbitrary Spacing

**Symptom**: Spacing that almost relates but doesn't.

- 23px here, 25px there
- Slightly different margins throughout
- "Eyeballed" spacing

**Why it happens**: Adjusting per element until it "looks right."

**Fix**: Define spacing scale, apply it. 8, 16, 24, 32, 48—not 23, 27, 31.

### Misaligned Elements

**Symptom**: Elements that almost align but don't.

- Text that starts near but not at same point
- Images that almost line up
- Columns that sort of relate

**Why it happens**: No grid, or grid not followed.

**Fix**: If it's close to aligned, align it. Close but not aligned looks like error.

### Responsive Afterthought

**Symptom**: Desktop design scaled down.

- Tiny text on mobile
- Horizontal scroll
- Touch targets too small
- Layout that doesn't adapt

**Why it happens**: Designing desktop first, squeezing for mobile.

**Fix**: Design for constraints first. Mobile informs structure; desktop expands it.

## Process Anti-Patterns

### Skipping Strategy

**Symptom**: Visual design before positioning.

- Beautiful design that doesn't fit brand
- Aesthetics that could be anyone's
- Style without substance

**Why it happens**: Visuals are more fun than strategy.

**Fix**: Strategy first. Always. Colours, typography, layout serve positioning.

### Reference As Template

**Symptom**: Inspiration becomes copying.

- Near-identical to reference
- Surface patterns without understanding
- "Do it like this site"

**Why it happens**: References provide safety.

**Fix**: Understand why reference works. Apply principle, not pattern.

### Designing In Isolation

**Symptom**: Hero page designed without system.

- One beautiful page that doesn't scale
- Patterns that break on other pages
- Design that only works in hero context

**Why it happens**: Showing "hero" page to stakeholders.

**Fix**: Design systems, not pages. Components should work across contexts.
