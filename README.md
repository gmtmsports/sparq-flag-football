# SPARQ × USA Football — Landing Page

Marketing landing page for **SPARQ**, the athletic-performance testing standard by GMTM, framed around its **USA Football** partnership. Built for **parents and athletes**: what SPARQ is, and the value of getting a verified score.

**The story:** Get scored (real-time video leaderboard at every combine) → get seen (your videos & times on your phone) → get selected (discovered by USA Football, on the path to the 2028 Olympics).

## Stack
Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · Framer Motion · lucide-react.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Structure
`src/app/page.tsx` composes: `Nav → Hero → Features → AthletesSelected → CTA → Footer`.
Brand tokens + design system live in `src/app/globals.css`; shared primitives in `src/components/ui.tsx`.

See `CLAUDE.md` for brand colors, asset inventory, and known placeholders.
