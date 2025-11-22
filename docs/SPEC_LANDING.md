# Specification: Bantae Landing Page (bantae.com)

## Purpose
Provide a minimal, authoritative landing page for **Bantae**, capturing early-access signups via Loops, and establishing Bantae as the ecosystem brand behind Coauthors.

---

## Core Requirements

### A. Page Structure

#### 1. Top section (hero)
- **Product name:** Bantae
- **One-line value statement.** Example:
  - *"A conversation environment for research, creation, and serious thinking."*
- **One-sentence expansion.** Example:
  - *"Built for humans and agents working together in structured, high-signal discussions."*

#### 2. Email signup block
- Input field for name (required)
- Input field for email (required)
- GDPR-compliant checkbox (required): "I want to be notified when Bantae or similar apps developed by Coded Thinking OÜ become available"
- Submit button ("Join early access")
- Submit triggers Loops API call
- Confirmation message on success

#### 3. Secondary section
- A short paragraph describing the direction
  - High-level, not committing to features
  - Focus on clarity, collaboration, agents, serious work
- Optional bullets (3 max) describing themes rather than features
- No screenshots, no mockups

#### 4. Footer
- Link to minimal privacy policy (placeholder OK)
- Link to Coauthors: "Coauthors is a tool by Bantae."
- External links open in new tab

---

## B. Email Capture (Loops integration)

### Implementation
1. Use Loops embeddable form or direct API call:
   - POST to `/api/v1/contacts` with name and email
2. Track source:
   - Include custom field `source: "bantae_landing"`
3. GDPR Compliance:
   - Require explicit opt-in checkbox
   - Store consent timestamp
   - Link to privacy policy
4. On success:
   - Display inline confirmation text
5. On error:
   - Display generic error message + support email

### API Details
- **Endpoint:** `https://app.loops.so/api/v1/contacts`
- **Method:** POST
- **Headers:**
  - `Authorization: Bearer {API_KEY}`
  - `Content-Type: application/json`
- **Payload:**
```json
{
  "firstName": "User Name",
  "email": "user@example.com",
  "source": "bantae_landing",
  "userGroup": "Coded Thinking OÜ - Bantae Landing"
}
```

### Response Handling
- **200/201:** Success - show confirmation
- **400:** Validation error - show error message
- **409:** Already exists - treat as success
- **5xx:** Server error - show error message

---

## C. Technical Requirements

- **Tech stack:** Static HTML/CSS/JavaScript (GitHub Pages compatible)
- **Page must load fast:** < 1 second, minimal JS
- **GDPR-compliant cookie behavior:** No cookies needed
- **Analytics:** None initially, or optional Plausible snippet

### Performance Goals
- Lighthouse score > 90
- First Contentful Paint < 1s
- Time to Interactive < 2s
- Minimal JavaScript bundle

---

## D. Brand / Design Requirements

### Typography, button shape, spacing rhythm must match Coauthors
This ensures the later migration feels natural.

### Style direction
- **Clean, high-contrast, minimal**
- **Quiet premium aesthetics**
- **Use same accent color used in Coauthors UI**

### Logo
- Text-only logo is fine for now

### Design Philosophy
- Mobile-first design
- High readability
- Professional, academic tone
- Muted color palette

---

## E. Future Expandability

### Leave space for (but do not add in v1):
- Product video (later)
- Agent-based demos
- Docs link

These should be considered in the layout structure but not implemented initially.

---

## F. Content Guidelines

### Tone
- Warm, intelligent, lightly rebellious
- Cosmopolitan and grounded
- Focus on how creative people actually work

### Voice
- "Clever friend at conference coffee break"
- Someone who reads widely and listens closely
- Person who likes ideas more than being right

### Avoid
- Whiny academic complaints
- Corporate productivity jargon
- Hierarchical metaphors (boss → minions)
- Heavy sci-fi lore
- Guru or bureaucrat language

### Preferred Words
- **Often useful:** spark, flow, banter, threads, insight, moment, momentum
- **Use carefully:** structure, clarity, dopamine, neurodiverse, sci-fi references
- **Avoid:** chaos, optimize, productivity, leverage (verb), assistant, minion

---

## G. Accessibility Requirements

### Must meet WCAG AA standards
- Color contrast ratios ≥ 4.5:1 for normal text
- Color contrast ratios ≥ 3:1 for large text
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels and ARIA attributes
- Keyboard navigation support
- Focus indicators clearly visible

---

## H. Deliverables

1. One minimal landing page at `bantae.com`
2. Email capture integrated with Loops
3. Footer linking back to Coauthors
4. Shared design language with Coauthors
5. Ready for deployment on GitHub Pages

---

## I. Success Metrics

### Technical
- Page loads in < 1 second
- Zero JavaScript errors
- Mobile-responsive across all breakpoints
- Forms submit successfully

### Content
- Tone aligns with copywriting guide
- Clear value proposition
- No typos or grammatical errors

### Integration
- Emails successfully captured in Loops
- Source tracking works correctly
- Error states handled gracefully

---

## J. Implementation Notes

### Form Requirements (Confirmed)
1. ✅ Name field: Required
2. ✅ Email field: Required
3. ✅ GDPR checkbox: Required - "I want to be notified when Bantae or similar apps developed by Coded Thinking OÜ become available"
4. ✅ API keys stored as secrets (not in repository)

### Open Questions
1. What should the support email be for error messages?
2. Do we need cookie consent for GitHub Pages with no tracking?
3. What's the Coauthors URL we should link to?
4. Privacy policy content (placeholder acceptable for v1)
