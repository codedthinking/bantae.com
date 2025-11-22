# Specification: Branding Elements for Coauthors UI

## Purpose
Ensure that Coauthors' user interface quietly aligns with Bantae's brand identity so that Coauthors users recognize the aesthetic when transitioning into Bantae later.

---

## Core Requirements

### A. Visual Identity Unification

Reuse these elements across both Bantae and Coauthors:

#### 1. Typography
- Same primary font family
- Same weights for headings, body, labels
- Same letterspacing rules

#### 2. Color system
- Shared neutral palette (background, surfaces, borders)
- Single shared accent color (primary action)
- Variation allowed only for presence indicators (e.g., participant colors)

#### 3. Spacing / Layout
- Consistent spacing scale (e.g. 4–8–12–16 px increments)
- Identical padding around cards, modals, bottom bars
- Shared grid rules (max-width breakpoints, margins)

#### 4. Buttons
- Same radius
- Same hover/active states
- Same loading spinner

#### 5. Icons
- Use the same icon set (Lucide/Phosphor/etc.)
- Consistent stroke width

---

## B. Identity Link to Bantae

Very subtle. Do not disrupt the academic professionalism.

### Elements:

#### 1. Footer
- Text: *"A tool by Bantae."*
- Links to `bantae.com` in a new tab
- Place low in hierarchy (small font, low-contrast gray)

#### 2. Sign-in page
- Tiny text at bottom: *"Built by the Bantae team."*
- No logo, no marketing

#### 3. About modal
- Add a "Learn more about Bantae" link

---

## C. Coauthors-Specific Identity

While aligned with Bantae, Coauthors keeps its own personality:

#### 1. Color tone
- Keep neutral, calm colors (scientific/academic tone)
- Avoid playful or consumer-style gradients

#### 2. Room presence
- Colors for participants should be muted and harmonious
- Do not conflict with Bantae's accent color

#### 3. Typography hierarchy
- Clear text for transcripts
- Strong visual emphasis on timestamps and speaker names

#### 4. Minimalism
- UI should feel "instrumental" rather than expressive
- Empty states should be calm and unbranded

---

## D. Short Links Integration (`coauthor.rs`)

1. All invite links default to `coauthor.rs/{code}`
2. UI displays short links prominently in share modals
3. Provide one-click copy button
4. Optional: dynamic slugs for named rooms

---

## E. Deliverables

### 1. Updated UI component library
- Buttons
- Typography
- Colors
- Input fields
- Cards/surfaces
- Modals

### 2. Footer + sign-in micro-branding elements
- Referencing Bantae
- Low-hierarchy placement
- Subtle, professional

### 3. Share modal updated
- Use `coauthor.rs` short links
- One-click copy functionality

### 4. Style guide page documenting:
- Colors (hex values, usage)
- Typography (families, weights, sizes)
- Spacing (scale, usage)
- Icon usage (set, stroke width)
- Bantae cross-brand rules

---

## F. Design Token Structure

### Color Tokens
```
--color-bg-primary: [TBD]
--color-bg-secondary: [TBD]
--color-surface: [TBD]
--color-border: [TBD]
--color-text-primary: [TBD]
--color-text-secondary: [TBD]
--color-text-tertiary: [TBD]
--color-accent: [TBD - shared with Bantae]
```

### Typography Tokens
```
--font-family-primary: [TBD]
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-bold: 700
--font-size-xs: [TBD]
--font-size-sm: [TBD]
--font-size-base: [TBD]
--font-size-lg: [TBD]
--font-size-xl: [TBD]
--font-size-2xl: [TBD]
--line-height-tight: 1.2
--line-height-normal: 1.5
--line-height-relaxed: 1.75
```

### Spacing Tokens
```
--spacing-1: 4px
--spacing-2: 8px
--spacing-3: 12px
--spacing-4: 16px
--spacing-6: 24px
--spacing-8: 32px
--spacing-12: 48px
--spacing-16: 64px
--spacing-24: 96px
```

### Border Radius Tokens
```
--radius-sm: [TBD]
--radius-md: [TBD]
--radius-lg: [TBD]
--radius-full: 9999px
```

---

## G. Brand Alignment Checklist

### Visual Consistency
- [ ] Same font family across Bantae and Coauthors
- [ ] Same accent color
- [ ] Same spacing scale
- [ ] Same button styles
- [ ] Same border radius
- [ ] Same icon set and stroke width

### Brand Connection
- [ ] Footer mentions Bantae
- [ ] Sign-in page credits Bantae team
- [ ] About modal links to Bantae
- [ ] All external links open in new tab

### Personality Balance
- [ ] Coauthors maintains academic/professional tone
- [ ] Bantae references are subtle, not intrusive
- [ ] Participant colors don't conflict with accent
- [ ] Empty states are calm and minimal

### Technical Implementation
- [ ] Shared CSS variables/tokens
- [ ] Consistent component library
- [ ] Short link integration (`coauthor.rs`)
- [ ] Style guide documented

---

## H. Migration Strategy

### Phase 1: Establish Bantae Landing
- Launch bantae.com
- Begin collecting emails
- Establish brand presence

### Phase 2: Subtle Coauthors Updates
- Add Bantae footer reference
- Update sign-in page
- Integrate short links
- Ensure visual consistency

### Phase 3: Future Integration
- Coauthors becomes "powered by Bantae"
- Shared authentication (if applicable)
- Cross-product navigation
- Unified documentation

---

## I. Open Questions

1. What is Coauthors' current font family?
2. What is Coauthors' current accent color (hex)?
3. What is the current button border radius?
4. What icon set is currently in use?
5. Where exactly should the Bantae footer appear in Coauthors?
6. What's the URL for Coauthors that Bantae should link to?
7. Should short links (`coauthor.rs`) be implemented immediately or deferred?
