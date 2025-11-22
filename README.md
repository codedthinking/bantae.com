# Bantae Landing Page

Static landing page for **bantae.com** — capturing early-access signups for Bantae, a conversation environment for research, creation, and serious thinking.

## Project Overview

- **Purpose:** Minimal, authoritative landing page for lead generation
- **Hosting:** GitHub Pages
- **Email Collection:** Loops integration
- **Tech Stack:** Static HTML/CSS/JavaScript (no build process)
- **Design:** Mobile-first, minimal, high-contrast

## Documentation

All project specifications and planning documents are in the `docs/` folder:

- **[PLAN.md](docs/PLAN.md)** — Complete implementation plan and timeline
- **[SPEC_LANDING.md](docs/SPEC_LANDING.md)** — Landing page specification
- **[SPEC_BRANDING.md](docs/SPEC_BRANDING.md)** — Branding elements and cross-product consistency
- **[COPYWRITING.md](docs/COPYWRITING.md)** — Copywriting guide and tone requirements

## Project Structure

```
bantae.com/
├── docs/               # Specifications and planning
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript for Loops integration
│   └── svg/           # Logo and graphics
├── index.html         # Main landing page
├── privacy.html       # Privacy policy (placeholder)
└── README.md          # This file
```

## Development Status

**Current Phase:** Planning & Documentation

### Completed
- ✅ Project initialization
- ✅ Specifications saved
- ✅ Implementation plan created

### Pending
- ⏳ Design system definition
- ⏳ Landing page copy
- ⏳ HTML/CSS implementation
- ⏳ Loops integration
- ⏳ Testing & deployment

## Key Requirements

### Design
- Match Coauthors' design language (typography, colors, spacing)
- Minimal, clean, high-contrast aesthetic
- Mobile-first responsive design
- Fast loading (< 1 second)

### Content
- Warm, intelligent, cosmopolitan tone
- Academic/professional personality
- Focus on conversation and creative work
- Avoid corporate productivity jargon

### Technical
- Pure HTML/CSS/JavaScript (no frameworks)
- Loops API integration for email capture
- GitHub Pages compatible
- WCAG AA accessibility standards

## Loops Integration

Email signup form sends to Loops API:
- **Endpoint:** `https://app.loops.so/api/v1/contacts`
- **Source tag:** `bantae_landing`
- **Validation:** Client-side + API response handling
- **States:** Success confirmation, error messaging

## Deployment

### GitHub Pages Setup
1. Repository hosted on GitHub
2. GitHub Pages enabled
3. Custom domain: `bantae.com`
4. CNAME file configured
5. DNS A records pointing to GitHub Pages
6. HTTPS enabled

### Pre-launch Checklist
- [ ] Loops API key configured
- [ ] Form submission tested
- [ ] Mobile responsive verified
- [ ] Cross-browser testing complete
- [ ] Lighthouse audit score > 90
- [ ] All links verified
- [ ] Copy proofread

## Open Questions

**Loops:**
- API key setup?
- Any custom fields configured?

**Branding (from Coauthors):**
- Font family?
- Primary accent color (hex)?
- Button border radius?
- Icon set in use?

**Content:**
- Email only, or also name field?
- Support email for error messages?
- URL for Coauthors link?

**Deployment:**
- GitHub organization/account?
- Domain DNS access?
- Analytics tracking (Plausible)?

## Timeline

Estimated 14 hours total:
- Specs & Planning: 1h ✅
- Design System: 2h
- Copy Writing: 2h
- HTML/CSS: 4h
- Loops Integration: 2h
- Testing: 2h
- Deployment: 1h

## Contact

For questions or updates, refer to the specification documents in `docs/`.

---

**Status:** In Planning
**Last Updated:** 2025-11-22
