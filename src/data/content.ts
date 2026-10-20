export const TELEGRAM = 'https://t.me/oitubot'
export const preview = {
  source: '/audio/authoritarian-executive.mp3',
  quote: 'I don’t understand. Why are you arguing? I expect you at work at nine on Saturday.',
}

type PracticeStep = { title: string; description: string; sender: string; message: string; note: string; outgoing?: boolean }
export const practiceSteps: PracticeStep[] = [
  { title: 'Hear the pressure', description: 'A challenging voice note lands in Telegram. Your virtual boss wants your weekend.', sender: 'The boss · Incoming voice note', message: '“I need the report Saturday morning. Everyone else is making an effort.”', note: 'Example interaction · Synthetic character' },
  { title: 'Speak your boundary', description: 'Hold the microphone and answer out loud. Practice the delivery, not just the wording.', sender: 'You · Your voice reply', message: '“I’m unavailable this weekend. I can finish the report on Monday.”', note: 'Asynchronous practice: answer in your own time.', outgoing: true },
  { title: 'Meet the pushback', description: 'The scenario can push back on excuses or accept a clear refusal. Respond with another voice note.', sender: 'The boss · Next voice note', message: '“So you’re saying your plans matter more than the team?”', note: 'Illustrative adaptive exchange. Live interruption is a Phase 2 goal.' },
  { title: 'Review. Try again.', description: 'The debrief concept turns a short exchange into specific things to practice next time.', sender: 'Oitu · Example debrief', message: 'Boundary held. Next round: leave out the apology and finish your sentence firmly.', note: 'Example 3–4-round session · Report design shown below' },
]

type Scenario = { level: number; name: string; quote: string; goal: string }
type ScenarioCategory = { name: string; scenarios: Scenario[] }
export const scenarioCategories: ScenarioCategory[] = [
  { name: 'Workplace', scenarios: [
    { level: 1, name: 'The guilt-tripping peer', quote: 'Cover my presentation. We’re friends, right?', goal: 'Decline someone else’s workload.' },
    { level: 2, name: 'The toxic boss', quote: 'No overtime? Don’t expect a bonus.', goal: 'Refuse unpaid work without overexplaining.' },
    { level: 3, name: 'The authoritarian director', quote: 'Take responsibility. I don’t care whose mistake it was.', goal: 'Hold your ground across a power gap.' },
  ] },
  { name: 'Sales & pricing', scenarios: [
    { level: 1, name: 'The aggressive buyer', quote: 'Give me 30% off now or I walk.', goal: 'Keep your price under pressure.' },
    { level: 2, name: 'The scope stretcher', quote: 'Just add these extras. They’re part of the project.', goal: 'Negotiate additional work and fees.' },
  ] },
  { name: 'Personal boundaries', scenarios: [
    { level: 1, name: 'The family obligation', quote: 'After everything we’ve done for you?', goal: 'Say no without negotiating your worth.' },
    { level: 2, name: 'The uncomfortable loan', quote: 'You trust me. Why would we need it in writing?', goal: 'Set clear limits around money.' },
  ] },
]

export const principles = [
  { title: 'Understand the freeze', description: 'Confrontation can make words harder to find. Knowing your answer and saying it under pressure are different skills.' },
  { title: 'Rehearse gradually', description: 'Start with manageable friction. Repeat a short exchange, reflect, then try a harder scenario.' },
  { title: 'Practice your delivery', description: 'Work on clear wording, steady pacing and a deliberate pause. Find a response that feels natural in your own voice.' },
]
export const cultures = [
  { region: 'DACH', theme: 'Rules & authority', example: '“The policy is clear. Why should we make an exception?”' },
  { region: 'Spain & Latin America', theme: 'Loyalty & connection', example: '“I thought I could count on you as part of the family.”' },
  { region: 'Nordic countries', theme: 'Consensus & belonging', example: '“Everyone else has agreed. Are you really opting out?”' },
  { region: 'Central & Eastern Europe', theme: 'Status & direct pressure', example: '“I make the decisions here. Just get it done.”' },
]
export const roadmap = [
  { phase: '01 / AVAILABLE NOW', title: 'Voice notes in Telegram', description: 'An asynchronous gym for practicing your wording and delivery. Start with @oitubot.' },
  { phase: '02 / IN DEVELOPMENT', title: 'Live conversation', description: 'WebRTC calls and live interruption. Funding would support the move to real-time practice.' },
  { phase: '03 / PLANNED', title: 'Practice for teams', description: 'B2B dashboards for team leads and customer-facing teams.' },
]
