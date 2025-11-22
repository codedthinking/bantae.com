# Bantae Design System

## Overview
This design system defines the visual language for bantae.com, ensuring consistency with Coauthors and creating a cohesive brand experience.

---

## Color Palette

### Neutral Colors
```css
--color-bg-primary: #fafafa;      /* Main background */
--color-bg-secondary: #ffffff;    /* Card/surface background */
--color-border: #e5e5e5;          /* Borders and dividers */
--color-text-primary: #171717;    /* Main text */
--color-text-secondary: #525252;  /* Secondary text */
--color-text-tertiary: #a3a3a3;   /* Tertiary text (footer, labels) */
```

### Accent Colors
```css
--color-accent: #2563eb;          /* Primary CTA, links */
--color-accent-hover: #1d4ed8;    /* Hover state */
--color-accent-light: #dbeafe;    /* Light accent background */
```

### State Colors
```css
--color-success: #16a34a;         /* Success messages */
--color-success-bg: #dcfce7;      /* Success background */
--color-error: #dc2626;           /* Error messages */
--color-error-bg: #fee2e2;        /* Error background */
```

### Design Notes
- High contrast ratios for accessibility (WCAG AA)
- Muted, academic tone
- Professional and minimal

---

## Typography

### Font Family
```css
--font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", 
                Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, 
             Consolas, "Liberation Mono", monospace;
```

### Font Sizes
```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
```

### Font Weights
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights
```css
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

### Letter Spacing
```css
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
```

### Typography Scale
```css
h1: 3rem (48px), 700 weight, 1.25 line-height, -0.025em spacing
h2: 1.875rem (30px), 600 weight, 1.25 line-height, -0.025em spacing
h3: 1.25rem (20px), 600 weight, 1.5 line-height, normal spacing
body: 1rem (16px), 400 weight, 1.5 line-height, normal spacing
small: 0.875rem (14px), 400 weight, 1.5 line-height, normal spacing
```

---

## Spacing Scale

Based on 4px increments:

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
```

---

## Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-full: 9999px;  /* Circular */
```

---

## Layout

### Container
```css
--container-max-width: 42rem;  /* 672px */
--container-padding: 1.5rem;   /* 24px */
```

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Grid
- Mobile-first approach
- Single column on mobile
- Centered content with max-width constraint
- Consistent horizontal padding

---

## Components

### Buttons

**Primary Button**
```css
background: var(--color-accent);
color: white;
padding: 0.75rem 1.5rem;  /* 12px 24px */
border-radius: var(--radius-md);
font-weight: 500;
font-size: 1rem;
transition: background 0.2s ease;

hover: background: var(--color-accent-hover);
active: transform: translateY(1px);
disabled: opacity: 0.5, cursor: not-allowed;
```

**Loading State**
- Spinner animation
- "Submitting..." or similar text
- Disabled state

### Input Fields

```css
background: var(--color-bg-secondary);
border: 1px solid var(--color-border);
border-radius: var(--radius-md);
padding: 0.75rem 1rem;  /* 12px 16px */
font-size: 1rem;
color: var(--color-text-primary);
transition: border-color 0.2s ease;

focus: border-color: var(--color-accent);
       outline: 2px solid var(--color-accent-light);
       outline-offset: 2px;

error: border-color: var(--color-error);
```

### Checkbox

```css
width: 1.25rem;
height: 1.25rem;
border: 2px solid var(--color-border);
border-radius: var(--radius-sm);

checked: background: var(--color-accent);
         border-color: var(--color-accent);

focus: outline: 2px solid var(--color-accent-light);
       outline-offset: 2px;
```

### Messages

**Success Message**
```css
background: var(--color-success-bg);
color: var(--color-success);
border: 1px solid var(--color-success);
border-radius: var(--radius-md);
padding: 1rem;
font-size: 0.875rem;
```

**Error Message**
```css
background: var(--color-error-bg);
color: var(--color-error);
border: 1px solid var(--color-error);
border-radius: var(--radius-md);
padding: 1rem;
font-size: 0.875rem;
```

---

## Animation & Transitions

### Timing
```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
```

### Easing
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Transitions
```css
transition: background-color var(--transition-base) var(--ease-out);
transition: border-color var(--transition-base) var(--ease-out);
transition: transform var(--transition-fast) var(--ease-out);
transition: opacity var(--transition-base) var(--ease-out);
```

---

## Accessibility

### Focus Indicators
- Always visible
- 2px outline with offset
- Uses accent color or accent-light

### Color Contrast
- Text on background: minimum 4.5:1
- Large text (18px+): minimum 3:1
- Interactive elements: clear visual feedback

### Touch Targets
- Minimum 44x44px for mobile
- Adequate spacing between interactive elements

---

## Implementation Notes

### CSS Variables
All design tokens should be defined as CSS custom properties in `:root` for easy theming and consistency.

### Mobile-First
Start with mobile styles, add complexity for larger screens using `min-width` media queries.

### Performance
- Minimize layout shifts
- Use `will-change` sparingly
- Optimize animations for 60fps

---

## Future Considerations

### Dark Mode (Future)
Design system structured to support dark mode via CSS variables in the future.

### Extended Palette (Future)
Additional semantic colors as needed (warning, info, etc.).

### Component Library (Future)
Expand to include cards, modals, navigation as product grows.
