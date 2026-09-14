# Play+ design system — v0.1

**Status:** Working v0.2 derived from the client brief, Figma identity boards, delivered assets, recorded review decisions, and the implemented homepage. The coded one-page guide lives at `/brand`.

## Source of truth

1. The original [Play+ Brand Identity & Microsite Brief](../Logo%20and%20identity/01%20Brief%20%26%20Context/Material%20from%20the%20client/Brief.md) defines the cross-channel requirements.
2. Homepage Figma frame `149:539` defines the current approved web composition.
3. `PROJECT-BRIEF.md` and the decision register record later implementation decisions.
4. `src/styles/tokens.css` is the canonical web token source.

Delivered master artwork is mirrored into [`public/assets/brand/`](public/assets/brand/README.md) with stable, kebab-case web paths. The original delivery files remain untouched.

The delivered logo SVG is a black master with a generous `500 × 300` viewBox. The public asset library preserves that file as `play-plus-master.svg` and provides `play-plus.svg` with a cropped web viewBox; its vector paths are unchanged. The header reverses the web copy to white using CSS inversion.

## Principles

- Warm, confident, playful and grown-up.
- Human and crafted rather than technical or corporate.
- Colour communicates taxonomy; it is not incidental decoration.
- Hexagons explain the system and can cluster or reconfigure. They are not forced into the logo.
- Strong editorial moments are intentional exceptions, not templates for every page.
- Every useful treatment must work responsively and have a viable one-colour print expression.

## Foundations

### Colour

The implemented homepage palette is captured in semantic CSS tokens. Brighter Figma colours are organized into expressive pairing families with darker companions for readable text.

| Role | Token | Current value | Use |
| --- | --- | --- | --- |
| Ink | `--color-ink` | `#0E1032` | Body text, dark actions |
| Paper | `--color-paper` | `#EDEDED` | Primary light ground |
| Play pink | `--color-play` | `#FF275D` | Brand moments and CTA sections |
| Night | `--color-night` | `#1D172D` | Play+ dark sections |
| Blue | `--color-blue` | `#31528B` | Framework/resource surfaces |
| Blue accent | `--color-blue-accent` | `#B389D2` | Display accents and outlines |
| Yellow | `--color-yellow` | `#FCC53B` | Highlights and focus indication |
| Green | `--color-green` | `#2C9238` | Framework/resource accent |

Rules: use ink or white for body copy on colour; reserve taxonomy colours for grounds, icons, rules and large display type; test every approved pairing for accessible contrast; retain a white-heavy mode for long documents and decks.

Expressive pairs: pale yellow `#FFF496` + Play pink `#FF275D`; gold `#FCC53B` + field green `#5EA366`; lavender `#8E70A4` + blue `#31528B`; blush `#E3B2B5` + navy `#001B41`. The first three bright combinations are display treatments, not paragraph-text defaults.

### Typography

- **Display:** Mr Banks, weights 400/500/700/800/900. Use for expressive headlines and names.
- **Body:** Montserrat, weights 400/600/700. This is the current web substitute for Avenir.
- **Label:** Bebas Neue 400. Approved for navigation, buttons, eyebrows and compact labels.
- Avoid introducing additional faces. Do not use label typography for paragraphs.

### Spacing and layout

The initial scale is deliberately small: `5, 10, 20, 24, 40, 52, 75, 100px`. Canonical content widths are `766, 900, 1028px`; desktop and mobile page gutters are `40px` and `20px`. Editorial hero compositions may exceed these values when they match approved art direction.

### Shape, texture and motion

- Rectangular controls with no default radius.
- Hex-grid and caltrops-grid patterns are quiet material layers, not foreground illustration. Hex-grid is used on light/pink grounds; the caltrops grid is inverted for dark grounds.
- Hexagons represent essentials and system relationships. Configurable Plus elements should remain flexible rather than becoming ten fixed branded icons.
- Use existing motion tokens and respect `prefers-reduced-motion`; no scroll-jacking.

## Components

### Button

`Button.astro` exposes intent through `variant="ink | light | outline"`, and renders a link when `href` is supplied. Preserve visible focus, a minimum 44px target, and direct action language.

### Heading treatments

- `.label-heading`: navigation-like section labels.
- `.stacked-title`: expressive two-part display headings. The second line is the dominant word.
- One-off manifesto and hero typography remain page-specific because they are editorial compositions.

### Next extraction candidates

1. Shared page container and section rhythm.
2. Stub-page/prose layout for secondary pages.
3. Resource card and author card where content models repeat.
4. Framework/essential tile after canonical colour and icon mappings are confirmed.

## Open approvals / inputs

1. Confirmation of the canonical four structure names; delivered files currently use Living Soil, Moon, Ocean Currents and Seasonal Bloom.
2. Font licence confirmation for non-web deliverables.
3. Final approval of the v0.2 colour-pair assignments after reviewing `/brand`.

## Intentional exceptions

The hero, manifesto statement, book treatment, model composition and Colossus transition are art-directed compositions. They should use system foundations without being flattened into generic components.
