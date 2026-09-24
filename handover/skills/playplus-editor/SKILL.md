---
name: playplus-editor
description: Edit Play+ website copy, author profiles, endorsements, links, images and resources, and prepare checked previews for editorial review. Use for Mark and Olof's Play+ website updates in its connected repository.
---

# Play+ editor

Help the editor turn their instructions into a visible, reviewable website update. Use plain language and handle routine repository mechanics. Explain unfamiliar terms briefly when encountered; do not require a Git lesson before editing.

## Locate the project and read current context

Find the connected Play+ repository, which may be the current root or a `play-plus-site` subfolder. Confirm the project from `package.json`, `README.md` and `PROJECT-BRIEF.md`; the initial remote was `jussiedlund/playplus`, but ownership may change. If no working repository is available, ask for repository access/location and prepare useful copy in the meantime. Installing this skill does not connect GitHub or hosting.

Read applicable project instructions, `CONTENT.md` and the relevant sections of `PROJECT-BRIEF.md`. Inspect the actual source before editing; a planned content migration may not yet exist.

At initial packaging, homepage data is in `src/data/home.ts`, page copy in `src/pages/index.astro`, other routes in `src/pages/`, shared components in `src/components/`, visual rules in `src/styles/global.css` and supplied web assets in `public/assets/content/`. Treat these as starting locations, not an immutable schema.

## Editorial decisions

Explicit current user instructions take precedence over historical placeholder copy and Figma copy-preservation decisions. Figma remains the visual reference where the user has not requested design changes. Follow an exact supplied replacement without unsolicited rewriting. If asked to draft copy, distinguish suggestions from approved factual claims.

Preserve factual attributions and named framework terminology unless the editor changes them. Do not invent endorsements, retailer destinations, resource files, author credentials, workshop details or form recipients. If essential material is missing, ask for that material while completing independent edits.

For an ordinary copy update, preserve the visual system. Check whether new length or imagery causes clipping, awkward wrapping or inaccessible controls. Make necessary local adjustments within scope; broader design iteration is available when requested, not prohibited by this skill.

Read current authentication and deployment configuration before previewing. Initially, `src/middleware.ts` requires `AUTH_PASSWORD` and returns 503 without it. Keep unfinished work protected; do not disable authentication to make a preview load. Use test-only credentials for local checks and configured private credentials for hosted previews. Do not put secrets in source, commits or chat output.

## Draft, inspect and finish

Inspect repository status and preserve unrelated work. Start new work from the current target branch in a separate draft branch or isolated workspace when possible; continue an existing draft when refining it. Avoid overwriting another editor's changes. If overlapping changes create an editorial conflict, ask about that conflict rather than silently choosing whose words to keep.

Make the requested edits and run `npm run build` from the application directory, or its documented successor. For affected pages, inspect desktop and mobile rendering when browser access is available. Check relevant links, images and downloadable files. Report unavailable visual or network checks precisely instead of claiming they passed.

When a reviewable draft is requested and repository access permits it, prepare a pull request and obtain the actual deployment preview URL from the hosting integration or pull request checks. If deployment fails, investigate that failure; if account access is the blocker, provide the completed local work and the specific missing setup. Never invent a preview link or label an unverified deployment ready.

Prepare the concrete result before requesting publication approval. A request for a draft or preview does not authorize merging or production deployment. If the user already authorized publication of the relevant change, carry it through without redundant confirmation, subject to repository controls and the environment's permissions. Removing site protection for public launch is a separate action from publishing content to a protected site.

Before an authorized merge, account for new target-branch changes, check the final revision and ensure required checks pass. After deployment, verify the affected live page. For a requested undo, identify the specific update and use a normal revert change preserving subsequent work; explain any content conflict before resolving it.

Finish with the changed content, preview or deployed link if verified, checks performed and the next action if anything is blocked. For a first-time editor, include one useful explanation of the step they just completed. Keep routine updates concise.
