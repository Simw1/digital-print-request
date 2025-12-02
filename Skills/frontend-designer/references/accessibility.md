# Accessibility Reference

Visual accessibility requirements for design critique. These are baselines, not stretch goals.

## Colour Contrast

### WCAG 2.1 Requirements

**AA (minimum standard)**
| Element | Ratio |
|---------|-------|
| Normal text (<18px or <14px bold) | 4.5:1 |
| Large text (≥18px or ≥14px bold) | 3:1 |
| UI components, graphics | 3:1 |

**AAA (enhanced)**
| Element | Ratio |
|---------|-------|
| Normal text | 7:1 |
| Large text | 4.5:1 |

### Testing Tools

- WebAIM Contrast Checker: webaim.org/resources/contrastchecker
- Colour Contrast Analyzer (desktop app)
- Figma/browser dev tools
- polypane.app (paid, excellent)

### Common Failures

- Light grey placeholder text: typically fails
- Coloured text on coloured backgrounds: often fails
- Focus indicators on coloured backgrounds: check carefully
- Disabled state styling: still needs 3:1 for UI components

### Fixing Low Contrast

1. Darken the text colour (preferred)
2. Lighten the background
3. Increase font weight
4. Increase font size
5. Add text shadow/outline (last resort)

## Focus Indicators

### Requirements

- Visible on all interactive elements
- 3:1 contrast against adjacent colours
- Minimum 2px width recommended
- Must not rely on colour alone

### Good Patterns

```css
/* Clear ring */
:focus-visible {
  outline: 2px solid var(--focus-colour);
  outline-offset: 2px;
}

/* Offset for dark backgrounds */
:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--primary);
}
```

### Bad Patterns

- `outline: none` without replacement
- Only colour change on focus
- Focus style that blends with selected state
- Missing focus for custom components

### Keyboard Navigation

- Tab order follows visual order
- Skip links for main content
- Focus trap in modals
- Return focus when closing modals

## Motion & Animation

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Motion Considerations

- No auto-playing animations that can't be paused
- No flashing content (>3 per second)
- Parallax can cause vestibular issues
- Infinite animations should be stoppable

## Typography for Accessibility

### Minimum Sizes

- Body text: 16px minimum
- Small text: 14px (use sparingly)
- Captions: 12px (very limited use)

### Line Length

- 45–75 characters per line optimal
- Never exceed 80 characters
- Narrow columns fine on mobile

### Line Height

- Body: 1.5 minimum
- Large text: 1.3 minimum
- Headings: 1.2 minimum

### Font Considerations

- Avoid ultra-thin weights (<300)
- Ensure character distinction (Il1, O0)
- Consider dyslexia-friendly options for body: Atkinson Hyperlegible, Open Dyslexic
- All-caps: use sparingly, never for long text

## Touch Targets

### Minimum Sizes

- Apple: 44×44pt
- Material: 48×48dp
- WCAG 2.5.5: 44×44 CSS pixels

### Spacing

- Minimum 8px between targets
- Prefer larger gaps on mobile

### Common Failures

- Icon buttons too small
- Link text underlines only (tiny target)
- Close buttons in corners

## Form Accessibility

### Labels

- Every input needs a label
- Label must be programmatically associated
- Placeholder is not a label
- Error messages linked to inputs

### Patterns

```html
<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-hint email-error" />
<span id="email-hint">We'll never share your email</span>
<span id="email-error" role="alert">Please enter a valid email</span>
```

### Error States

- Don't rely on colour alone
- Add icon or text indicator
- Describe how to fix
- Focus first error on submit

## Dark Mode

### Requirements

- Respect `prefers-color-scheme`
- Maintain contrast in both modes
- Test all states in both modes
- Provide manual toggle option

### Common Issues

- Forgot to test dark mode contrast
- Shadows disappear in dark mode
- Coloured elements look wrong
- Images without dark variants

## Checklist for Design Critique

**Contrast**

- [ ] Body text meets 4.5:1
- [ ] Large text meets 3:1
- [ ] UI components meet 3:1
- [ ] Checked both light and dark mode

**Focus**

- [ ] All interactive elements have visible focus
- [ ] Focus indicator has 3:1 contrast
- [ ] Tab order is logical
- [ ] Focus is trapped in modals

**Motion**

- [ ] Reduced motion media query respected
- [ ] No content relies on animation to convey meaning
- [ ] No flashing content

**Typography**

- [ ] Body text ≥16px
- [ ] Line length ≤75 characters
- [ ] Line height ≥1.5 for body

**Touch/Click**

- [ ] Interactive elements ≥44px
- [ ] Adequate spacing between targets

**Forms**

- [ ] All inputs have labels
- [ ] Error states don't rely on colour alone
- [ ] Required fields clearly marked
