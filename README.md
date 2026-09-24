# Play+ website

Double-click **Start Play+ Site.command** in Finder for the quickest local preview. It installs dependencies when needed, starts Astro, prints the local website URL in Terminal, and opens the site in your browser. Keep the Terminal window open while using the site; press Control-C there to stop it.

The active source-of-truth and decision log are in [`PROJECT-BRIEF.md`](PROJECT-BRIEF.md). The homepage currently follows Figma frame `149:539`; animation is intentionally deferred until the static responsive page is approved.

## Terminal setup

```sh
npm install
npm run dev
```

Before production deployment, confirm body-font licensing, retailer URLs and endorsement copy, add the downloadable resources, and connect the newsletter and workshop forms.

See `CONTENT.md` for the copy and content map.

For Mark and Olof's editorial handover, see the [implementation brief](handover/IMPLEMENTATION-BRIEF.md) and [agent skill setup](handover/SETUP.md). The skill package is prepared; account setup and the preview/publishing workflow remain to be implemented.

## Password protection on Vercel

The site uses HTTP Basic Auth on every request. In the Vercel project, open **Settings → Environment Variables** and add:

- `AUTH_PASSWORD`: a long, random password (required)
- `AUTH_USERNAME`: the login name (optional; defaults to `playplus`)

Apply the variables to every environment you want protected, then redeploy. The site deliberately returns `503` if `AUTH_PASSWORD` is missing so an incomplete deployment cannot become public by accident.

For local development, copy `.env.example` to `.env` and replace the example password. `.env` is ignored by Git.
