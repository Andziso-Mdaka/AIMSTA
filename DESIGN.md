---
name: AIMSTA
description: Professional training for South African organisations, presented in a daylight institutional register.
colors:
  brand: "#0a7a43"
  brand-hover: "#06603a"
  brand-tint: "#e3f1e8"
  bg: "#f7f9f7"
  surface: "#ffffff"
  tint: "#eef4ef"
  ink: "#10201a"
  ink-2: "#3d4d45"
  ink-3: "#56655d"
  line: "#d9e2dc"
  line-strong: "#b4c3b9"
  forest: "#0c2a1d"
  forest-2: "#163d2b"
  on-forest: "#e9f1ec"
  on-forest-2: "#b7cbbf"
  danger: "#b3261e"
typography:
  display:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(2.4rem, 1.6rem + 3vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.35rem + 1.5vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 650
    lineHeight: 1.35
  panel-title:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  ledger-heading:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(1.35rem, 1.2rem + .5vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  principle-term:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(1.3rem, 1.2rem + .4vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.25
  lede:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + .35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  tagline:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.1
  label:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
  numeral:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1
  wordmark:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.04em"
rounded:
  focus: "4px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(4rem, 3rem + 4vw, 7rem)"
  container: "1200px"
  nav-height: "72px"
  gap-sm: "0.5rem"
  gap-md: "0.75rem"
  stack: "1.5rem"
  row: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-ghost:
    textColor: "{colors.brand}"
    rounded: "{rounded.md}"
    padding: "0.75rem 0.5rem"
  button-ghost-hover:
    backgroundColor: "{colors.brand-tint}"
    textColor: "{colors.brand-hover}"
  button-on-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-on-dark-hover:
    backgroundColor: "{colors.brand-tint}"
  button-sm:
    padding: "0.5rem 1rem"
    height: "40px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.7rem 0.9rem"
    height: "48px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.85rem"
    height: "40px"
  chip-selected:
    backgroundColor: "{colors.brand-tint}"
    textColor: "{colors.brand-hover}"
  topic-tag:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.7rem"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.5rem, 1rem + 2vw, 2.5rem)"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.85rem"
  nav-link-active:
    textColor: "{colors.brand}"
  footer-band:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-forest-2}"
---

# Design System: AIMSTA

## Overview

**Creative North Star: "The Daylight Institution"**

AIMSTA reads like a well-run executive-education office with the blinds open: near-white ground carrying a faint green tint, deep forest ink, and a single logo green that marks every place a buyer can act. It is the category standard for professional training (the GIBS / UCT GSB Exec Ed / General Assembly Enterprise register), played straight and executed carefully rather than reinvented. Confidence comes from order, not ornament.

Structure is carried by hairline rules, not boxes. Lists of training areas, steps, principles, services and programmes are ruled ledgers: a 2px ink rule opens the list and 1px hairlines separate the rows. Only two things are lifted off the page, and both are working forms (the hero planner and the contact form). The page closes on one deep forest band that holds the final call to action and the footer.

Source Serif 4 headings echo the serif of the logo's wordmark and give the institutional voice; Public Sans does all the work in UI, body and subheads. Icons are one authored line family. Motion is nearly absent: the hero settles in once, and everything else is a short colour transition. The rejected world is the old dark-green "luxury" look (dark ground, glowing accents, emoji icon tiles); none of it returns.

**Key Characteristics:**
- Light, faintly green-tinted ground; deep forest ink; one accent.
- Ruled ledgers (2px ink opener, 1px hairlines) instead of card grids.
- Exactly two raised surfaces, both forms; one forest band per page, at the close.
- Serif for display and headline, sans for everything functional.
- Bare line icons in brand green, never boxed.
- One authored entrance (hero settle); otherwise colour-only transitions.

## Colors

A restrained green-neutral palette: almost everything is ink on pale ground, and the one chromatic voice is the logo green.

### Primary
- **Logo Green** (`brand`): the system's only accent, the logo green darkened to pass AA on white and on the page ground. It fills primary buttons and colours text links, the active nav item, focus rings, text selection, the checked state of chips, and the strokes of line icons and step numerals. It never fills a section or a large surface.
- **Pressed Green** (`brand-hover`): hover state for primary buttons and links; also the text colour of a selected chip.
- **Green Wash** (`brand-tint`): the quiet response colour. Selected chip fill, ghost-button hover, the 3px focus halo on inputs, and the hover of the white button on the forest band.

### Neutral
- **Daylight Ground** (`bg`): the page background.
- **Paper White** (`surface`): raised panels, inputs, chips, secondary buttons, and the nav once scrolled.
- **Pale Sage** (`tint`): alternating section background, the hero band, nav-link hover, and topic tags.
- **Forest Ink** (`ink`): headings, strong text, input text, and the 2px rule that opens every ledger.
- **Body Slate** (`ink-2`): running text and ledes.
- **Quiet Slate** (`ink-3`): metadata, placeholders, notes, contact labels.
- **Hairline** (`line`): row dividers, panel borders, the raised nav's bottom edge.
- **Strong Hairline** (`line-strong`): control borders (inputs, chips, secondary buttons) and the scrollbar thumb.
- **Deep Forest** (`forest`): the single closing band (final CTA plus footer).
- **Forest Rule** (`forest-2`): dividers inside the forest band.
- **Mist** (`on-forest`) and **Dim Mist** (`on-forest-2`): link text and body text on the forest band; headings there are pure white.
- **Error Red** (`danger`): field-error borders and messages only.

### Named Rules
**The One Green Rule.** Logo green is the only accent in the system. It appears as fill on primary buttons and otherwise only as text, stroke or ring (links, active nav, focus, icons, step numerals, selected chips). No second accent, no lime, no gradient.

**The White Button on Forest Rule.** On the forest band the call to action is a white button with forest text (`button-on-dark`), not a green one. Green on forest is never used for actions.

**The One Band Rule.** A page carries at most one forest band, and it is the close. Section rhythm otherwise alternates between Daylight Ground and Pale Sage.

## Typography

**Display Font:** Source Serif 4 Variable (with Georgia, serif)
**Body Font:** Public Sans Variable (with system-ui, sans-serif)

Both families are self-hosted through `@fontsource-variable` packages imported in `src/main.jsx`.

**Character:** A sober text serif with a slightly tightened display setting carries the institutional voice and rhymes with the logo's wordmark; a neutral, civic grotesque handles every functional and reading job.

### Hierarchy
- **Display** (600, `clamp(2.4rem, 1.6rem + 3vw, 4rem)`, 1.12, -0.02em): page h1 only; balanced wrap, capped near 15 to 18ch.
- **Headline** (600, `clamp(1.75rem, 1.35rem + 1.5vw, 2.6rem)`, 1.12, -0.02em): section h2.
- **Ledger Heading** (serif 600, fluid 1.35 to 1.6rem): the h2 of each service row; a smaller serif step for headings that repeat down a ledger.
- **Principle Term** (serif 600, fluid 1.3 to 1.5rem, 1.25): the defined term in the About principles list.
- **Panel Title** (serif 600, 1.5rem): the heading inside a raised form panel (the planner).
- **Title** (Public Sans 650, 1.125rem, 1.35): h3 inside ledgers, panels and footer columns. Subheads are sans, not serif.
- **Lede** (400, `clamp(1.125rem, 1.05rem + .35vw, 1.3rem)`, 1.6): the one sentence under a page or hero headline.
- **Body** (400, 1.0625rem, 1.65): running text in Body Slate, capped at 68ch.
- **Body Small** (400, 1rem, 1.65): ledger-row copy (areas, steps, inclusions) and button text.
- **Label** (600, 0.9375rem): field labels, small-button text, footer column heads, programme metadata. Sentence case, no tracking.
- **Caption** (400, 0.875rem): notes under forms, field errors, contact labels, topic tags, the footer legal line, and chips on phones; usually in Quiet Slate.
- **Tagline** (400, 0.75rem): the "Efficacy for Excellence" line under the wordmark.
- **Numeral** (serif 600, 2.25rem, line-height 1, Logo Green): step ordinals in the "how we work" sequence.

### Named Rules
**The Serif Speaks, the Sans Works Rule.** Serif is reserved for h1, h2, principle terms, step numerals and the wordmark. Every control, label, subhead and paragraph is Public Sans.

**The Sentence Case Rule.** No uppercase tracked labels and no small text sitting above headings. A heading starts its own section.

## Layout

A centred 1200px container with a fluid gutter (`clamp(16px, 4vw, 40px)`) and fluid section padding (`clamp(4rem, 3rem + 4vw, 7rem)`). The sticky nav is 72px, and anchors scroll with that offset plus 16px.

The grid language is asymmetric two-column splits: the hero runs 7fr / 5fr (copy / planner), contact 5fr / 7fr (info / form), programmes 3fr / 2fr, general splits 1.1fr / 1fr, and interior page heads place the h1 and lede side by side at 1fr / 1fr. Ledgers run 3 columns (training areas), 4 (steps), or 2 (principles, inclusions) with fluid column gaps.

Section heads cap at 46rem with the supporting line 0.9rem below. Inside a ledger, rows breathe at 1.5 to 2rem vertical padding.

Responsive steps: at 1024px, 3- and 4-column ledgers go to 2 and the footer to 2; at 900px the nav collapses to a menu toggle; at 860px every two-column split stacks; at 600px all ledgers become single column, chips become a 2-up grid of 8px-radius tiles, and action buttons go full width.

## Elevation & Depth

Flat by default, with tonal layering (Daylight Ground, Pale Sage, Paper White) doing most of the work. One shadow exists, a soft two-layer ambient lift, and it belongs only to the two working forms: the hero planner and the contact form panel. The nav gains a white fill and a hairline bottom edge once the page scrolls; it does not gain a shadow.

### Shadow Vocabulary
- **Panel Lift** (`box-shadow: 0 1px 2px rgba(16, 32, 26, .06), 0 12px 32px -8px rgba(16, 32, 26, .14)`): raised form panels only.

### Named Rules
**The Only Forms Float Rule.** A surface is lifted only if the visitor fills it in. Content rows, ledgers and info blocks stay flat and ruled.

## Shapes

Gentle, consistent corners: 8px on every control (buttons, inputs, nav links, menu toggle), 12px on the two raised panels, and full pills only for chips and topic tags (chips square off to 8px tiles on phones). Focus rings take a 4px radius with a 3px offset. Ledgers have no corners at all; they are open rows defined by rules, with a 2px Forest Ink line on top and 1px hairlines between.

Icons share one authored family: 24px grid, 1.6 stroke, round caps and joins, drawn in `currentColor`, used bare beside text at 16 to 24px.

## Components

### Buttons
Plain, firm and unadorned; the arrow is the only motion.
- **Shape:** gently curved (8px), 48px minimum height (40px for the small nav variant).
- **Primary:** Logo Green fill, white text, 600 weight, `0.75rem 1.4rem`. Hover deepens to Pressed Green. One per view is the main ask ("Request a proposal").
- **Secondary:** Paper White fill, Forest Ink text, Strong Hairline border; hover darkens the border to Forest Ink.
- **Ghost:** text-only Logo Green with tight inline padding; hover adds a Green Wash fill. Used for per-row "Enquire" actions in ledgers.
- **On dark:** white fill, Deep Forest text, used only on the forest band; hover shifts to Green Wash; focus ring is white.
- **Trailing arrow:** a line arrow nudges 3px right on hover with the expo-out ease.
- **Disabled:** 50% opacity, not-allowed cursor.

### Text links
Logo Green, 1px underline at a 0.22em offset; hover moves to Pressed Green. The standalone "See all" link is a 600-weight green label with an arrow that underlines on hover.

### Chips
- **Style:** checkbox pills: Paper White, Strong Hairline border, Body Slate text, 40px tall.
- **State:** hover darkens the border to Quiet Slate; checked turns Green Wash with a Logo Green border, Pressed Green text, and a check icon that scales in. Keyboard focus draws the green ring on the pill.

### Topic tags
Non-interactive pills in Pale Sage with small Body Slate text, listing a programme's topics.

### Cards / Containers (form panels)
- **Corner Style:** 12px.
- **Background:** Paper White on a tinted or daylight section.
- **Shadow Strategy:** Panel Lift (see Elevation).
- **Border:** 1px Hairline.
- **Internal Padding:** fluid, about 1.5rem to 2.5rem; internal stack gap about 1.35 to 1.5rem.

### Inputs / Fields
- **Style:** Paper White, 1px Strong Hairline, 8px radius, 48px minimum height; labels sit above in 600 Forest Ink, with "(optional)" in 400 Quiet Slate. Selects use a custom line chevron.
- **Focus:** border turns Logo Green with a 3px Green Wash halo; caret is green.
- **Error:** border and message in Error Red, with a red-tinted halo on focus.

### Navigation
Sticky, 72px. Logo mark plus serif wordmark and small tagline on the left; sans links (500, Body Slate) with an 8px-radius Pale Sage hover; the active page is Logo Green at 600. A small primary button closes the row. The bar is near-transparent Daylight Ground at rest and turns Paper White with a hairline bottom edge on scroll. Below 900px, links collapse to a 44px toggle that opens a full-width list of ruled rows with a full-width primary button.

### Ruled Ledger (signature)
The repeating structure of the site: training areas, steps, principles, service rows, inclusions, programmes, the check list and the contact list. A 2px Forest Ink rule opens the set, rows are separated by 1px hairlines, and each row pairs a bare green line icon (or a serif numeral) with a sans title and short body. No backgrounds, borders or shadows on individual rows.

### Forest Close
The final band: Deep Forest ground, white serif headline, Dim Mist body, and a white `button-on-dark` CTA, followed by the footer grid (brand, Company, Training areas, Contact) divided by Forest Rule lines. The logo sits on a small white 8px tile so it is kept as supplied.

## Do's and Don'ts

### Do:
- **Do** keep Logo Green as the only accent: fill for primary buttons, and text, stroke or ring everywhere else.
- **Do** use the white `button-on-dark` for any action on the forest band.
- **Do** build lists as ruled ledgers: 2px Forest Ink opener, 1px Hairline between rows, bare line icons.
- **Do** reserve Panel Lift and the 12px radius for surfaces the visitor fills in.
- **Do** set h1 and h2 in Source Serif 4 at 600 with -0.02em tracking, and everything functional in Public Sans.
- **Do** draw new icons in the existing family (24px grid, 1.6 stroke, round joins, `currentColor`).
- **Do** keep buttons and inputs at a 48px minimum height and 8px radius.
- **Do** alternate Daylight Ground and Pale Sage sections and end the page on the single forest band.

### Don't:
- **Don't** introduce a second accent, a lime or bright green highlight, or gradients.
- **Don't** fill sections, cards or large areas with Logo Green; green is for acting and marking, not for ground.
- **Don't** return to the old dark-green "luxury" world: dark page grounds, glowing accents, emoji or boxed icon tiles.
- **Don't** put icons inside tinted squares or circles; they stand bare beside their text.
- **Don't** add uppercase eyebrow or kicker labels above headings.
- **Don't** give ledger rows or info blocks shadows, borders or card backgrounds.
- **Don't** use more than one forest band on a page.
- **Don't** add entrance animations beyond the hero settle; state changes are short colour transitions, and all motion collapses under `prefers-reduced-motion`.
