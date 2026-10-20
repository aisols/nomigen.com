# Working on Nomigen

## Delegation is mandatory

- The main agent is the orchestrator and architect: clarify requirements, define architecture, divide work, coordinate dependencies, and accept results.
- Delegate all code writing and code changes to implementation agents. Delegate code review to an independent agent who did not author the changes under review.
- Preserve orchestrator context for architectural decisions and integration. Request targeted investigations and concise reports instead of full files or long logs.
- Every delegated task must state its goal, ownership boundaries, permitted files, constraints, and acceptance criteria. Concurrent implementers must not edit the same files.
- Implementers report changes, checks performed, and outstanding questions. Reviewers report location, impact, and a proposed fix for each finding.
- Return findings to implementers, rerun affected checks, and accept work only after requirements and independent review are satisfied.

## Project commands

- `npm install` — install dependencies.
- `npm run dev` — start the local Vite server.
- `npm run build` — typecheck and create the static production build in `dist/`.
- `npm run preview` — preview the production build.
- Do not publish, deploy, or commit unless requested.

## Product and implementation rules

- Follow `PROMPT_MASTER.md` and the supplied illustration prompts; preserve those source files unchanged.
- Site copy is English. Keep Nomigen as the platform and Oitu as its flagship product.
- Keep UI content and scenario data typed and separate from presentation where practical.
- Keep assets local. Optimize illustrations for the web and provide meaningful alt text; render important labels and metrics as accessible HTML.
- Never embed provider API keys or call ElevenLabs directly from the browser. No backend or microphone recording is required.
- Mark example telemetry as illustrative and latency/language targets as planned. Clearly distinguish the current Telegram experience, future capabilities, and the grant application from a grant award.
- Do not claim scientific validation, deployed architecture, company legal status, or unavailable functionality without evidence. Check provider model claims against official documentation.
- Use real destinations for links. Missing documentation, API status, and legal destinations must remain visibly unavailable rather than point at fabricated pages.
- Preserve semantic headings, visible keyboard focus, keyboard operation, responsive layouts, sufficient contrast, and `prefers-reduced-motion` support.
- Audio previews must use actual supplied recordings. Missing or failed recordings show a transcript and an honest unavailable state; never simulate playback.

## Acceptance

Run the production build and check responsive behavior at 360, 768, and 1440 px. Verify navigation, Telegram/email links, assets, keyboard access, reduced motion, audio state changes and missing-file handling. Keep review reports concise; disclose checks that could not be completed.
