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

Phase 1 is a free, open alpha for adults 18+, using asynchronous Telegram voice notes. The product owner confirms availability in English, Spanish, German, Arabic, Polish and Russian, office/café acoustic scenes, in-dialogue coaching hints, ElevenLabs speech recognition, and post-session feedback on wording and tone. These are product-owner confirmations, not an independent test of the bot. Personal and workplace boundaries are available; sales/negotiations and dating/social confidence are coming soon.

Real-time calls and live interruption belong to Phase 2; B2B tools belong to Phase 3. The sub-500 ms response target, expansion to 70+ languages and automatic language matching remain planned. The scorecard is a clearly labeled illustrative example, not a measured or verified user report. Methodology describes inspiration from guided rehearsal and stress-inoculation techniques; it does not claim clinical validation or treatment efficacy for Oitu. Cultural examples describe situations, not national characteristics. The ElevenLabs grant note describes an application, not an award.

## Privacy and terms

Standalone English pages live at `public/privacy.html` and `public/terms.html`; Vite copies them into `dist/` for direct access at `/privacy.html` and `/terms.html`. They share local styling in `public/legal.css`, link to each other and the homepage, and are linked from the landing-page footer.

The documents describe the product owner's stated practices and are drafts for review, not a certification of legal compliance. Nomigen is a project name, not a registered company. The owner has chosen not to publish their identity or address; this is an unresolved limitation. Messages, audio and related session data have no fixed retention period until deletion is requested through the bot. Active-service data is deleted within one hour; this does not establish deletion from providers or backups. Backups may retain copies, and no cleanup deadline has been established.

The bot and database use rented Play2Go servers. Models, including the Jav classifier, DeepSeek and Gemini, are accessed through OpenRouter; training is disabled in the project's OpenRouter settings. ElevenLabs handles speech recognition and synthesis under its standard account settings, so no universal no-training claim is made. The owner reports no routine manual review of dialogues; this is not a claim that technical access is impossible.

Google Analytics is planned but is not installed in this repository. The privacy page describes that future integration and its cookies without claiming that tracking is already active. Connecting analytics, consent handling, backend deletion changes and provider settings are outside this landing-page update. There are no data collection forms on the site. Telegram and email use real destinations.

## Assets and workflow

Read `AGENTS.md` before making changes. Implementation and independent review are delegated to separate agents; the orchestrator coordinates architecture and acceptance. Run the production build and check 360, 768, and 1440 px layouts, keyboard access, reduced motion, links, and audio error handling.

Fonts are local in `public/fonts/`, with their license notices. Previous illustrations remain unused in `design/archive/v1-images/`. The social card is a deterministic PNG export of `public/social-card.svg`, not a generated illustration.
