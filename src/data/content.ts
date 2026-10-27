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
  { title: 'Rehearse at a safe pace', description: 'Turn-based voice messaging gives you breathing room to think, use a coaching hint, and build vocal muscle memory before real-time calls.' },
  { title: 'Catch blind spots', description: 'Early users discover not only where they sound hesitant, but where defensive phrasing unintentionally escalates the conflict.' },
]

type CulturalContext = { context: string; theme: string; example: string }
export const cultures: CulturalContext[] = [
  { context: 'A formal workplace', theme: 'Rules & exceptions', example: '“The policy is clear. Why should we make an exception?”' },
  { context: 'A family conversation', theme: 'Loyalty & connection', example: '“I thought I could count on you as part of the family.”' },
  { context: 'A group decision', theme: 'Consensus & belonging', example: '“Everyone else has agreed. Are you really opting out?”' },
  { context: 'An uneven power dynamic', theme: 'Status & direct pressure', example: '“I make the decisions here. Just get it done.”' },
]

type RoadmapItem = ContentCard & { phase: string }
export const roadmap: RoadmapItem[] = [
  { phase: '01 / LIVE IN PRIVATE ALPHA', title: 'Multilingual Telegram Trainer', description: 'Turn-based voice practice across 6 languages (EN, ES, DE, AR, PL, RU) with acoustic scenes, hints and post-session breakdowns.' },
  { phase: '02 / IN R&D', title: 'Standalone Real-Time App', description: 'Dedicated mobile & web app featuring low-latency streaming voice calls and custom behavioral personas.' },
  { phase: '03 / EXPANSION', title: 'New Verticals & Teams', description: 'Dedicated modules for Sales & Negotiations, Adult Dating Confidence, and B2B team coaching.' },
]

type TeamMember = { name: string; role: string; bio: string }
export const team: TeamMember[] = [
  { name: 'Mikhail Zaprudin', role: 'Founder · Product & Engineering', bio: '15+ years in software architecture, specializing in low-latency, high-reliability HFT and trading systems—driving Nomigen’s multi-stage voice pipeline and real-time streaming R&D.' },
  { name: 'Kirill Kuprin', role: 'Co-Founder · Security & Infrastructure', bio: '11+ years in cybersecurity and cloud infrastructure (former CISO, ISO 27001), focusing on PII tokenization and privacy-by-design for external LLM and audio pipelines.' },
]
