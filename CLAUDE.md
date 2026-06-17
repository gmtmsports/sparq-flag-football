# CLAUDE.md

Marketing landing page for **SPARQ** (the athletic-performance testing standard, owned by GMTM) framed around its **USA Football** partnership. Audience: **parents and athletes** — explaining what SPARQ is and the value of getting a verified score.

## Stack
- Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · Framer Motion · lucide-react
- Single static page. `npm run dev` / `npm run build`.

## Structure (intentionally simple — 4 sections)
- `src/app/page.tsx` — composes: `Nav` → `Hero` → `Features` → `AthletesSelected` → `CTA` → `Footer`.
- `src/app/globals.css` — design tokens. Brand = black (`--color-ink`) + volt/lime green (`--color-volt #c7f94a`). Display font Archivo (black weights), body Inter. `.skew-tab` = the angular SPARQ motif.
- `src/components/ui.tsx` — shared `Container`, `Eyebrow`, `Reveal` (scroll animation), `VoltButton`, `cn`.
- `Hero.tsx` — headline + the YouTube video embedded (`VideoEmbed`, id `6rB1x2u1nAk`, the Houston Talent ID Event).
- `VideoEmbed.tsx` — lite YouTube facade (thumbnail + play, loads iframe on click).
- `Features.tsx` — the 3 core messages as alternating visual rows: (1) real-time video leaderboard & scoring, (2) videos + times on your phone, (3) get seen by USA Football. Each has a hand-built visual mockup.
- `AthletesSelected.tsx` — athletes selected by USA Football via SPARQ.

## Brand (official assets — source of truth)
- Volt green `#D5F23D` (`--color-volt`); deep "blurple" navy-purple `#1B0F29` (`--color-blurple`), used as the dark base palette (`--color-ink #0a0617`).
- `public/sparq-wordmark-green.png` — official green wordmark (used in Nav + Footer).
- `public/sparq-wordmark.svg` — vector wordmark (black paths).
- `public/sparq-icon-green.png` / `sparq-icon-blurple.png` — the SPARQ triangle "SR" monogram icon (green-on-dark / dark-on-green). Used in hero badge + footer; green version is also `src/app/icon.png` (favicon).
## Real product/photo assets (`public/`)
Used in the feature rows and hero (real screenshots beat mockups):
- `tv-leaderboard.png` — live in-venue video leaderboard (Features row 1).
- `phone-results.png` — SPARQ app score + percentiles on phone/tablet (Features row 2).
- `geraci-card.png` — Isabella Geraci's official U.S. Women's Flag National Team card (Features row 3 + proof point).
- `combine-fieldhouse.png` — "All Sports Combine" field-house shot (faint hero backdrop).
- Spare/available: `web-leaderboard.png`, `event-screen.png`, `app-score.png`, `athlete-profile.png`.

## Deployment
- Repo: https://github.com/gmtmsports/sparq-flag-football (public, `main`).
- Vercel project `sparq-flag-football` (scope `joeygrant55s-projects`), connected to the repo → pushes to `main` auto-deploy.
- Live: https://sparq-flag-football.vercel.app
- Manual deploy: `npx vercel --prod --yes --scope joeygrant55s-projects`.
- Deploy order (per Joey's workflow): commit + push to GitHub first, then Vercel.

## Content source of truth
Built from `~/Downloads/GMTM_SPARQ Product Deck.pdf`:
- SPARQ = Speed, Power, Agility, Reaction, Quickness → one composite score. Nike-born (300K+ tested), trademark acquired by GMTM 2024 (clean chain of title).
- 4 tests: 40-yard dash, 5-10-5 shuttle, vertical jump, power ball toss.
- USA Football runs SPARQ combines + Talent ID camps → discovery → National Team / flag football → **2028 LA Olympics**.
- Trusted by: Team USA/USOPC, NCAA, NFL, U.S. Air Force, ESPN, USA Football.

## Known placeholders (swap before launch)
- **Athletes selected** (`AthletesSelected.tsx`) still uses initials avatars — real headshots pending (Geraci's card is already used in Features row 3).
- **CTA links** point to `https://gmtm.com` — repoint to the real combine-signup / profile flow.
- Sibling site for more assets/reference: https://allsportscombine.com
