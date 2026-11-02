---
name: AIMSTA
description: Professional training for South African organisations, presented with heavy expanded type, bold forest and logo-green fields, and forward-moving motion.
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
  hero:
    fontFamily: "Archivo Variable, Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 1.2rem + 4.6vw, 5.4rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  display:
    fontFamily: "Archivo Variable, Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.3rem + 5vw, 6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline-xl:
    fontFamily: "Archivo Variable, Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 1.3rem + 3.8vw, 4.6rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo Variable, Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.4rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.035em"
  row-title:
    fontFamily: "Archivo Variable, Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 1.1rem + 1.1vw, 2.15rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  marquee:
    fontFamily: "Archivo Variable, Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 2vw, 2.8rem)"
    fontWeight: 850
    lineHeight: 1
  title:
    fontFamily: "Archivo Variable, Public Sans Variable, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 750
    lineHeight: 1.2
  lede:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.02rem + .45vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.3
  caption:
    fontFamily: "Public Sans Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  input: "10px"
  row: "14px"
  panel: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(4.5rem, 3rem + 5vw, 8rem)"
  container: "1280px"
  nav-height: "76px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    height: "48px"
  button-on-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
  button-outline-light:
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
  button-secondary:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-lg:
    height: "56px"
  chip-selected:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.surface}"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
  marquee-band:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
  page-head:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-forest-2}"
  close-band:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
---

# Design System: AIMSTA

## Overview

**Creative North Star: "Momentum"**

AIMSTA sells training that moves teams forward, and the site says it with weight and direction. Headlines are set in Archivo at 850 to 900 weight, stretched to 112-125% width and tightly tracked, so every page opens on a heavy, confident statement. Every page head is a full-bleed forest field; logo green fills the training-area marquee and the closing call-to-action band. Motion always travels forward: left to right (highlight sweep, page-head bar, marquee, step rail) or upward (reveals, panels rising).

The palette is unchanged from the previous system; what changed is how much of it is used at once. Forest and logo green now own whole regions, alternating with the daylight ground and pale sage.

**Key Characteristics:**
- Heavy expanded grotesk headlines (Archivo Variable); Public Sans for body and UI.
- Forest page heads on every page, with a logo-green bar that draws in beneath.
- A logo-green marquee band of the six training areas under the home hero.
- Training-area rows that flood forest on hover, rather than a card grid.
- A steps rail on forest that fills as the section scrolls.
- One logo-green close band before the forest footer, which ends on a giant forest-2 AIMSTA wordmark.
- Pill buttons; a white pill on any forest or green field.

## Colors

- **Logo Green** (`brand`): primary buttons, links, icons, the marquee band and the closing band. Never used as text on forest (2.8:1); on forest it appears only as fills (step dots, highlight sweep, page-head bar).
- **Deep Forest** (`forest`): scrolled nav, every page head, the "How we work" band, the About "Efficacy for Excellence" band, the contact page and the footer.
- **Forest Rule** (`forest-2`): dividers on forest, inactive step dots, the footer wordmark.
- **Mist** (`on-forest`, `on-forest-2`): body text and links on forest. Headings on forest and green are pure white.
- **Daylight Ground / Pale Sage / Paper White** (`bg`, `tint`, `surface`): light sections, tinted sections, panels and inputs.
- **Error Red** (`danger`): field errors only.

**Named rules.** White button on dark: on forest or logo green the action is a white pill with forest text. No two green bands touch. No gradients, glows or decorative grid backgrounds.

## Typography

Archivo Variable (`@fontsource-variable/archivo/standard.css`, weight and width axes) for h1, h2, h3, row titles, the marquee, the brand name and step numerals. Public Sans Variable for paragraphs, labels, inputs, buttons and footer column heads. Headings use `text-wrap: balance`; body is capped at 68ch. Sentence case throughout, no eyebrow labels.

## Layout

1280px container, fluid gutter, fluid section padding. Hero 1.3fr / 1fr (copy / planner); page heads 1fr / 1fr (h1 / lede), with About stacking its h1 above a two-column body; contact 5fr / 7fr with the info column sticky. Training-area rows run icon / title / description / arrow. Breakpoints: 1080px (nav collapses to the full-screen menu, hero stacks, steps go 2x2), 860px (all splits stack), 640px (steps become a vertical rail, single-column forms).

## Motion

- Hero: copy rises in a stagger; the planner rises with a slight scale; "moves your team forward" gets a logo-green highlight that sweeps left to right.
- Page heads: the green bar draws in from the left.
- Scroll reveals (`data-reveal`): rise 36px as a 6px blur clears, once, staggered within groups. Elements are hidden only after JS opts in (`html.js-reveal`).
- The marquee loops every 42s and pauses on hover.
- The steps rail fills with scroll; each dot turns logo green as the fill reaches it.
- Hovers: area rows flood forest (clip-path), arrows rotate, buttons lift 2px.
- Everything collapses under `prefers-reduced-motion`: the sweep shows filled, the marquee stops, the rail shows full.

## Do's and Don'ts

- **Do** keep all copy exactly as supplied; placeholders stay placeholders (see PRODUCT.md).
- **Do** use the white pill for actions on forest or green.
- **Don't** put logo-green text on forest.
- **Don't** add decorative grid or glow backgrounds; the type and colour fields carry the energy.
- **Don't** set two green bands next to each other.
- **Don't** add eyebrow labels above headings.
