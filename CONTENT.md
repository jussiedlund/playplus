# Content guide

The current homepage’s content and ordering are taken verbatim from Figma frame `149:539`. See `PROJECT-BRIEF.md` for the source hierarchy and decision log.

Repeatable homepage content lives in `src/data/home.ts`: retailers, the three Figma endorsement cards, authors and Your Move cards. Page-level copy and section order live in `src/pages/index.astro`. Design tokens and responsive rules live in `src/styles/global.css`.

Supplied web artwork lives in `public/assets/content/`; its source material is preserved in `additional-content-for-codex/`.

Backlog and pending integrations:

- migrate editable page copy from TypeScript/Astro into Markdown content files;
- exact retailer product URLs;
- replacement approved endorsement content for the playful Moomintroll and Arja Saijonmaa review placeholders;
- resource PDFs, newsletter provider integration and workshop enquiry routing;
- confirmation of the final Colossus destination URL.
