# Motion Principles

Define how the brand moves. Motion is personality expressed through time.

## Motion Personality

Motion should be an extension of brand personality. Map spectrum positions to motion characteristics:

### Energy Level

**High energy** (Playful, Expressive):
- Bouncy easing with overshoot
- Longer durations for delight moments
- More elements animate
- Exaggerated transformations

**Low energy** (Serious, Reserved):
- Precise, efficient easing
- Shorter durations
- Fewer animated elements
- Subtle transformations

### Timing Feel

**Snappy** (Confident, Direct):
- Quick durations (150-200ms)
- Sharp ease-out
- Minimal anticipation
- Immediate response

**Fluid** (Calm, Considered):
- Moderate durations (250-400ms)
- Smooth ease-in-out
- Gentle transitions
- Flowing between states

**Deliberate** (Premium, Refined):
- Longer durations (300-500ms)
- Custom bezier curves
- Sophisticated staging
- Every frame considered

### Weight Feel

**Light** (Casual, Airy):
- Fast acceleration
- Floaty deceleration
- Elements feel weightless
- Easy, effortless motion

**Weighted** (Substantial, Grounded):
- Slower acceleration (mass takes time)
- Satisfying deceleration
- Elements feel physical
- Purposeful, meaningful motion

## Core Timing Values

Establish consistent durations:

```
INSTANT:   0ms       System responses, no perceptible delay
MICRO:     100ms     Button press feedback, micro-interactions
FAST:      150ms     Quick transitions, tooltips, dropdowns
NORMAL:    250ms     Standard transitions, most UI changes
MODERATE:  350ms     Page transitions, modals, larger changes
SLOW:      500ms     Complex animations, emphasis moments
DRAMATIC:  700ms+    Hero moments, onboarding, celebrations
```

Adjust these based on brand personality. Snappy brands compress the scale; deliberate brands expand it.

## Easing Functions

### Standard Easings

**ease-out** (Deceleration): For elements entering, appearing, growing
- Starts fast, ends slow
- Natural "arriving" feel
- Most common for UI

**ease-in** (Acceleration): For elements leaving, disappearing, shrinking
- Starts slow, ends fast  
- Natural "departing" feel
- Use sparingly (can feel sluggish)

**ease-in-out** (Symmetrical): For state changes, transforms
- Slow start and end, fast middle
- Smooth, complete motion
- Good for position changes

### Custom Curves

**Expressive ease-out**: `cubic-bezier(0.16, 1, 0.3, 1)`
- Dramatic deceleration, modern feel

**Snappy**: `cubic-bezier(0.4, 0, 0.2, 1)`
- Material Design standard, quick and responsive

**Bouncy**: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Overshoots then settles, playful

**Smooth**: `cubic-bezier(0.45, 0, 0.55, 1)`
- Gentle, refined, almost linear feel

### Spring Physics

For more natural motion, use spring-based animation:
- **Stiffness**: How snappy (higher = faster)
- **Damping**: How much bounce (lower = more bounce)
- **Mass**: How heavy (higher = slower, weightier)

Playful brands: Lower damping, moderate stiffness
Serious brands: High damping, high stiffness

## Animation Hierarchy

Not everything should animate. Establish what moves and what doesn't:

### Always Animate

- State changes (hover, focus, active)
- Entrances and exits (appear/disappear)
- Feedback (success, error, loading)
- Navigation transitions

### Sometimes Animate

- Scroll-triggered reveals (if brand is expressive)
- Data visualisations (if data changes are meaningful)
- Micro-interactions (if brand is playful)
- Background elements (if brand is rich/maximal)

### Rarely Animate

- Static content
- Dense UI (tables, lists)
- Repeated actions (user fatigue)
- Accessibility-critical content

### Never Animate

- Essential information hiding behind animation
- Motion that delays task completion
- Automatic, non-triggered animation (unless explicitly decorative)

## Motion Patterns

### Entrance Patterns

**Fade**: Simplest, works everywhere
- Use: Default for appearing elements
- Duration: FAST to NORMAL

**Scale + Fade**: Adds dimensionality
- Use: Modals, cards, emphasized content
- Start: 95-97% scale
- Duration: NORMAL

**Slide + Fade**: Directional meaning
- Use: Navigation, contextual panels
- Direction: Indicates origin
- Duration: NORMAL to MODERATE

**Stagger**: Sequential revelation
- Use: Lists, grids, multiple items
- Delay: 30-50ms between items
- Duration: FAST per item

### Exit Patterns

Generally reverse entrances, but faster:
- Exit duration ~80% of entrance duration
- Don't over-animate exits (user is moving on)
- Fade alone is often sufficient for exits

### State Change Patterns

**Hover**: Subtle, instant feedback
- Colour shift, subtle lift, cursor change
- Duration: MICRO to FAST
- Ease: ease-out

**Focus**: Clear, accessible indication
- Outline, ring, background change
- Duration: FAST
- Must be visible, not just animated

**Active/Pressed**: Immediate response
- Scale down slightly (98%), colour shift
- Duration: MICRO
- Ease: linear or ease-out

### Loading Patterns

Match brand personality:
- **Minimal**: Simple spinner or pulse
- **Expressive**: Branded animation, progress indication
- **Skeleton**: Content placeholders (for content-heavy apps)

Duration: Continuous until loaded, but consider perceived performance (start instant, don't delay showing loader).

## Reduced Motion

Respect user preferences. When `prefers-reduced-motion: reduce`:

**Remove:**
- Decorative motion
- Parallax effects
- Auto-playing animation
- Complex transitions

**Keep:**
- Instant state feedback
- Simple fades (can reduce duration)
- Essential loading indicators
- Focus states

**Replace:**
- Complex entrances → Simple fades
- Slides → Fades
- Bounces → Straight easing

## Documentation Format

```
MOTION PERSONALITY
Energy: Moderate (confident but not flashy)
Timing: Snappy (150-250ms typical)
Weight: Light (responsive, effortless)

TIMING SCALE
micro:    100ms
fast:     150ms
normal:   200ms
moderate: 300ms
slow:     450ms

STANDARD EASINGS
appear:   cubic-bezier(0.16, 1, 0.3, 1)
disappear: cubic-bezier(0.4, 0, 1, 1)
transform: cubic-bezier(0.4, 0, 0.2, 1)

INTERACTION STATES
Hover:   background-color 100ms ease-out
Focus:   outline 150ms ease-out
Active:  transform 50ms ease-out (scale 0.98)

PAGE TRANSITIONS
Enter:   fade + slide-up 200ms, appear easing
Exit:    fade 150ms, disappear easing
```
