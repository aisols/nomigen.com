---
name: Oitu by Nomigen
description: Condensed display typography, clear dialogue, and cyan responses on dark slate.
colors:
  bg: "#142127"
  surface: "#1e3038"
  surface-deep: "#101c22"
  text: "#f3f7f5"
  muted: "#b5c5cb"
  line: "#40545c"
  cyan: "#83e3e7"
  ink: "#153137"
  cyan-hover: "#aceff0"
  control-border: "#68828d"
  control-hover: "#2b444e"
  quiet-line: "#78939d"
typography:
  display:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(66px, 8.3vw, 96px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(44px, 4.5vw, 64px)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  control: "5px"
  action: "6px"
  panel: "12px"
  circular: "50%"
spacing:
  compact: "8px"
  related: "12px"
  control: "18px"
  content: "24px"
  panel: "32px"
  column: "44px"
  open: "64px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.cyan-hover}"
  button-text:
    textColor: "{colors.cyan}"
    padding: "5px 0"
  pressure-option:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 18px"
  pressure-option-selected:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
  language-tab:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "9px 18px"
  language-tab-selected:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
  practice-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "32px 36px 26px"
  audio-button:
    textColor: "{colors.cyan}"
    rounded: "{rounded.circular}"
    width: "48px"
    height: "48px"
  scenario-disclosure:
    padding: "26px 0"
---

# Design System: Oitu by Nomigen

## Overview

**Creative North Star: "Say it out loud"**

Spoken words are the visual material: emphatic condensed headings, clear dialogue, and quiet supporting copy. Oitu leads as the product, with Nomigen as the platform attribution.

Dark slate bands, open rows, fine rules, and generous space create the structure. Cyan marks responses, selected controls, and primary actions. The occasional rounded practice panel groups an interaction without turning the page into a dashboard.

**Key Characteristics:**

- Condensed display lettering with readable Inter body text.
- One cyan accent across a flat slate palette.
- Open content rows and a contained practice interaction.
- Visible keyboard focus, semantic controls, and real audio states.

This is an extraction of the finished [stylesheet](src/styles.css), [landing components](src/App.tsx), [tabs](src/components/Tabs.tsx), and [audio player](src/components/AudioPreview.tsx). The frontmatter records live values; it does not establish a new spacing scale. The [sidecar](.impeccable/design.json) adds component previews, motion, and breakpoints. Its synthesized tonal strips are preview metadata, not additional application colors. Product commitments remain in [PRODUCT.md](PRODUCT.md); page composition remains in the [surface brief](.impeccable/surfaces/src-app-tsx.md).

## Colors

### Primary

Cyan is the single accent. It fills primary actions and selected choices, emphasizes the learner's responses, and carries the broad response band. Dark ink provides text on cyan. The lighter cyan is the primary action's hover state.

### Neutral

The background is dark slate; the lighter surface groups the practice panel and language section. Deep slate distinguishes the methodology and roadmap bands. Near-white text, muted supporting text, and slate rules supply the remaining hierarchy. Control borders and hover fills stay within this same slate family.

**The One Accent Rule.** Use cyan for emphasized responses, selected controls, and primary actions. Group supporting material with the existing slate tones.

## Typography

The local display family is Barlow Condensed, with medium and semibold files. Inter is the local variable body/UI family. Their fallback stacks are recorded above. Font files are in [public/fonts](public/fonts); the stylesheet uses `font-display: swap` and disables synthetic faces.

The frontmatter records the base display, headline, title, body, label, and action roles. The scale is purpose-specific rather than a fixed mathematical ratio. Body explanations generally use the body or smaller body role; conversation lines use Inter (17px, line-height 1.55). Display quotations vary with context instead of inheriting body styling.

The hero display becomes 78px at the tablet breakpoint and `clamp(50px, 14.8vw, 76px)` on phones. Section headings become 49px and then 44px. Arabic and Russian language-response blocks explicitly use the Inter/Arial/sans-serif stack: 33px on desktop, 29px at the tablet breakpoint, and 26px on phones, with more generous line height and no tightened tracking.

**The Two Voices Rule.** Barlow Condensed carries display emphasis; Inter carries explanation and controls. Preserve this deliberate contrast.

## Layout

The centered desktop container is `min(1184px, calc(100% - 96px))`. Major sections use generous vertical space; open two-column comparisons and ruled lists supply most content structure. The practice interaction is the main filled container. The spacing tokens record recurring distances, not an instruction to round every local value to a grid.

| Condition | Implemented response |
| --- | --- |
| Base | Sections have 104px vertical padding. Practice uses a 250px left tab rail and a flexible panel with a 44px gap. Team and debrief use two columns; roadmap uses three. |
| At or below 1040px | Container width becomes `calc(100% - 64px)`. Practice rail becomes 205px with a 30px gap. Architecture rows move from three columns to two. |
| At or below 800px | Sections use 78px vertical padding. Practice tabs form four columns above the panel; tab orientation becomes horizontal. Header availability is hidden. |
| At or below 560px | Container width becomes `calc(100% - 40px)`. Sections use 64px vertical padding. Practice tabs form two columns. Main content grids stack; the practice panel loses its minimum height and uses 25px 20px 20px padding. |
| Reduced motion | Smooth scrolling becomes immediate; all animations and transitions are disabled. |

At the acceptance widths, container side margins are 128px at 1440px, 32px at 768px, and 20px at 360px. The methodology band has its own vertical spacing (88px, then 68px at 800px, then 62px at 560px).

Scenario context sits beside the title on wide screens and below it on phones. Roadmap status follows its title at every width. Mobile navigation retains the two main section links; the team link is hidden at 560px.

## Elevation & Depth

Surfaces are flat. Background changes and one-pixel rules distinguish regions; there are no box shadows, blurred layers, or gradient backgrounds.

**The Open Surface Rule.** Separate content with space, tonal fills, and fine rules. The implementation uses no shadows.

The only content entrance animation reveals the coaching hint with a clipping mask over 280ms, using `cubic-bezier(.16, 1, .3, 1)`. It moves from `inset(0 0 100% 0)` to `inset(0)`. Hover states change color immediately. Reduced motion removes the reveal and smooth scrolling.

## Shapes

Controls use modest corners: pressure/language choices use the control radius, primary actions use the action radius, and the practice surface uses the panel radius. Audio and the response-band arrow are circles. Ruled content rows remain open, without card outlines.

Icons are inline SVG: simple current-color strokes or the audio play/pause shapes. Focus is a visible cyan outline (2px, 5px offset); the cyan primary action uses a near-white focus outline, and the response-band action uses dark ink.

## Components

### Actions and choices

Primary Telegram actions are anchors with a minimum height of 54px and the frontmatter padding. They use a lighter fill on hover. The mobile hero action fills the available width and has a 50px minimum height. Text actions use a 13px Inter label, cyan text, a 40px minimum height, and an underline on hover.

Pressure choices are native buttons inside a fieldset and legend. They have 40px minimum height, a one-pixel control border, and `aria-pressed`; the selected option uses cyan and dark ink. The description announces changes politely. Language tabs share this visual grammar with a 42px minimum height, becoming 40px on phones.

### Tabs and practice panel

Reuse [Tabs.tsx](src/components/Tabs.tsx) for both tab systems. It connects each tab to a labelled panel, keeps only the selected tab in the tab order, and supports Home, End, and arrow keys. Practice adds Up/Down navigation while vertical. Continue actions move focus to the newly selected panel.

The practice panel uses the surface fill and panel radius. Its desktop minimum height is 584px; at 800px it is 540px, and at 560px it becomes content-sized. Selected practice tabs fill with cyan; unselected tabs have muted text and a bottom rule. The coaching toggle uses `aria-expanded`/`aria-controls`, while the revealed hint is a status region.

### Scenario disclosures

Native `details`/`summary` preserve keyboard behavior. A title, contextual text, and inline SVG plus identify each row. Opening a row turns the title cyan and rotates the plus by 45 degrees. The matching `name` groups the scenarios; the workplace example is initially open.

### Audio

The circular audio control is 48px, becoming 44px on phones. Its status is text in a live region, and the full player adds a labelled native range input. The compact opening player omits the range input. States distinguish checking, ready, starting, playing, ended, and unavailable; playback position and duration use tabular numerals.

Only supplied local audio is played. Failed or missing audio disables playback and shows “Audio unavailable. Read the example transcript.” The adjacent native disclosure keeps the complete transcript available. The sidecar demonstrates this unavailable state without simulating playback.

### Navigation and open content rows

The brand pairs the Inter wordmark with smaller platform attribution. Header navigation is a horizontal set of real section links, with no menu overlay. Hover makes links cyan, and the skip link becomes visible on focus. The debrief, architecture, team, and roadmap use headings, quotes, text, and fine rules; they do not inherit the filled practice-panel treatment.

## Do's and Don'ts

### Do:

- Do keep the local display and body fonts in their established roles.
- Do preserve native headings, links, buttons, details, language direction, and tab semantics.
- Do retain visible focus and reduced-motion behavior.
- Do use actual recordings, text status, and an available transcript.

### Don't:

- Don't add a second accent, blurred gradients, console instrumentation, or decorative raster imagery.
- Don't turn every content group into a card or add decorative section kickers.
- Don't simulate audio playback or replace semantic content with an image.
- Don't introduce remote fonts or activate archived illustrations.

