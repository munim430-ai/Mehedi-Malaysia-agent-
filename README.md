# MS Global Manpower

A premium, corporate-grade website for **MS Global Manpower**, a Malaysia-based recruitment
agency founded by **Mehedi Sarker**, connecting verified Bangladeshi workers with Malaysian
employers across Construction, Manufacturing, Plantation and F&B/Hospitality sectors.

## Tech Stack

- **Framework:** Next.js 14 (App Router), configured for static export
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (headings), Plus Jakarta Sans (body)

## Project Structure

```
app/            Next.js App Router pages (home, about, jobs, employers, contact, resources, legal)
components/     Reusable UI primitives (button, card, accordion...) and shared components (Header, Footer, FAB...)
sections/       Page-level sections (Hero, Services, Sectors, JobsBoard, Testimonials, Process, Resources, FAQ, Contact...)
data/           JSON mock data (jobs, testimonials, sectors, resources, FAQ, team)
lib/            Utilities (cn helper, site config/constants)
public/images/  Static images, including the founder's photo
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build (Static Export)

```bash
npm run build
```

This produces a static site in the `out/` directory (`next.config.js` sets `output: 'export'`).

## Editing Content

All copy that changes often lives in `/data/*.json` — edit these files to add/remove job
listings, testimonials, resources, FAQs or team members without touching component code.

Site-wide contact details (WhatsApp number, Facebook page, email, license placeholder) live in
`lib/site.ts`.

> **Note:** The footer and About page currently show a placeholder license line
> (`BMET RL License: [RL-XXXXX] · BAIRA Membership: [XXXX]`) in `lib/site.ts`. Replace these with
> your actual registration numbers before going live.

## Deploying

See [`DEPLOY.md`](./DEPLOY.md) for step-by-step instructions to push to GitHub and deploy on
Vercel.

Repository: https://github.com/munim430-ai/Mehedi-Malaysia-agent-
