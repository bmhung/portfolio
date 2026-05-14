# Portfolio — Bùi Minh Hưng

Personal portfolio for **Bùi Minh Hưng**, Senior Frontend Engineer. Single-page Next.js site with anchored sections, light/dark mode, and static export so it can be deployed to any host.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **motion** (Framer Motion successor) for scroll reveals and micro-interactions
- **next-themes** for persisted dark / light mode
- **lucide-react** for icons
- **Geist Sans + Geist Mono** via `next/font/google`

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build → ./out (static export)
npm run lint
```

## Updating content

All resume content lives in **`lib/data.ts`** as typed structures:

- `profile` — name, role, location, tagline, summary
- `contact` — email, phone, LinkedIn, resume URL
- `experiences` — work history (newest first)
- `skills` — categorized skill groups
- `education` — courses & certifications
- `strengths` — three short callouts shown in the About section
- `navItems` — top-nav anchors

To swap in a new resume PDF, drop it into `public/` and update `contact.resumeUrl`.

## Site URL

`NEXT_PUBLIC_SITE_URL` controls absolute URLs in `<meta>` tags and the Open Graph image. It defaults to `https://buimhung.com`. Override locally via `.env.local` (see `.env.example`).

## Deploy — Cloudflare Pages → buimhung.com

The site is a static export (`next.config.ts` → `output: "export"`), so `npm run build` produces a fully static `out/` directory.

There are two deploy paths. **Pick one.**

### Option A — Dashboard git integration (simplest)

One-time setup:

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → select the repo.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: `22`
4. Environment variables (Production):
   - `NEXT_PUBLIC_SITE_URL` = `https://buimhung.com`
5. Save and deploy.

Pushes to `main` auto-deploy. PRs get preview deployments.

### Option B — GitHub Actions (already wired up)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) deploys on every push to `main` using Wrangler.

One-time setup:

1. Create a Cloudflare API token: Dashboard → **My Profile** → **API Tokens** → **Create Token** → use the **"Edit Cloudflare Workers"** template (it covers Pages too).
2. Find your **Account ID**: Dashboard → **Workers & Pages** sidebar.
3. Create the Pages project: Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets** (you can leave it empty; the workflow will push the real build). Name it **`buimhung-portfolio`** to match the workflow.
4. In your GitHub repo → **Settings** → **Secrets and variables** → **Actions**, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
5. Push to `main`.

### Attach the custom domain

After the first deploy succeeds:

1. Cloudflare Dashboard → **Workers & Pages** → **buimhung-portfolio** → **Custom domains** → **Set up a custom domain** → enter `buimhung.com`.
2. Cloudflare auto-creates the `CNAME` record on the `buimhung.com` zone (since you bought the domain at Cloudflare Registrar). It uses Cloudflare's edge — no extra DNS work.
3. Repeat for `www.buimhung.com` if desired (it'll redirect to apex by default).
4. HTTPS provisions automatically within ~minutes.

### Local one-off deploy (no CI)

```bash
NEXT_PUBLIC_SITE_URL=https://buimhung.com npm run build
npx wrangler pages deploy out --project-name=buimhung-portfolio
```

(First run will prompt you to `wrangler login`.)

## Project structure

```
app/
├── layout.tsx            Root layout — fonts, theme provider, metadata
├── page.tsx              Single-page section composition
├── globals.css           Tailwind v4 + design tokens
├── icon.tsx              Generated favicon
└── opengraph-image.tsx   Generated OG / social card

components/
├── nav.tsx               Sticky top nav with section anchors
├── footer.tsx
├── theme-provider.tsx    next-themes wrapper
├── theme-toggle.tsx
├── sections/
│   ├── hero.tsx
│   ├── about.tsx
│   ├── experience.tsx
│   ├── skills.tsx
│   ├── education.tsx
│   └── contact.tsx
└── ui/
    ├── section.tsx       Section wrapper with consistent spacing
    ├── tag.tsx
    └── reveal.tsx        Scroll-triggered fade/slide-in

lib/
├── data.ts               Resume content as typed data
└── utils.ts              cn() helper

public/
└── Resume_BuiMinhHung.pdf
```

## Accessibility

- Skip-to-content link (`Tab` from page start)
- Semantic landmarks (`header`, `nav`, `main`, `footer`, `section`)
- Visible focus rings (orange, 2px)
- `prefers-reduced-motion` respected — animations disabled
- WCAG AA contrast in both themes

## License

Personal project — content © Bùi Minh Hưng. Code structure free to fork / adapt.
