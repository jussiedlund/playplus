# Play+ homepage — living implementation brief

**Last updated:** 10 September 2026  
**Status:** First fidelity pass implemented; endorsement carousel motion added. Book motion remains deferred.

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
| D002 | 2026-09-10 | Prioritise static visual and responsive fidelity. Book animation remains a separate next phase; the endorsement carousel is the first approved motion exception. |
| D003 | 2026-09-10 | Use the supplied book cover, Olof and Mark portraits, endorsement portraits, composite model graphics and Colossus mark. |
| D004 | 2026-09-10 | Preserve the current Figma endorsement carousel verbatim, including its duplicated Ed Catmull card and “Mumintrollet” placeholder attribution, until the design/content source changes. |
| D005 | 2026-09-10 | Maintain this folder as a Git repository on `main`; commit coherent implementation milestones. |
| D006 | 2026-09-10 | Treat the 1728 px Figma frame as the desktop reference. Reflow below desktop while keeping the same content order and visual language. |
| D007 | 2026-09-10 | Replace Avenir with self-hosted Montserrat from the Google Fonts catalogue; use Bebas Neue for navigation, buttons and label-style headings. |
| D008 | 2026-09-10 | Render the book shadow in CSS using x `56`, y `174`, blur `256`; animate the book only after the remaining page is settled. |
| D009 | 2026-09-10 | Extend the pink hero so the full retailer list remains visible. |
| D010 | 2026-09-10 | Turn endorsements into an accessible autoplay carousel with manual arrows/dots, pause-on-interaction and reduced-motion support. Use playful Moomintroll and Arja Saijonmaa placeholder endorsements for private review. |
| D011 | 2026-09-10 | Newsletter input is explicitly white; Your Move card content is centred. |
| D012 | 2026-09-10 | Let the book cross above the header background and add a restrained floating/rotating loop; keep navigation controls above it and disable the effect for reduced-motion users. |
| D013 | 2026-09-10 | At `767px` and below, retain “Get the book” and collapse Framework/Speaking/Notes into an accessible burger menu. |
| D014 | 2026-09-10 | Set retailer links in Montserrat. Split the manifesto callout into a 72px medium lead and a black, uppercase 144px conclusion. |
| D015 | 2026-09-10 | Keep every endorsement card the same fixed height, size copy to fit the longest placeholder, and use only the bottom indicators for manual carousel navigation. |
| D016 | 2026-09-10 | Apply the supplied `Hex Grid.png` over pink and light sections, `hex-pattern-1.png` over dark sections, and a subtle fixed CSS noise overlay across the complete site. |

## Homepage structure

Header → book hero → proposition → endorsements → Play+ model → authors → Game On newsletter → Your Move → Colossus → footer.

## Implementation notes

- Astro renders a static site; homepage content data lives in `src/data/home.ts`.
- Layout and responsive behaviour live in `src/styles/global.css`.
- Supplied source artwork remains untouched in `additional-content-for-codex/`; web-ready derivatives live in `public/assets/content/`.
- Mr Banks is locally supplied and used for primary display typography. Montserrat and Bebas Neue are bundled from `@fontsource`, avoiding runtime font requests.
- Retail links remain category-level placeholders until product URLs are supplied.
- Newsletter submission, enquiry routing and resource PDFs are not yet connected.
- The current `additional-content-for-codex/Book Cover-ish.png` still contains a baked-in shadow/background. Re-add the intended shadowless replacement, then regenerate `public/assets/content/book-cover.webp`; the requested CSS shadow is already configured.

## Backlog

- Move editable page copy into Markdown content files so non-code updates are straightforward. The current data is split between `src/data/home.ts` and `src/pages/index.astro`; this has not yet been implemented.
- Replace playful endorsement placeholders with approved content before publishing.

## Verification record

- `npm run build`: passing with zero Astro errors or warnings on 10 September 2026.
- Desktop composition inspected at 1728 px against the Figma reference.
- Responsive layout is implemented at 1199 px and 767 px breakpoints; final device QA remains part of this fidelity pass.

## Change discipline

Update this file whenever a source-of-truth, content, structure, breakpoint, integration or launch decision changes. If the Figma frame changes, record the node and date here before altering implementation.
