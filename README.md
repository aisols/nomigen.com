# Oitu by Nomigen

A minimalist English landing page for voice practice in everyday confrontations, built with React, Vite, and TypeScript. Eight balanced blocks explain the product: the hero, four-step training loop, illustrative post-session scorecard, methodology, scenario catalog with difficulty levels, cultural fluency, Nomigen / ElevenLabs architecture, and roadmap with contacts. The latest user brief supersedes the previous console design; original prompt files remain unchanged.

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

Production files are generated in `dist/`. Cloudflare Pages project `nomigen` connects to GitHub: a push to `main` builds with `npm run build` and publishes `dist/`. The canonical URL is `https://nomigen.com/`; the Pages address is `https://nomigen.pages.dev/`. Do not commit, push, or deploy unless requested.

## Audio and product claims

The confrontation preview uses HTML Audio and a real supplied recording. Add an authorized boss sample as `public/audio/authoritarian-executive.mp3`. Without it, the page shows the transcript and an honest unavailable state. Decorative waveform motion never simulates playback. No microphone recording, provider API calls, API keys, or backend are required.

Phase 1 is an asynchronous Telegram voice-note experience. Real-time calls and live interruption belong to Phase 2; B2B tools belong to Phase 3. Latency, acoustic analysis, and language coverage are planned capabilities or targets, not claims about the current Telegram experience. The scorecard is a clearly labeled example, not a measurement or verified report. Methodology describes inspiration from guided rehearsal and stress-inoculation techniques; it does not claim clinical validation or treatment efficacy for Oitu. Cultural examples describe scenario variations, not national characteristics. The ElevenLabs grant note describes an application, not an award. Telegram and email use real destinations; the site includes no analytics or data collection forms.

## Assets and workflow

Read `AGENTS.md` before making changes. Implementation and independent review are delegated to separate agents; the orchestrator coordinates architecture and acceptance. Run the production build and check 360, 768, and 1440 px layouts, keyboard access, reduced motion, links, and audio error handling.

Fonts are local in `public/fonts/`, with their license notices. Previous illustrations remain unused in `design/archive/v1-images/`. The social card is a deterministic PNG export of `public/social-card.svg`, not a generated illustration.
