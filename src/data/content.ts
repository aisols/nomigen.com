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
  { title: 'Realistic Vocal Pressure', description: 'Exchange voice notes in Telegram, including office and café acoustic scenes. AI counterparts respond with expressive hesitation, warmth, irritation or reluctant acceptance.' },
  { title: 'In-Dialogue Coaching Hints', description: 'Stuck under pressure? Request a contextual hint during the exchange to reframe your response without losing your ground.' },
  { title: 'Blind-Spot Breakdown', description: 'Get structured feedback on your wording and tone, including where you could be firmer and where your delivery may have unintentionally escalated the conflict.' },
]

type PracticeStep = { title: string; description: string; sender: string; message: string; note: string; outgoing?: boolean }
export const practiceSteps: PracticeStep[] = [
  { title: 'Hear the pressure', description: 'A challenging voice note lands in Telegram. Your virtual boss wants your weekend.', sender: 'The boss · Incoming voice note', message: '“I need the report Saturday morning. Everyone else is making an effort.”', note: 'Example interaction · Synthetic character' },
  { title: 'Speak your boundary', description: 'Record your reply in Telegram and answer out loud. Request a coaching hint whenever you need help finding your words.', sender: 'You · Your voice reply', message: '“I’m unavailable this weekend. I can finish the report on Monday.”', note: 'Asynchronous practice: answer in your own time.', outgoing: true },
  { title: 'Meet the pushback', description: 'The scenario can push back on excuses or accept a clear refusal. Respond with another voice note.', sender: 'The boss · Next voice note', message: '“So you’re saying your plans matter more than the team?”', note: 'Illustrative adaptive exchange. Live interruption is a Phase 2 goal.' },
  { title: 'Review. Try again.', description: 'Review feedback on your wording, tone and possible escalation, then choose something specific to practice next time.', sender: 'Oitu · Example debrief', message: 'Boundary held. Next round: leave out the apology and finish your sentence firmly.', note: 'Illustrative session and feedback · Example scorecard below' },
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
  { name: 'Sales & Negotiations', status: 'Coming Soon', description: 'Planned practice for objection handling, rate increases and high-pressure client calls. Examples below preview this future category.', scenarios: [
    { level: 1, name: 'The aggressive buyer', quote: 'Give me 30% off now or I walk.', goal: 'Keep your price under pressure.' },
    { level: 2, name: 'The scope stretcher', quote: 'Just add these extras. They’re part of the project.', goal: 'Negotiate additional work and fees.' },
  ] },
  { name: 'Dating & Social Confidence', status: 'Coming Soon', description: 'Planned practice for starting conversations, respectful flirting, expressing interest and handling rejection with grace. Examples below preview this future category.', scenarios: [
    { level: 1, name: 'The first conversation', quote: 'Hi. How do you know the host?', goal: 'Start a conversation and express genuine interest.' },
    { level: 2, name: 'The gracious goodbye', quote: 'Thank you, but I’m not interested.', goal: 'Accept a clear no and end the exchange respectfully.' },
  ] },
]

export const principles: ContentCard[] = [
  { title: 'Understand the freeze', description: 'Confrontation can make words harder to find. Knowing your answer and saying it under pressure are different skills.' },
  { title: 'Rehearse gradually', description: 'Start with manageable friction. Repeat a short exchange, reflect, then try a harder scenario.' },
  { title: 'Practice your delivery', description: 'Work on clear wording, steady pacing and a deliberate pause. Find a response that feels natural in your own voice.' },
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
  { phase: '01 / AVAILABLE NOW', title: 'Voice notes in Telegram', description: 'Free, open alpha in six languages, with acoustic scenes, coaching hints and post-session feedback.' },
  { phase: '02 / IN DEVELOPMENT', title: 'Live conversation', description: 'WebRTC calls and live interruption. Funding would support the move to real-time practice.' },
  { phase: '03 / PLANNED', title: 'Practice for teams', description: 'B2B dashboards for team leads and customer-facing teams.' },
]
