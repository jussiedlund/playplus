# Play+ homepage — living implementation brief

**Last updated:** 10 September 2026  
**Status:** First fidelity pass implemented; animation intentionally deferred.

## Current objective

Build the Play+ homepage as a close, responsive translation of the approved desktop composition before adding motion or expanding secondary pages.

## Source priority

1. The Figma frame [`149:539`, “Final Design for HTML”](https://www.figma.com/design/Ov6mzsJKq845EupJ4nRG9L/Play--Ingredient-Board?node-id=149-539) is the authority for homepage structure, visible copy, visual hierarchy, colour and desktop proportions.
2. `additional-content-for-codex/` is the source for supplied book, portrait, endorsement, framework and Colossus artwork.
3. The historical microsite brief remains useful for accessibility and engineering requirements only where it does not conflict with the current Figma frame or a later recorded decision.

## Recorded decisions

| ID | Date | Decision |
|---|---|---|
| D001 | 2026-09-10 | Rebuild the homepage from Figma node `149:539`; do not rewrite or editorialise its visible content. |
| D002 | 2026-09-10 | Prioritise static visual and responsive fidelity. Animation is a separate next phase. |
| D003 | 2026-09-10 | Use the supplied book cover, Olof and Mark portraits, endorsement portraits, composite model graphics and Colossus mark. |
| D004 | 2026-09-10 | Preserve the current Figma endorsement carousel verbatim, including its duplicated Ed Catmull card and “Mumintrollet” placeholder attribution, until the design/content source changes. |
| D005 | 2026-09-10 | Maintain this folder as a Git repository on `main`; commit coherent implementation milestones. |
| D006 | 2026-09-10 | Treat the 1728 px Figma frame as the desktop reference. Reflow below desktop while keeping the same content order and visual language. |

## Homepage structure

Header → book hero → proposition → endorsements → Play+ model → authors → Game On newsletter → Your Move → Colossus → footer.

## Implementation notes

- Astro renders a static site; homepage content data lives in `src/data/home.ts`.
- Layout and responsive behaviour live in `src/styles/global.css`.
- Supplied source artwork remains untouched in `additional-content-for-codex/`; web-ready derivatives live in `public/assets/content/`.
- Mr Banks is locally supplied and used for display typography. Body copy currently falls back through locally installed Avenir/Avenir Next and Arial; confirm a distributable webfont before production.
- Retail links remain category-level placeholders until product URLs are supplied.
- Newsletter submission, enquiry routing and resource PDFs are not yet connected.

## Verification record

- `npm run build`: passing with zero Astro errors or warnings on 10 September 2026.
- Desktop composition inspected at 1728 px against the Figma reference.
- Responsive layout is implemented at 1199 px and 767 px breakpoints; final device QA remains part of this fidelity pass.

## Change discipline

Update this file whenever a source-of-truth, content, structure, breakpoint, integration or launch decision changes. If the Figma frame changes, record the node and date here before altering implementation.
