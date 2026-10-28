export const TELEGRAM = 'https://t.me/oitubot'
export const preview = {
  source: '/audio/authoritarian-executive.mp3',
  quote: 'I don’t understand. Why are you arguing? I expect you at work at nine on Saturday.',
}

export const hero = {
  headline: 'Master High-Stakes Conversations Out Loud.',
  description: 'Knowing what to say in theory and saying it when someone pushes back are two different skills. Practice setting boundaries and handling manipulation with realistic, emotionally expressive AI voice personas in Oitu by Nomigen.',
  upcoming: 'Sales, negotiations, dating and social confidence scenarios are coming soon.',
}

type ContentCard = { title: string; description: string }
export const practiceBenefits: ContentCard[] = [
  { title: 'Realistic Vocal Pressure', description: 'Exchange voice notes in Telegram across office and café acoustic scenes. AI counterparts respond with expressive hesitation, warmth, irritation or reluctant acceptance.' },
  { title: 'In-Dialogue Coaching Hints', description: 'Stuck under pressure? Request a contextual hint mid-exchange to reframe your response and hold your ground without overexplaining.' },
  { title: 'Blind-Spot Breakdown', description: 'Get structured post-session feedback that highlights not only where you lacked firmness, but where your phrasing or tone unintentionally escalated the conflict.' },
]

type PracticeStep = { title: string; description: string; sender: string; message: string; note: string; outgoing?: boolean }
export const practiceSteps: PracticeStep[] = [
  { title: 'Hear the pressure', description: 'A challenging voice note lands in Telegram. Your virtual boss wants your weekend.', sender: 'The boss · Incoming voice note', message: '“I need the report Saturday morning. Everyone else is making an effort.”', note: 'Expressive synthesis · Acoustic scene active' },
  { title: 'Speak your boundary', description: 'Record your reply in Telegram and answer out loud. Request a coaching hint whenever you need help finding your words.', sender: 'You · Your voice reply', message: '“I’m unavailable this weekend. I can prioritize the report first thing Monday.”', note: 'Turn-based practice: answer at your own pace.', outgoing: true },
  { title: 'Meet the pushback', description: 'The AI persona adapts dynamically—pushing back on defensive excuses or reluctantly accepting a firm refusal.', sender: 'The boss · Next voice note', message: '“So you’re saying your personal plans matter more than the team?”', note: 'Adaptive emotional escalation based on your delivery.' },
  { title: 'Review. Try again.', description: 'Review feedback on your wording, confidence gaps and unintentional escalation triggers, then run the scenario again.', sender: 'Oitu · Post-session debrief', message: 'Boundary held. Watch out: your opening phrase sounded defensive and triggered pushback. Next round: state your Monday alternative calmly.', note: 'Structured behavioral & vocal analysis' },
]

type Scenario = { level: number; name: string; quote: string; goal: string }
type ScenarioCategory = { name: string; status: 'Available now' | 'Coming Soon'; description: string; scenarios: Scenario[] }
export const scenarioCategories: ScenarioCategory[] = [
  { name: 'Personal & Workplace Boundaries', status: 'Available now', description: 'Push back on unreasonable deadlines, guilt-tripping and passive-aggressive colleagues or relatives.', scenarios: [
    { level: 1, name: 'The guilt-tripping peer', quote: 'Cover my presentation. We’re friends, right?', goal: 'Decline someone else’s workload.' },
    { level: 2, name: 'The demanding boss', quote: 'No overtime? Don’t expect a bonus.', goal: 'Refuse unpaid work without overexplaining.' },
    { level: 3, name: 'The authoritarian director', quote: 'Take responsibility. I don’t care whose mistake it was.', goal: 'Hold your ground across a power gap.' },
    { level: 1, name: 'The family obligation', quote: 'After everything we’ve done for you?', goal: 'Say no without negotiating your worth.' },
    { level: 2, name: 'The uncomfortable loan', quote: 'You trust me. Why would we need it in writing?', goal: 'Set clear limits around money.' },
  ] },
  { name: 'Sales & Negotiations', status: 'Coming Soon', description: 'Practice objection handling, rate increases and high-pressure client calls without losing the deal.', scenarios: [
    { level: 1, name: 'The aggressive buyer', quote: 'Give me 30% off now or I walk.', goal: 'Defend your price under pressure.' },
    { level: 2, name: 'The scope stretcher', quote: 'Just add these extras. They’re part of the project.', goal: 'Negotiate additional work and fees.' },
  ] },
  { name: 'Dating & Social Confidence', status: 'Coming Soon', description: 'Overcome approach anxiety, practice healthy flirting, express genuine interest and handle rejection with grace.', scenarios: [
    { level: 1, name: 'The first conversation', quote: 'Hi. How do you know the host?', goal: 'Build romantic chemistry and express genuine interest.' },
    { level: 2, name: 'The gracious goodbye', quote: 'Thank you, but I’m not feeling a connection.', goal: 'Accept a clear no and end the exchange respectfully.' },
  ] },
]

export const principles: ContentCard[] = [
  { title: 'Overcome the freeze', description: 'Confrontation makes words harder to find. Knowing your answer in theory and saying it out loud under vocal pressure are two different cognitive skills.' },
  { title: 'Stress inoculation, step by step', description: 'Graduated exposure to controlled pressure — the principle behind stress inoculation training — builds composure before the real conversation. Turn-based voice notes give you room to think and use a hint.' },
  { title: 'Catch blind spots', description: 'Early users discover not only where they sound hesitant, but where defensive phrasing unintentionally escalates the conflict.' },
]

type CulturalContext = { context: string; theme: string; example: string }
export const cultures: CulturalContext[] = [
  { context: 'A formal workplace', theme: 'Rules & exceptions', example: '“The policy is clear. Why should we make an exception?”' },
  { context: 'A family conversation', theme: 'Loyalty & connection', example: '“I thought I could count on you as part of the family.”' },
  { context: 'A group decision', theme: 'Consensus & belonging', example: '“Everyone else has agreed. Are you really opting out?”' },
  { context: 'An uneven power dynamic', theme: 'Status & direct pressure', example: '“I make the decisions here. Just get it done.”' },
]

type Language = { code: string; lang: string; name: string; group: string; dir?: 'rtl' }
export const languages: Language[] = [
  { code: 'EN', lang: 'en', name: 'English', group: 'Germanic' },
  { code: 'DE', lang: 'de', name: 'Deutsch', group: 'Germanic' },
  { code: 'ES', lang: 'es', name: 'Español', group: 'Romance' },
  { code: 'PL', lang: 'pl', name: 'Polski', group: 'Slavic' },
  { code: 'RU', lang: 'ru', name: 'Русский', group: 'Slavic' },
  { code: 'AR', lang: 'ar', name: 'العربية', group: 'Semitic', dir: 'rtl' },
]

export const pipelineFlow = ['scribe_v2', 'LLM driver · cultural adaptation', 'eleven_v4 + audio_effects']

type EngineStage = ContentCard & { label: string; tag: string }
export const engineStages: EngineStage[] = [
  { label: '01 / MULTILINGUAL STT', tag: 'scribe_v2', title: 'Listen & classify', description: 'ElevenLabs Scribe v2 transcribes voice input in all 6 languages within a single pipeline, while our classifier evaluates intent, tone and boundary firmness.' },
  { label: '02 / DIALOGUE & DIRECTING', tag: 'LLM driver', title: 'Shape the response', description: 'A culturally adapted LLM driver generates the character’s reply, a validation stage checks it, and the director automatically injects standardized English emotional delivery tags before synthesis.' },
  { label: '03 / EXPRESSIVE VOICE', tag: 'eleven_v4 · Text to Dialogue · audio_effects', title: 'Make it feel real', description: 'Eleven v4 via the Text to Dialogue API renders passive aggression, warmth, hesitation or reluctant agreement, layered with native audio_effects scenes — offices, cafés.' },
]

type RoadmapItem = ContentCard & { phase: string }
export const roadmap: RoadmapItem[] = [
  { phase: '01 / LIVE IN PRIVATE ALPHA', title: 'Multilingual Telegram Trainer', description: 'Turn-based voice practice in 6 languages across four language groups, built on ElevenLabs scribe_v2 and eleven_v4, with acoustic scenes, coaching hints and post-session breakdowns.' },
  { phase: '02 / NEXT · R&D', title: 'Standalone Real-Time App', description: 'Native mobile and web app with real-time streaming voice dialogue at a sub-500 ms latency target, built on the founders’ low-latency, high-load systems expertise.' },
  { phase: '03 / SCALE', title: 'Verticals & Monetization', description: 'B2C subscriptions with session tiers, premium custom behavioral profiles that model a specific counterpart’s pressure style from your examples — without voice cloning — and new Sales & Negotiations and Dating verticals.' },
]

type TeamMember = { name: string; role: string; bio: string }
export const team: TeamMember[] = [
  { name: 'Mikhail Zaprudin', role: 'Founder · Product & Engineering', bio: '15+ years architecting low-latency, high-load HFT and trading systems — now leading Nomigen’s multi-stage voice pipeline and real-time streaming R&D.' },
  { name: 'Kirill Kuprin', role: 'Co-Founder · Security & Infrastructure', bio: '11+ years in information security and cloud infrastructure; former CISO (ISO 27001). Leads privacy-by-design and PII protection across the LLM and audio pipeline.' },
]
