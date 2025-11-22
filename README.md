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
- **[COPY.md](docs/COPY.md)** — Final landing page copy
- **[DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** — Complete design system specification
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** — Deployment guide for GitHub Pages

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

**Current Phase:** Ready for Deployment ✅

### Completed
- ✅ Project initialization
- ✅ All specifications and planning documents
- ✅ Design system defined
- ✅ Landing page copy finalized
- ✅ HTML structure implemented
- ✅ CSS styling complete
- ✅ Loops integration built
- ✅ Privacy policy page created
- ✅ GDPR-compliant consent checkbox
- ✅ Form validation and error handling
- ✅ Deployment documentation

### Ready for Deployment
- ⏳ Configure Loops API key (create config.json from config.json.example)
- ⏳ Test locally before deploying
- ⏳ Push to GitHub repository
- ⏳ Enable GitHub Pages
- ⏳ Configure DNS for bantae.com
- ⏳ Final testing on live URL

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

## Form Implementation

### Fields
- **Name:** Required text input
- **Email:** Required email input with validation
- **Consent:** Required GDPR-compliant checkbox
  - "I want to be notified when Bantae or similar apps developed by Coded Thinking OÜ become available"

### Loops Payload
```json
{
  "firstName": "User Name",
  "email": "user@example.com",
  "source": "bantae_landing",
  "userGroup": "Coded Thinking OÜ - Bantae Landing"
}
```

### Validation
- Client-side email format validation
- All fields required before submission
- Clear error messages for each field
- Success/error states with appropriate messaging

## Configuration Needed

Before deployment:
1. **Loops API Key:** Add your key to `config.json` (copy from `config.json.example`)
2. **Coauthors URL:** Update link in index.html footer (currently: https://coauthors.app)
3. **Support Email:** Confirm error message email (currently: hello@bantae.com)
4. **Privacy Contact:** Confirm privacy policy email (currently: privacy@codedthinking.com)

## Quick Start

### 1. Configure API Key
```bash
cp config.json.example config.json
# Edit config.json and add your Loops API key
```

### 2. Test Locally
```bash
# Using Python
python3 -m http.server 8000

# Using Node
npx serve

# Then visit http://localhost:8000
```

### 3. Deploy
See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for complete deployment instructions.

## Contact

For questions or updates, refer to the specification documents in `docs/`.

---

**Status:** Ready for Deployment ✅
**Last Updated:** 2025-11-22

## Next Steps

1. Get Loops API key from https://app.loops.so
2. Create `config.json` with your API key
3. Test locally to verify form submission
4. Push to GitHub and enable Pages
5. Configure DNS for bantae.com
6. Deploy and test on production URL
