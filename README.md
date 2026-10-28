# Oitu by Nomigen

Oitu is Nomigen’s flagship voice rehearsal product, live in Private Alpha with early testers. This English landing page uses React, Vite and TypeScript to show one coherent practice conversation, from a personal situation to a useful debrief.

The page has eight blocks: hero, interactive practice loop, illustrative post-session breakdown, methodology, current scenarios and custom situations, six-language examples, Nomigen architecture and team, and roadmap with contacts. The visual direction is dark slate with one cyan accent, local typography, open layouts and a conversation as the main visual object. Original prompt files and previous illustrations remain unchanged.

## Development

Use Node.js 22.12+ (Cloudflare Pages uses Node 22).

```sh
npm install
npm run dev
```

Vite listens on `0.0.0.0:5173` for local-network preview.

```sh
npm run build
npm run preview
```

The build typechecks and writes the static production site to `dist/`. Cloudflare Pages project `nomigen` connects to GitHub: a push to `main` builds with `npm run build` and publishes `dist/`. The canonical URL is `https://nomigen.com/`; the Pages address is `https://nomigen.pages.dev/`. Do not commit, push or deploy unless requested.

## Content and interaction

Content and typed example data are in `src/data/content.ts`. The demonstration is explicitly illustrative: the same words appear in the hero, practice sequence, audio transcript and debrief. There are no fabricated performance scores or user metrics.

The preparation example previews three pressure levels. Changing the level explains its meaning; the supplied recording remains one fixed example conversation. Users choose their actual settings in the Telegram bot. Step controls and language controls support keyboard navigation, and the coaching hint is a local interactive demonstration.

The product supports text and voice descriptions of custom situations, preparation, adjustable pressure, voice selection, contextual hints, structured feedback, history and repeat attempts. The UI and practice language can be selected independently across English, Spanish, German, Arabic, Polish and Russian. The architecture section describes the active multi-stage pipeline with `scribe_v2`, role and response review, English emotional directing, `eleven_v4` and native acoustic scenes. Real-time streaming and subscription expansion are presented as roadmap work.

## Audio

The page uses actual synthetic demonstration recordings:

- `public/audio/oitu-opening-en.mp3`: the manager’s opening line.
- `public/audio/oitu-practice-en.mp3`: the complete seven-line example exchange.

The player reads duration and playback position from HTML Audio. Only one sample plays at a time. Loading, play, pause, end and unavailable states reflect the media element; there is no simulated waveform or playback. The opening transcript is visible in the hero, and the full transcript is always available through an accessible disclosure beneath the full player. Failed or missing recordings produce an unavailable state with a transcript direction.

There is no microphone recording, backend, provider API call or embedded API key in the website. Browser requests load local assets only, apart from user-followed external links.

## Assets, links and validation

Fonts are local in `public/fonts/`, with their license notices. Previous illustrations remain unused in `design/archive/v1-images/`. The social card is a deterministic PNG export of `public/social-card.svg`.

Standalone English privacy and terms pages are in `public/privacy.html` and `public/terms.html`, sharing `public/legal.css`. This frontend redesign does not change those documents or backend data-handling policies. Telegram and email links use the real bot and founder contact. No analytics or forms are installed.

Read `AGENTS.md` before changing the project. Implementation and independent review are delegated to separate agents. Acceptance includes `npm run build`, 360/768/1440 px responsive layouts, navigation and link destinations, local assets, keyboard access, reduced motion, and actual audio states including missing/failed media. No deployment is part of local validation.
