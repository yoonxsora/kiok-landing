# Kiok — landing page

A static marketing page: one `index.html`, one `styles.css`, no framework and no
build step. Fonts come from Google Fonts; the only JavaScript is a small inline
script that submits the early-access form.

```
index.html            the page (inline form script at the bottom)
styles.css            all styles; brand colors are CSS variables at the top
logo.svg              "kiok" wordmark with blue slash (text outlined, no font needed)
favicon.svg           blue slash favicon (favicon.png / apple-touch-icon.png are fallbacks)
og.png                1200×630 share image
vercel.json           tells Vercel to serve the folder as-is, with no build
package.json          `npm run dev` local server (Vite, dev only)
```

## Before launch

1. **Connect the form.** Create a form at [formspree.io](https://formspree.io),
   then in `index.html` replace `YOUR_FORM_ID` in
   `action="https://formspree.io/f/YOUR_FORM_ID"` with your form's ID. Until you
   do, submitting shows a "not connected yet" message instead of silently
   dropping the request.
2. **Set the domain.** Replace the three `YOUR_DOMAIN` placeholders in the
   `<head>` of `index.html` (canonical URL, `og:url`, `og:image`). Share previews
   on Slack, LinkedIn and X need an absolute URL for the image.

## Preview locally

```bash
npm install
npm run dev      # opens http://localhost:5173 and reloads when you save
```

Vite is used only as a local dev server. There is no build step: the files in
this folder are exactly what gets deployed. (Without npm, any static server
works too, e.g. `python3 -m http.server 8000`.)

## Deploy to Vercel

**From the dashboard:** import the Git repo at
[vercel.com/new](https://vercel.com/new). `vercel.json` sets the framework to
"Other" with no build command, so leave the defaults. Every push to `main`
redeploys; pull requests get preview URLs.

If this repo is already linked to a Vercel project that was set up for the old
Vite build, `vercel.json` overrides those settings. If a deploy still tries to
run `npm run build`, open Project Settings → Build and Deployment, set Framework
Preset to "Other", and clear the build and output overrides.

**From the CLI:**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

## Deploy to Netlify

Drag this folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or
connect the repo with an empty build command and publish directory `.`.

## Editing

- Brand colors and status colors are variables in `:root` at the top of
  `styles.css`.
- The hero "Agent activity" table is plain HTML in `index.html`; add or edit
  `<tr>` rows directly. On narrow screens it scrolls sideways inside its card.
- To regenerate `og.png`, open a 1200×630 page with `logo.svg` centered on
  `#FFFFFF` and take a screenshot (for example with headless Chrome's
  `--screenshot --window-size=1200,630`).
