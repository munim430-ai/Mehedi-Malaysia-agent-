# Deployment Guide

## 1. Push to GitHub

If you're starting from this exported project on your local machine:

```bash
git init
git add .
git commit -m "Initial commit: MS Global Manpower website"
git branch -M main
git remote add origin https://github.com/munim430-ai/Mehedi-Malaysia-agent-.git
git push -u origin main
```

If the repository already has this code pushed to a branch (e.g. via Claude Code), simply open
a pull request from that branch into `main` on GitHub, review the diff, and merge.

## 2. Deploy on Vercel (Manual Import)

1. Go to [vercel.com/new](https://vercel.com/new) and log in.
2. Click **Import Git Repository** and select `munim430-ai/Mehedi-Malaysia-agent-`.
   - *(What you'd see: a list of your GitHub repos with an "Import" button next to this one.)*
3. On the configuration screen:
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `next build` (default, already set in `vercel.json`)
   - **Output Directory:** `out` (already set in `vercel.json`)
   - Leave **Root Directory** as `./`
   - *(What you'd see: a form with these fields pre-filled from `vercel.json`.)*
4. Click **Deploy**.
   - *(What you'd see: a build log streaming, ending with "Your project has been deployed".)*
5. Once complete, Vercel gives you a live URL like `mehedi-malaysia-agent.vercel.app`.

## 3. Custom Domain (Optional)

1. In the Vercel project dashboard, go to **Settings → Domains**.
2. Add your domain (e.g. `msglobalmanpower.com`) and follow the DNS instructions shown
   (usually an `A` record or `CNAME` pointing to Vercel).
3. Wait for DNS propagation (a green checkmark appears next to the domain once verified).

## 4. Environment Notes

- This site is fully static (`output: 'export'` in `next.config.js`) — no server-side
  environment variables or database are required.
- All forms (contact, resume upload, newsletter, resource downloads) are front-end only in this
  version. To make them functional, connect them to a form backend (e.g. Formspree, a serverless
  function, or a headless CMS) and wire up the `onSubmit` handlers in:
  - `sections/ContactSection.tsx`
  - `sections/NewsletterPopup.tsx` (in `components/`)
  - `sections/Resources.tsx`

## 5. Updating Content After Deployment

Edit the JSON files in `/data`, commit, and push — Vercel automatically rebuilds and redeploys
on every push to the connected branch.
