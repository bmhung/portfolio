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

The deploy uses a **static-assets Worker** configured by [`wrangler.jsonc`](wrangler.jsonc) — `npm run build` produces `./out`, then `wrangler deploy` uploads it as static content. No SSR adapter / OpenNext involved.

### Option A — Cloudflare Workers Builds (simplest)

One-time setup:

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Workers** → **Import a repository** → select the repo.
3. The build settings auto-detect from `wrangler.jsonc`. If the dashboard shows anything different, override to:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - (Leave "Build output directory" empty — `wrangler.jsonc` handles it via `assets.directory`.)
4. Environment variables (Production):
   - `NEXT_PUBLIC_SITE_URL` = `https://buimhung.com`
5. Save and deploy.

Pushes to `main` auto-deploy.

> **If Cloudflare auto-detects the project as a full Next.js app** (build log mentions OpenNext / `pages-manifest.json`), the presence of `wrangler.jsonc` overrides this — re-trigger the build. Otherwise, in the project's **Settings → Build**, set the Framework preset to **None**.

### Option B — GitHub Actions

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) is an alternative if you'd rather not use Cloudflare's git integration. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets, then push to `main`. Pick **either** Option A **or** B, not both (otherwise you'll get two deploys per push).

### Attach the custom domain

After the first deploy succeeds:

1. Cloudflare Dashboard → **Workers & Pages** → **buimhung-portfolio** → **Custom domains** → **Set up a custom domain** → enter `buimhung.com`.
2. Cloudflare auto-creates the `CNAME` record on the `buimhung.com` zone (since you bought the domain at Cloudflare Registrar). It uses Cloudflare's edge — no extra DNS work.
3. Repeat for `www.buimhung.com` if desired (it'll redirect to apex by default).
4. HTTPS provisions automatically within ~minutes.

### Local one-off deploy (no CI)

```bash
NEXT_PUBLIC_SITE_URL=https://buimhung.com npm run build
npx wrangler deploy
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
