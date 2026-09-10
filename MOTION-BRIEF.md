# Play+ — motion and interaction brief

**Draft:** 10 September 2026  
**Purpose:** Implementation handoff after visual approval. This document proposes behavior; it does not authorise implementation by itself.

## Direction

Motion should feel editorial, physical and slightly playful—not like a SaaS landing page. The central metaphor is a set of ideas being handled, arranged and brought into play. Use motion to clarify hierarchy, reward exploration and give the book/framework physical presence.

Keep the page calm at rest. No scroll-jacking, custom cursor, animated noise, looping text, or decorative movement that competes with reading.

## Recommended first pass

| Area | Proposed behavior | Trigger and timing | Mobile adaptation |
|---|---|---|---|
| Floating navigation | After the visitor leaves the hero header, introduce a compact fixed bar with the Play+ mark, current-section label and “Get the book”. Hide gently while scrolling down; return while scrolling up. | Enter after `120px` of scroll. Translate/fade over `220ms`. Do not show while the mobile menu is open. | Compact logo + “Get the book” + burger. Always keep tap targets at least `44px`. |
| Hero book | Preserve the existing slow float. Add very shallow pointer tilt on desktop and scroll parallax so the book moves slightly slower than the page. Let the shadow soften as it rises. | Pointer tilt maximum `±2deg`; parallax maximum `40px`; ease back over `500ms`. | No pointer tilt. Reduce parallax to `16px`; keep the existing slow float. |
| Hero copy | Reveal the headline as three grouped blocks: proposition, “CANNOT DO”, then supporting copy and retailer links. | On first load only; `500–700ms` per group with `80ms` stagger. Use opacity plus `16px` vertical movement. | Same sequence, slightly faster. Never animate individual letters. |
| Manifesto | Fade/raise the two body columns together. Reveal the large conclusion in two beats, with “WORK THAT MATTERS MOST” arriving last and settling with a slight scale-down. | IntersectionObserver at roughly `25%` visibility. `600ms`; conclusion delay `140ms`. | Same behavior with smaller movement distance. |
| Endorsements | Retain autoplay and dots, and add touch/pointer dragging with a decisive snap to the nearest card. Pause autoplay while dragging, hovering, focused, or when the tab is hidden. | Drag threshold around `15%` of card width; snap `450ms`. Resume autoplay after `8s` idle. | Swipe is the primary interaction; keep adjacent-card peeks. |
| Play+ model | Bring the three illustrations in sequentially from subtle rotations, then settle into alignment. On hover/focus, lift the active symbol and softly dim the other two. | Reveal at `30%` visibility, `500ms` with `90ms` stagger. Hover/focus `180ms`. | Tap/focus uses the same active state; no persistent hover assumptions. |
| Author portraits | Use a restrained image reveal: soft clip from bottom plus a small upward movement. Names follow the image; biographies simply fade. | Each profile reveals independently at `20%` visibility over `600ms`. | Same behavior. |
| Newsletter | On focus, expand a dark underline beneath the white field. Give the submit button a firm `2px` press state. On successful integration, transition the form into an inline thank-you rather than navigating away. | Focus/press `160ms`; success state `350ms`. | Same behavior; no confetti. |
| Your Move cards | Lift cards by `8px`, deepen the shadow and nudge the title colour on hover/focus. Download arrows move down `4px`; workshop cards can reveal their enquiry action consistently. | `220ms` ease-out. Entire linked card should be keyboard accessible if made clickable. | Use a short press state instead of hover; avoid persistent transforms. |
| Colossus | Let the Colossus mark assemble with three short vertical offsets, then reveal the CTA. Keep this more restrained than the Play+ sections. | One-time reveal at `30%` visibility; `500ms` total. | Same behavior. |

## Optional second pass

- A thin page-progress line integrated into the floating navigation.
- Section-aware navigation colour: white over pink/dark sections, ink over light sections.
- A subtle magnetic pull of `2–3px` on desktop buttons only; skip if it feels fussy.
- A small Finnish easter egg: after manually viewing the Moomintroll endorsement, the active carousel dot briefly grows ears. Keep it private-review-only unless approved.
- Framework detail expansion: selecting one of the three model parts opens a compact explanatory panel without leaving the page. This requires approved content before implementation.

## Motion tokens

Use a small shared system rather than one-off values:

```css
--motion-fast: 160ms;
--motion-base: 220ms;
--motion-reveal: 600ms;
--motion-slow: 900ms;
--ease-out: cubic-bezier(.22, .61, .36, 1);
--ease-spring: cubic-bezier(.2, .8, .2, 1.08);
--reveal-distance: 16px;
```

Only animate `transform`, `opacity`, and—sparingly—`filter`. Avoid layout animation of width, height, top or left during scroll.

## Implementation approach

1. Create one small client-side motion controller loaded from the homepage. Prefer platform APIs: `IntersectionObserver`, Pointer Events, `requestAnimationFrame`, and the Page Visibility API.
2. Mark targets with descriptive data attributes such as `data-reveal`, `data-reveal-group`, `data-parallax`, and `data-section-theme`.
3. Put all timings and distances in shared CSS custom properties.
4. Keep the current carousel as the base; extend it rather than replacing it with a dependency.
5. Do not add GSAP or another motion library for the first pass. Reconsider only if timeline complexity materially grows.

## Accessibility and performance requirements

- Under `prefers-reduced-motion: reduce`, remove autoplay, parallax, floating loops and reveal travel. Content must appear immediately; manual carousel controls remain available.
- Motion must never delay access to copy or controls.
- Pause offscreen and background-tab animation.
- Maintain keyboard focus visibility and logical focus order in the floating/mobile navigation.
- Prevent cumulative layout shift: reserve final dimensions before animation begins.
- Target no additional third-party JavaScript and less than `12KB` gzipped first-party motion code.
- Test at `390`, `575`, `768`, `1000`, `1440`, and `1728px` widths.

## Suggested implementation order

1. Shared motion tokens, reveal utility and reduced-motion behavior.
2. Floating navigation.
3. Hero book parallax/tilt and hero entrance sequence.
4. Manifesto and section reveals.
5. Carousel dragging and visibility-aware autoplay.
6. Framework, cards, authors, newsletter and Colossus micro-interactions.
7. Cross-browser and performance QA.

## Acceptance checklist

- The page still reads correctly with JavaScript disabled.
- Reduced-motion mode contains no continuous or scroll-linked movement.
- Floating navigation never covers the book, content, or mobile menu.
- Carousel supports dots, swipe/drag and keyboard focus without clipping cards.
- Repeated scrolling does not replay every reveal; major reveals run once per page load.
- No horizontal overflow or layout shift is introduced.
- Existing authentication, responsive breakpoints and visual texture layers remain intact.
