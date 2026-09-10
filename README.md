# Play+ website

Double-click **Start Play+ Site.command** in Finder for the quickest local preview. It installs dependencies when needed, starts Astro, and opens the site in your browser.

The active source-of-truth and decision log are in [`PROJECT-BRIEF.md`](PROJECT-BRIEF.md). The homepage currently follows Figma frame `149:539`; animation is intentionally deferred until the static responsive page is approved.

## Terminal setup

```sh
npm install
npm run dev
```

Before production deployment, confirm body-font licensing, retailer URLs and endorsement copy, add the downloadable resources, and connect the newsletter and workshop forms.

See `CONTENT.md` for the copy and content map.

## Password protection on Vercel

The site uses HTTP Basic Auth on every request. In the Vercel project, open **Settings → Environment Variables** and add:

- `AUTH_PASSWORD`: a long, random password (required)
- `AUTH_USERNAME`: the login name (optional; defaults to `playplus`)

Apply the variables to every environment you want protected, then redeploy. The site deliberately returns `503` if `AUTH_PASSWORD` is missing so an incomplete deployment cannot become public by accident.

For local development, copy `.env.example` to `.env` and replace the example password. `.env` is ignored by Git.
