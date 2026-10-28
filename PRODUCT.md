# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Oitu serves adult learners preparing for difficult conversations at work, with family, and in everyday life. They want to practise responding under pressure, find words that preserve their boundary, and bring that preparation into their next conversation.

The landing page also serves prospective partners and ElevenLabs grant reviewers evaluating Nomigen’s product, voice technology, team, and direction.

## Product Purpose

Nomigen is an AI voice simulation platform. Oitu is its flagship voice rehearsal product, live in Private Alpha with early testers. It turns a situation the learner describes into a conversation they can practise, review, and repeat.

## Positioning

Oitu combines a persistent AI counterpart, contextual coaching, and a post-session debrief. Its turn-based voice architecture gives each exchange a multi-stage reasoning process: transcription and classification, character response, independent response review, emotional speech direction, and expressive synthesis in an acoustic scene.

## Operating Context

The working product is a Telegram bot at https://t.me/oitubot. Learners send finished voice messages or text, describe their own situation, review the roles and goal, and choose the pressure they want to practise under. They can ask for a hint during the conversation, inspect feedback afterward, and return to the same situation for another attempt.

The website demonstrates this experience through accessible HTML, a coherent example conversation, and actual local audio recordings. It directs visitors to Telegram and prospective partners to founder@nomigen.com.

## Capabilities and Constraints

- Custom situations from text or voice, clarification, and editable roles and goal before a session.
- Three pressure levels, voice selection, and configurable counterpart behaviour.
- Contextual hints that explain a strategy and suggest an exact reply.
- Feedback on the learner’s actual words, boundary, and conversation escalation; history and repeated attempts.
- Six supported languages: English, Spanish, German, Arabic, Polish, and Russian. Interface and practice languages can be selected independently.
- Current scenario bases cover workplace requests after hours, family demands on a day off, and an insistent stranger, alongside custom situations.
- The active pipeline uses ElevenLabs `scribe_v2`, separate character and reviewer stages, a speech director with language-agnostic English emotional directions, ElevenLabs `eleven_v4`, and native acoustic scenes.
- Low-latency real-time streaming in a standalone application is in R&D. Subscription plans and further applications in sales, negotiation, and social confidence belong to the roadmap.
- The landing page uses the existing React, Vite, and TypeScript implementation. Keep content and scenario data typed and separate from presentation where practical.
- No browser provider API keys or direct ElevenLabs calls, microphone recording, or backend are required. Audio playback must use real supplied files and expose honest failed or unavailable states with transcripts.
- Preserve the eight content blocks: hero, training loop, illustrative scorecard, methodology, scenario catalog, cultural fluency, Nomigen architecture, and roadmap with contacts.

## Brand Commitments

Keep Nomigen as the platform and Oitu as its flagship product. Public page copy is English, confident, direct, and grounded in the current product. Treat founder-provided team background and early tester feedback as established facts. Do not invent metrics, customer counts, certifications, testimonials, clinical benefits, or commercial outcomes.

The user’s binding visual constraints are generous whitespace, clear local typography, simple cards where useful, and one cyan accent on dark slate. Avoid console instrumentation, dense telemetry, generated illustrations, blurred gradients, and decorative raster imagery. Retain previous illustration assets unused and preserve all original prompt files.

Keep legal language in the footer. Its required notice is: “Designed exclusively for adult learners (18+). Not a substitute for clinical therapy or medical advice.”

## Evidence on Hand

- `src/data/content.ts` contains typed product copy, the complete seven-line workplace rehearsal, scenario data, language examples, architecture stages, team biographies, and roadmap.
- `public/audio/oitu-opening-en.mp3` contains the manager’s opening line; `public/audio/oitu-practice-en.mp3` contains the full illustrative exchange. These are actual synthetic recordings voiced with ElevenLabs and must remain coherent with the displayed transcript and debrief.
- Mikhail Zaprudin, Founder, Product & Engineering: 15+ years building low-latency, high-load HFT and trading systems; leads the voice pipeline and real-time streaming R&D.
- Kirill Kuprin, Co-Founder, Security & Infrastructure: 11+ years in information security and cloud infrastructure; former CISO (ISO 27001), leading privacy and PII protection.
- Existing privacy and terms pages are at `/privacy.html` and `/terms.html`. Telegram and founder email are real destinations. Do not invent missing documentation, API, or legal destinations.

## Product Principles

1. Let visitors experience a concrete conversation before asking them to believe a broad claim.
2. Keep the learner’s chosen boundary intact; successful practice does not require compensating a refusal with extra work or time.
3. Make coaching actionable through exact words, observable escalation, and a clear next attempt.
4. Present current capability and future ambition with confidence while preserving the distinction between live features and roadmap work.
5. Show human value and technical substance through the same product example.

## Accessibility & Inclusion

Preserve semantic headings, keyboard operation, visible focus, sufficient contrast, responsive layouts, and reduced-motion support. Render meaningful content as HTML. Provide audio transcripts and usable missing-file states. Respect language direction, including Arabic RTL content. Validate at 360, 768, and 1440 pixels.
