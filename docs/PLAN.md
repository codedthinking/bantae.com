# Bantae Landing Page - Implementation Plan

**Project:** bantae.com landing page for lead collection
**Target:** Static site hosted on GitHub Pages
**Email Integration:** Loops
**Status:** Planning Phase
**Date:** 2025-11-22

## Reference
- Example site: https://the9x.ac/
- Hosting: GitHub Pages
- Email capture: Loops API

## Project Structure

```
bantae.com/
├── docs/
│   ├── SPEC_LANDING.md     # Landing page specification
│   ├── SPEC_BRANDING.md    # Branding elements specification
│   ├── COPYWRITING.md      # Copywriting guide
│   └── PLAN.md             # This implementation plan
├── assets/
│   ├── css/
│   │   └── main.css        # Single stylesheet
│   ├── js/
│   │   └── loops.js        # Email capture logic
│   └── svg/                # Logo and graphics
├── index.html              # Main landing page
├── privacy.html            # Privacy policy (placeholder)
├── README.md               # Project documentation
└── .gitignore
```

## Design System Requirements

### Typography
- Font family: [TBD - match Coauthors]
- Hierarchy:
  - H1: Product name (Bantae)
  - H2: Section headings
  - Body: Main copy
  - Small: Footer, disclaimers
- Weights: Regular, Medium, Bold
- Letter-spacing: [TBD based on font choice]

### Color Palette
- **Neutral base:**
  - Background
  - Surface
  - Border colors
- **Accent color:** [TBD - match Coauthors primary]
- **Text:**
  - Primary (high contrast)
  - Secondary (medium contrast)
  - Tertiary (low contrast for footer)
- **Tone:** Muted, academic, high-contrast for readability

### Spacing Scale
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px

### Components
- **Buttons:**
  - Border radius: [TBD]
  - Padding: [TBD]
  - Hover/active states
  - Loading spinner
- **Input fields:**
  - Border radius: [TBD - match buttons]
  - Padding: [TBD]
  - Focus states
- **Layout:**
  - Max-width: [TBD - likely 640-800px]
  - Breakpoints: 320px, 768px, 1024px, 1440px

## Content Structure

### Hero Section
**Product name:** Bantae

**One-line value statement:**
[TBD - options based on copywriting guide:]
- "A conversation environment for research, creation, and serious thinking."
- "Where creative work happens in conversation."
- "Your thinking space, with intelligent companions."

**Expansion sentence:**
[TBD - focus on: conversation + agents + creative work + serious thinking]

### Email Capture Block
- **Fields:**
  - Email (required)
  - Name (optional - decision needed)
- **Button text:** "Join early access" or "Get early access"
- **Success message:** [TBD - warm, brief confirmation]
- **Error message:** Generic error + support email

### Secondary Section
**Paragraph 1:** Direction and philosophy
- High-level vision
- Focus: clarity, collaboration, agents, serious work
- Avoid: specific feature commitments

**Paragraph 2 (optional):** Expanded context

**Bullets (max 3):** Themes, not features
- [TBD based on copywriting tone]

### Footer
- Privacy policy link (placeholder OK)
- "Coauthors is a tool by Bantae." → links to Coauthors
- Copyright notice
- External links open in new tab

## Copy Tone Requirements

**Should sound like:**
- Clever friend at conference coffee break
- Warm intellectual with sly smile
- Someone who reads widely, listens closely

**Mood:**
- Playful, cosmopolitan, witty
- Slightly speculative (soft sci-fi undertones)
- Curious and clever

**Avoid:**
- Whiny academic complaints
- Corporate productivity jargon
- Hierarchical metaphors
- Heavy sci-fi lore
- Guru or bureaucrat language

**Word preferences:**
- AVOID: chaos, optimize, productivity, leverage (verb), assistant, minion
- USE CAREFULLY: structure, clarity, dopamine, neurodiverse, sci-fi refs
- OFTEN USEFUL: spark, flow, banter, threads, insight, moment, momentum

## Technical Implementation

### Technology Stack
- Pure HTML5
- CSS3 (no preprocessor needed for v1)
- Vanilla JavaScript (minimal)
- No build process
- No frameworks

### Loops Integration
**API Details:**
- Endpoint: `https://app.loops.so/api/v1/contacts`
- Method: POST
- Headers: `Authorization: Bearer {API_KEY}`
- Content-Type: `application/json`

**Payload:**
```json
{
  "email": "user@example.com",
  "source": "bantae_landing"
}
```

**Optional fields:**
- `firstName` (if name field added)
- Custom fields as needed

**Error Handling:**
- 200/201: Success
- 400: Validation error
- 409: Already exists (treat as success)
- 5xx: Server error

### Form Validation
- Client-side email format check (regex)
- Prevent double submission
- Clear error states
- Inline success confirmation
- No page reload

### Performance Requirements
- Page load: < 1 second
- Minimal JavaScript
- Optimized assets
- No unnecessary dependencies

### GitHub Pages Setup
1. Repository created
2. Branch: `main` or `gh-pages`
3. Settings → Pages → Source configured
4. Custom domain: `bantae.com`
5. CNAME file in root
6. DNS A records point to GitHub Pages IPs
7. HTTPS enabled

## Quality Checklist

### Performance
- [ ] Page loads in < 1 second
- [ ] Minimal JavaScript bundle
- [ ] Optimized images/SVGs
- [ ] No unnecessary dependencies
- [ ] Lighthouse score > 90

### Accessibility
- [ ] Semantic HTML5
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Form labels and ARIA attributes
- [ ] Keyboard navigation works
- [ ] Color contrast ratios meet WCAG AA
- [ ] Focus indicators visible

### Cross-browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Chrome Mobile

### Responsive Design
- [ ] 320px (small mobile)
- [ ] 375px (iPhone)
- [ ] 768px (tablet)
- [ ] 1024px (desktop)
- [ ] 1440px+ (large desktop)

### Content Quality
- [ ] Copy follows brand guide
- [ ] Tone is consistent
- [ ] No typos or grammar errors
- [ ] Links work correctly
- [ ] External links open in new tab

### Integration Testing
- [ ] Loops API key configured
- [ ] Email submission successful
- [ ] Success state displays
- [ ] Error handling works
- [ ] Source tracking verified in Loops
- [ ] Double submission prevented

## Deployment Process

### Pre-launch
1. Test form submission on local/staging
2. Verify contact appears in Loops dashboard
3. Test all navigation links
4. Mobile device testing (real devices)
5. Run Lighthouse audit
6. Run PageSpeed Insights
7. Spell check entire page

### Launch
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Add CNAME file for custom domain
4. Configure DNS records for bantae.com
5. Wait for DNS propagation
6. Verify HTTPS certificate issued
7. Final smoke test on live URL

### Post-launch
1. Monitor Loops for first signups
2. Check analytics (if configured)
3. Monitor for errors
4. Gather initial user feedback

## Open Questions

1. **Loops Account:**
   - Do you have Loops account set up?
   - What is the API key?
   - Any custom fields configured?

2. **Coauthors Branding:**
   - What font family does Coauthors use?
   - What is the primary accent color (hex)?
   - What is the spacing scale?
   - What is the button border radius?

3. **Logo:**
   - Do you have a Bantae logo (SVG)?
   - Text-only logo acceptable for v1?

4. **Domain:**
   - Is bantae.com registered?
   - Do you have DNS access?

5. **GitHub:**
   - Which org/account hosts the repo?
   - Repo name: `bantae.com`?

6. **Form Fields:**
   - Email only, or also name field?
   - Any other optional fields?

7. **Analytics:**
   - Should we add Plausible snippet?
   - Any tracking beyond Loops?

## Timeline Estimate

| Phase | Duration | Description |
|-------|----------|-------------|
| Specs & Planning | 1h | Save docs, finalize plan |
| Design System | 2h | Define colors, typography, components |
| Copy Writing | 2h | Draft all page copy |
| HTML Structure | 2h | Build semantic HTML |
| CSS Styling | 2h | Implement design system |
| Loops Integration | 2h | Form handling, API calls |
| Testing | 2h | Cross-browser, responsive, QA |
| Deployment | 1h | GitHub Pages setup, DNS |
| **Total** | **14h** | **End-to-end delivery** |

## Next Steps

1. Save all specification documents to `docs/`
2. Answer open questions above
3. Create design system specification
4. Draft landing page copy
5. Begin implementation phase

---

**Note:** This plan assumes a minimal v1 launch. Future iterations may include:
- Product video
- Agent-based demos
- Documentation links
- Analytics dashboard
- A/B testing variants
