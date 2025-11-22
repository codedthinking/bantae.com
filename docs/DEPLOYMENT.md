# Deployment Guide - Bantae Landing Page

## Overview

This guide explains how to deploy the Bantae landing page to GitHub Pages with a custom domain.

---

## Prerequisites

- GitHub account
- Repository with push access
- Domain name (bantae.com) with DNS management access
- Loops account with API key

---

## Step 1: Configure Loops API Key

### 1.1 Get Your Loops API Key

1. Log in to your Loops account at https://app.loops.so
2. Navigate to Settings → API Keys
3. Copy your API key

### 1.2 Create Configuration File

1. Copy the example config:
   ```bash
   cp config.json.example config.json
   ```

2. Edit `config.json` and add your API key:
   ```json
   {
     "LOOPS_API_KEY": "your-actual-api-key-here"
   }
   ```

3. **IMPORTANT:** Never commit `config.json` to git. It's already in `.gitignore`.

---

## Step 2: Test Locally

### 2.1 Start a Local Server

You need a local web server to test (file:// protocol won't work with fetch API).

**Option A: Using Python**
```bash
python3 -m http.server 8000
```

**Option B: Using Node.js**
```bash
npx serve
```

**Option C: Using PHP**
```bash
php -S localhost:8000
```

### 2.2 Test the Form

1. Open http://localhost:8000 in your browser
2. Fill out the signup form
3. Submit and verify:
   - Form validation works
   - Success message appears
   - Contact appears in your Loops dashboard

---

## Step 3: Push to GitHub

### 3.1 Create GitHub Repository

1. Go to GitHub and create a new repository
2. Recommended name: `bantae.com` or `bantae-landing`
3. Keep it public (required for GitHub Pages on free plan)

### 3.2 Push Your Code

```bash
# If not already initialized
git init

# Add all files (config.json is ignored automatically)
git add .

# Commit
git commit -m "Initial commit: Bantae landing page"

# Add remote
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# Push
git push -u origin main
```

---

## Step 4: Enable GitHub Pages

### 4.1 Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Navigate to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 4.2 Wait for Deployment

- GitHub will build and deploy your site
- This usually takes 1-2 minutes
- You'll see a green checkmark when it's live
- Initial URL will be: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## Step 5: Configure Custom Domain

### 5.1 DNS Configuration

Add these DNS records for `bantae.com`:

**A Records (for apex domain):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**CNAME Record (for www subdomain - optional):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 5.2 Enable Custom Domain on GitHub

1. In GitHub Settings → Pages
2. Under **Custom domain**, enter: `bantae.com`
3. Click **Save**
4. GitHub will verify DNS (may take a few minutes)

### 5.3 Enable HTTPS

1. Once DNS is verified, check **Enforce HTTPS**
2. GitHub will automatically provision an SSL certificate
3. This may take up to 24 hours

---

## Step 6: Deploy API Key (Production)

### Option A: GitHub Actions Secret (Recommended)

**Not applicable for static GitHub Pages** - The API key is loaded client-side from config.json.

For production, you have two options:

#### Option 1: Include config.json in deployment
1. Create `config.json` with your production API key
2. Deploy it alongside your site
3. Ensure it's served over HTTPS only

#### Option 2: Use environment variable injection
Set up a build process that injects the API key at build time:

1. Create a GitHub Action that:
   - Reads API key from GitHub Secrets
   - Creates config.json during build
   - Deploys to GitHub Pages

Example `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Create config.json
        run: |
          echo '{"LOOPS_API_KEY":"${{ secrets.LOOPS_API_KEY }}"}' > config.json
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

Then add your Loops API key as a GitHub Secret:
1. Go to Settings → Secrets and variables → Actions
2. Click **New repository secret**
3. Name: `LOOPS_API_KEY`
4. Value: Your actual API key
5. Click **Add secret**

**Note:** Option 2 is more secure as the API key won't be exposed in the repository.

---

## Step 7: Verify Deployment

### 7.1 Check DNS Propagation

```bash
dig bantae.com
```

Should show the GitHub Pages IP addresses.

### 7.2 Test Live Site

1. Visit https://bantae.com
2. Verify:
   - Page loads correctly
   - Styles are applied
   - Form submission works
   - Contact appears in Loops dashboard
   - HTTPS is enforced

### 7.3 Test Mobile

- Test on real mobile devices
- Check responsive breakpoints
- Verify form usability on small screens

---

## Step 8: Monitor & Maintain

### 8.1 Monitor Signups

- Check Loops dashboard regularly
- Export contacts as needed

### 8.2 Update Content

To update copy or design:
```bash
# Make changes
git add .
git commit -m "Update landing page copy"
git push
```

GitHub Pages will automatically redeploy.

### 8.3 Rotate API Keys

If you need to rotate your Loops API key:

1. Generate new key in Loops
2. Update config.json (or GitHub Secret)
3. Push changes (or re-run GitHub Action)
4. Test form submission
5. Delete old key from Loops

---

## Troubleshooting

### Form Not Submitting

**Check browser console for errors:**
```
API key not configured
```
→ Make sure config.json exists and contains your API key

**CORS errors:**
→ Loops API should allow requests from bantae.com

**Network errors:**
→ Check Loops API status

### DNS Issues

**Custom domain not working:**
- Verify A records point to correct GitHub IPs
- Wait for DNS propagation (up to 48 hours)
- Check GitHub Pages status

**HTTPS not available:**
- Wait 24 hours after DNS verification
- Check that DNS records are correct
- Try toggling "Enforce HTTPS" off and on

### Styling Issues

**CSS not loading:**
- Check that paths are relative (not absolute)
- Verify `assets/css/main.css` exists in repository
- Clear browser cache

---

## Security Checklist

- [ ] `config.json` is in `.gitignore`
- [ ] API key is never committed to git
- [ ] HTTPS is enforced on custom domain
- [ ] Form includes GDPR-compliant consent checkbox
- [ ] Privacy policy is linked and accessible
- [ ] No sensitive data in JavaScript console logs

---

## Performance Checklist

- [ ] Page loads in < 1 second
- [ ] Lighthouse score > 90
- [ ] Images optimized (if added later)
- [ ] No render-blocking resources
- [ ] Mobile-responsive at all breakpoints

---

## Support

For deployment issues:
- GitHub Pages: https://docs.github.com/pages
- Loops API: https://loops.so/docs
- DNS: Contact your domain registrar

For project-specific questions, refer to the documentation in `/docs`.

---

**Last Updated:** 2025-01-22
