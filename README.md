# Kiok — landing page

Vite + React 19 + TypeScript + Tailwind v4.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the build locally
```

## Before launch

1. **Wire up the form.** Set `formEndpoint` in `src/lib/site.ts` to a Formspree /
   Tally / Loops URL. While it is `null`, the form falls back to opening the
   visitor's mail client so no lead is silently dropped.
2. **Point `email` at a real inbox** (also in `src/lib/site.ts`).
3. **Change the name** if Kiok doesn't stick — it lives in `src/lib/site.ts` only.

## Structure

```
src/
  lib/site.ts        name, contact, form endpoint — edit copy-level config here
  lib/types.ts       DiffRow, RunComparison, PartnerLead
  data/runDiff.ts    the Western blot comparison shown on the page
  components/        Nav, Hero, RunDiff, Bench, Why, DesignPartners, Footer
  index.css          Tailwind theme tokens (colors, fonts)
```

The run diff is the page's signature element. To show a different protocol,
edit `src/data/runDiff.ts` — the component renders whatever `RunComparison` it
is handed.

## Deploy

Vercel or Netlify auto-detect Vite. Framework preset: Vite. Build command
`npm run build`, output directory `dist`.
