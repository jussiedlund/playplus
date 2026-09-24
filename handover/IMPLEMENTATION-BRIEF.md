# Play+ editorial handover brief

Prepared 11 September 2026 for Jussi and the agent implementing the handover.

## Outcome and scope

Mark Curtis and Olof Schybergson can use their own Codex or Claude Code to change Play+, inspect a password-protected preview, refine it and approve deployment. Jussi coaches the first updates and remains available for design and engineering work, without becoming the routing point for routine copy changes.

This document is an implementation brief, not a record that the workflow has been configured. The skill package and setup instructions beside this file are prepared; application changes, account configuration and live onboarding remain to do. Creating this brief does not authorize account transfers, invitations, production deployment or removal of password protection.

## Verified starting point

- Local repository: `play-plus-site`; configured remote: `git@github.com:jussiedlund/playplus.git`.
- Astro with the Vercel adapter and `output: 'server'`. Some older project text calls it static; the actual configuration uses server rendering and authentication middleware.
- `npm run build` runs Astro checks followed by a build. `package-lock.json` exists.
- Homepage content is split between `src/data/home.ts` and `src/pages/index.astro`. Other routes and shared components also need a copy inventory. `CONTENT.md` already proposes extraction into content files.
- `PROJECT-BRIEF.md` currently treats Figma as authoritative for visible copy and preserves particular placeholders. This needs an explicit editorial handover decision.
- `src/middleware.ts` protects requests with Basic Auth and returns 503 when `AUTH_PASSWORD` is missing. Maintain this behaviour during handover.
- A local double-click launcher already exists. Browser-based onboarding can avoid needing it initially.
- Repository access, default branch settings, CI, Vercel Git integration, hosting ownership, domain access and each author's agent subscription have not been verified remotely.
- At preparation time, `src/styles/global.css` had existing uncommitted changes. Inspect current status before implementation and preserve unrelated work.

## What Jussi needs to do now

No manual coding is needed from Jussi. His immediate work is decisions, access and a first practice session.

1. Agree the experiment with Mark and Olof: each owns one real content update and reviews its visual result. Select a concrete placeholder for each person.
2. Establish which coding agent each already uses and whether their account can connect to the repository. Use their existing preference; no need to standardise vendors.
3. Arrange GitHub access and authorize the relevant agent app for this repository. Each person signs into their own accounts; do not share Jussi's credentials.
4. Confirm who owns hosting, billing and the domain, and who can administer them. Decide the eventual shared repository owner; transferring out of Jussi's personal account is useful but need not block a pilot with collaborator access.
5. Agree who can publish ordinary updates after onboarding. Jussi can review the first few, but should not be a permanent required reviewer. For the pilot, merging updates the protected hosted site; opening it to the public is a separate launch decision.
6. Supply preview access through the existing private channel or password manager and schedule one guided session. Mark and Olof operate the agent themselves.

The agent can prepare code and configuration changes while account access is being arranged. Account owners must handle sign-in, billing choices and any access grants requiring their identity.

## Implementation work for the agent

### First: establish a working draft and preview loop

Inspect the current repository and remote configuration before assuming anything is already connected. Work in a clean branch or isolated checkout and preserve existing changes.

| Work | Concrete deliverable | Completion evidence |
|---|---|---|
| Activate project guidance | Install the prepared skill in each supported repository skill directory; add concise `AGENTS.md` and `CLAUDE.md` pointers to the maintained editorial instructions | Fresh Codex and Claude Code sessions can find and apply the guidance |
| Record editorial authority | Update `PROJECT-BRIEF.md` and `CONTENT.md`: explicit current author instructions can replace historical Figma copy; retain the design reference for unchanged visual structure | An author can replace an endorsement without the agent restoring the old placeholder |
| Reproducible environment | Verify supported Node version against installed dependencies, pin it, and configure cloud setup using `npm ci`; supply test-only auth configuration through environment settings | Fresh environment builds and serves an authenticated page |
| CI build check | Add a GitHub Actions build check using the pinned runtime and lockfile; use a current supported action version verified at implementation time | A real pull request reports the expected successful check |
| Preview deployment | Verify/configure Vercel Git integration, preview environment variables and collaborator access | A draft branch gets a working authenticated preview URL visible to both authors |
| Publication boundary | Configure an appropriate branch rule requiring the actual build check and a pull request; verify plan support and permissions before choosing the rule | Direct routine publication is prevented by repository settings, not just agent instructions |
| Recovery | Document the actual merge strategy and a matching revert procedure; rehearse on a disposable draft | A change can be undone without rewriting history or discarding later work |

For content-only edits the skill should proceed through editing and checks. A draft request does not imply production publication. If the user already explicitly authorized publishing the concrete change, honour that authorization without asking twice. Repository and hosting settings enforce the boundary; a skill alone cannot enforce permissions.

### Next: make content easier to maintain

Code changes are recommended, but content extraction is not a prerequisite for the first small, agent-assisted edit. Do it before broader independent editing.

- Inventory visible copy across all pages, data files, shared navigation/footer and resource routes; include page titles, descriptions, links, image alt text and download labels.
- Move repeatable structured content into validated data and longer editorial passages into Markdown/content collections where appropriate. Choose the simplest native Astro structure after inspecting the actual content; do not force every heading or URL into Markdown.
- Keep presentation in components/styles. Preserve layout, responsive behaviour, motion and existing copy during the extraction itself. Avoid a simultaneous redesign.
- Add validation for required fields and useful constraints such as retailer URL shape, referenced local assets and resource existence. Allow intentional drafts; distinguish a draft build from a launch-readiness check.
- Update the content map and skill when paths change. A repository installation should remain the maintained version; regenerate distributable copies from it.
- Run the build and inspect representative long copy on desktop and mobile. Include the endorsement carousel, hero, navigation and resource pages in the relevant visual checks. Only add automated tests where they protect meaningful behaviour.

### Separate launch work

Track approved endorsements, final retailer and Colossus links, resource PDFs, newsletter integration, enquiry routing, final font licensing and launch QA separately. Verify the current status before treating an older README item as outstanding. Do not invent missing claims or wire forms to a guessed recipient/provider.

Public launch requires an explicit decision about authentication. Preserve protected previews even if production is later opened. Content handover must not accidentally make unfinished pages public.

## Onboarding and acceptance

Start in the browser with a configured repository environment and the author's own login. Local Codex or Claude Code can follow later; use a separate local checkout per person rather than a shared Drive working tree.

Demonstrate a draft, a preview, an approval and an undo. Explain Git terms only as they appear: branch = draft; pull request = proposed update; merge = apply update to the deployment branch; revert = undo through another recorded change.

The handover is complete when:

- Each author independently creates one real edit, opens the authenticated preview and asks for a refinement.
- The final proposed change passes checks and neither author's work overwrites the other's. Refresh from the target branch and recheck the final preview before merging when drafts overlap.
- An agreed publisher applies an approved change and verifies the deployed page.
- They know how to request recovery, and Jussi has rehearsed it against the chosen workflow.
- Account ownership, preview access, publishing rights and the support route are documented without storing secrets in Git.

## Suggested next task

> Implement the first-stage editorial handover in `handover/IMPLEMENTATION-BRIEF.md`. Inspect current state first and preserve unrelated changes. Activate the packaged skill and shared project guidance, reconcile editorial authority, prepare reproducible setup and CI, and verify the draft preview path. Report account-side actions separately when access is missing. Keep the site protected. Content extraction is a follow-on change; do not redesign the site or publish it publicly as part of onboarding.

## Product references checked 11 September 2026

- [Codex cloud repository environments and pull requests](https://learn.chatgpt.com/docs/cloud)
- [Codex repository skills](https://learn.chatgpt.com/docs/build-skills)
- [Claude Code skills and cloud-session discovery](https://code.claude.com/docs/en/skills)
- [Vercel preview environments](https://vercel.com/docs/deployments/environments)
