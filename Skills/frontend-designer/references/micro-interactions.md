# Micro-Interactions Reference

## Core Principles

### Purpose Over Decoration

Every animation should either:

- Provide feedback (user action acknowledged)
- Guide attention (something changed)
- Create continuity (spatial relationship between states)
- Add delight (sparingly, at key moments)

### Performance First

- Animate only `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding`
- Use `will-change` sparingly and remove after animation
- Prefer CSS over JavaScript for simple transitions

## Timing Functions

### Standard Curves

```css
/* Ease out - decelerating, natural feeling */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);

/* Ease in-out - symmetrical, formal */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

/* Spring - bouncy, playful */
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Snap - quick start, controlled finish */
--snap: cubic-bezier(0.5, 0, 0.1, 1);
```

### Duration Guidelines

- **Micro (instant feedback)**: 100–150ms
- **Small (hover, focus)**: 150–200ms
- **Medium (expand, collapse)**: 200–300ms
- **Large (page transitions)**: 300–500ms
- **Complex (orchestrated)**: 400–800ms

**Rule:** If you notice the animation, it's probably too slow.

## Common Patterns

### Hover States

**Button lift:**

```css
.button {
  transition:
    transform 150ms var(--ease-out),
    box-shadow 150ms var(--ease-out);
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

**Colour shift:**

```css
.link {
  transition: color 150ms var(--ease-out);
}
.link:hover {
  color: var(--primary);
}
```

**Background reveal:**

```css
.card {
  transition: background-color 200ms var(--ease-out);
}
.card:hover {
  background-color: var(--bg-subtle);
}
```

### Focus States

**Ring expansion:**

```css
.input:focus {
  outline: none;
  box-shadow:
    0 0 0 2px var(--bg-base),
    0 0 0 4px var(--primary);
}
```

**Always visible focus for keyboard navigation:**

```css
.button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Loading States

**Skeleton pulse:**

```css
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.skeleton {
  animation: pulse 2s ease-in-out infinite;
  background: var(--bg-subtle);
}
```

**Spinner:**

```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  animation: spin 1s linear infinite;
}
```

### Reveal Animations

**Fade up (page load):**

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.reveal {
  animation: fadeUp 500ms var(--ease-out) forwards;
}
```

**Staggered children:**

```css
.list > * {
  animation: fadeUp 400ms var(--ease-out) forwards;
  opacity: 0;
}
.list > *:nth-child(1) {
  animation-delay: 0ms;
}
.list > *:nth-child(2) {
  animation-delay: 50ms;
}
.list > *:nth-child(3) {
  animation-delay: 100ms;
}
/* etc. */
```

### Expand/Collapse

**Height animation (use grid trick):**

```css
.collapsible {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms var(--ease-out);
}
.collapsible.open {
  grid-template-rows: 1fr;
}
.collapsible > * {
  overflow: hidden;
}
```

### Modal/Dialog

**Backdrop fade + scale:**

```css
.backdrop {
  opacity: 0;
  transition: opacity 200ms var(--ease-out);
}
.backdrop.open {
  opacity: 1;
}

.modal {
  opacity: 0;
  transform: scale(0.95);
  transition:
    opacity 200ms var(--ease-out),
    transform 200ms var(--ease-out);
}
.modal.open {
  opacity: 1;
  transform: scale(1);
}
```

## React/Framer Motion Patterns

**Basic presence:**

```jsx
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    />
  )}
</AnimatePresence>
```

**Stagger children:**

```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
```

**Layout animations:**

```jsx
<motion.div layout layoutId="shared-element" />
```

## Anti-Patterns

**Too slow:** Anything over 300ms for hover states feels laggy.

**Too bouncy:** Spring animations on every element is exhausting.

**Inconsistent:** Different timing across similar interactions breaks coherence.

**Motion sickness triggers:** Large-scale movement, parallax abuse, infinite loops.

**Missing states:** No hover → no click → no feedback = dead interface.

**Blocking:** Animation that prevents interaction during playback.

## Accessibility: Reduced Motion

Always respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Or selective reduction:

```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
    opacity: 1;
  }
  .spinner {
    animation-duration: 0s;
  }
}
```
