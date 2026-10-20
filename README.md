# Nomigen / Oitu

An English landing page for Nomigen and its Oitu voice practice product. Built with React, Vite, and TypeScript. Source requirements and illustration prompts remain in the repository root.

## Local development

Use Node.js 22.12+ (or Node.js 20.19+).

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The static output is in `dist/`. Hosting and domain configuration are not included. The canonical URL is `https://nomigen.com/`.

## Content and assets

Illustrations are local assets under `public/images/`. The interface labels sample telemetry and planned capabilities explicitly. Provider latency is not an end-to-end Oitu performance claim; the ElevenLabs section describes a grant application, not an awarded grant.

Add licensed or authorized synthetic audio previews under `public/audio/` using these names:

- `authoritarian-executive.mp3`
- `manipulative-peer.mp3`
- `procurement-buyer.mp3`

Until recordings are available, the player provides a transcript and an unavailable state. No audio is generated in the browser, and no API keys or backend are needed.

Telegram and email are the active conversion destinations. Documentation, API status, and legal pages need real destinations before they can be enabled. No analytics or data collection forms are installed.

## Contributor workflow

Read `AGENTS.md` before making changes. Coding and independent review are delegated to separate agents; the main agent coordinates architecture and acceptance.

## Illustration provenance and fonts

The four illustrations were generated with the built-in image generation tool from the supplied prompts, with generator-specific parameters adapted for that tool:

| Source prompt | Local illustration |
| --- | --- |
| `PROMPT_HERO_VISUAL.md` | `public/images/hero.webp` |
| `PROMPT_INTERFACE.md` | `public/images/interface.webp` |
| `PROMTP_MULTILINGUAL.md` | `public/images/multilingual.webp` |
| `PROMPT_PIPELINE.md` | `public/images/pipeline.webp` |

Images are WebP assets optimized at quality 85; the source prompt files are unchanged. Inter and JetBrains Mono Latin variable fonts are served locally from `public/fonts/`, with their SIL Open Font License notices included alongside them. The page does not need remote font requests.
