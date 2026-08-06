# Kiok — landing page

Vite + React 19 + TypeScript + Tailwind v4.

Deployed on Vercel. Pushing to `main` triggers a redeploy; pull requests get
preview URLs automatically.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the build locally
```

## Open items

1. **The form has no backend yet.** Set `formEndpoint` in `src/lib/site.ts` to a
   Formspree / Tally / Loops URL. While it is `null`, the form falls back to
   opening the visitor's mail client so no lead is silently dropped.
2. **`hello@kiok.com` is not a real inbox.** Point `email` in `src/lib/site.ts`
   at an address someone actually checks before sharing the link.

## Where things live

```
src/
  lib/site.ts        name, contact, form endpoint — copy-level config
  lib/types.ts       DiffRow, RunComparison, PartnerLead
  data/runDiff.ts    the Western blot comparison shown on the page
  components/        Nav, Hero, RunDiff, Bench, Why, DesignPartners, Footer
  index.css          Tailwind theme tokens (colors, fonts)
```

The run diff is the page's signature element. To show a different protocol, edit
`src/data/runDiff.ts` — `RunDiff` renders whatever `RunComparison` it is handed,
and counts the changed rows itself.

The company name appears only in `src/lib/site.ts`, so renaming is a one-line
change.