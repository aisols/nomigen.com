export const TELEGRAM = 'https://t.me/oitubot'
export const CONTACT = 'mailto:founder@nomigen.com'

export const hero = {
  headline: 'Rehearse your difficult conversation.',
  description: 'Bring the situation you’re facing. Practise with an expressive AI voice, find the words that hold your boundary, and try again.',
}

export type DialogueLine = { speaker: 'Manager' | 'You'; text: string }
export const practice = {
  situation: 'My manager wants me to work this Saturday. I want to keep my weekend free.',
  source: '/audio/oitu-practice-en.mp3',
  openingSource: '/audio/oitu-opening-en.mp3',
  hint: 'Keep the boundary. Drop the accusation.',
  suggestedReply: "I'm not available this weekend.",
  dialogue: [
    { speaker: 'Manager', text: 'I need you to come in on Saturday. Everyone else is making an effort.' },
    { speaker: 'You', text: 'Why is your poor planning my problem?' },
    { speaker: 'Manager', text: "There's no need for that tone. I'm asking you to help the team." },
    { speaker: 'You', text: "I'm not available this weekend." },
    { speaker: 'Manager', text: "I was counting on you. Can't you make an exception?" },
    { speaker: 'You', text: "I understand. I'm still not available on Saturday." },
    { speaker: 'Manager', text: "All right. We'll find another way." },
  ] satisfies DialogueLine[],
}

export type PracticeStep = { title: string; heading: string; description: string }
export const practiceSteps: PracticeStep[] = [
  { title: 'Set the scene', heading: 'Start with your situation.', description: 'Describe the conversation by text or voice. Check the roles and your goal, then choose how much pressure you want to practise with.' },
  { title: 'Feel the pressure', heading: 'Hear how it feels.', description: 'Your counterpart has their own point of view. Reply in Telegram by voice or text, at your own pace.' },
  { title: 'Find your response', heading: 'A little help, when you need it.', description: 'Ask for a hint in the middle of the conversation. Understand the next move, then use the suggested words or find your own.' },
  { title: 'Review & repeat', heading: 'Take the next attempt further.', description: 'Get feedback on the words you used and how the conversation changed. Keep the situation and try another approach.' },
]

export const pressureLevels = [
  { name: 'Low', description: 'A gentler first attempt, with room to find your words.' },
  { name: 'Medium', description: 'A persistent counterpart who challenges your first answer.' },
  { name: 'High', description: 'Stronger pressure to practise holding a clear boundary.' },
]

export type Scenario = { id: string; context: string; title: string; quote: string; goal: string }
export const scenarios: Scenario[] = [
  { id: 'work', context: 'At work', title: 'The workday is over. The requests aren’t.', quote: '“Can you take care of this tonight?”', goal: 'Protect your time when your manager has one more urgent task.' },
  { id: 'family', context: 'With family', title: 'Your day off already has a plan.', quote: '“I thought I could count on you.”', goal: 'Say no to a family obligation without giving up your own plans.' },
  { id: 'social', context: 'In everyday life', title: 'You’ve said no. They’re still asking.', quote: '“Come on. Just give me a chance.”', goal: 'Make your answer clear and end an unwanted conversation.' },
]

export type LanguageExample = { code: string; name: string; lang: string; dir?: 'rtl'; pressure: string; response: string; translation: string }
export const languages: LanguageExample[] = [
  { code: 'en', name: 'English', lang: 'en', pressure: '“Everyone else is making an effort.”', response: '“I understand. I’m still not available on Saturday.”', translation: 'I understand. I’m still not available on Saturday.' },
  { code: 'es', name: 'Español', lang: 'es', pressure: '“Los demás están haciendo un esfuerzo.”', response: '“Lo entiendo. Aun así, no estoy disponible el sábado.”', translation: 'I understand. Even so, I’m not available on Saturday.' },
  { code: 'de', name: 'Deutsch', lang: 'de', pressure: '„Alle anderen geben sich doch auch Mühe.“', response: '„Ich verstehe. Am Samstag bin ich trotzdem nicht verfügbar.“', translation: 'I understand. I’m still not available on Saturday.' },
  { code: 'ar', name: 'العربية', lang: 'ar-EG', dir: 'rtl', pressure: '«كل الناس التانية بتعمل مجهود.»', response: '«أنا فاهم. بس برضه مش هقدر أشتغل يوم السبت.»', translation: 'I understand. But I still won’t be able to work on Saturday.' },
  { code: 'pl', name: 'Polski', lang: 'pl', pressure: '„Wszyscy inni się starają.”', response: '„Rozumiem. Mimo to w sobotę nie mogę pracować.”', translation: 'I understand. Even so, I can’t work on Saturday.' },
  { code: 'ru', name: 'Русский', lang: 'ru', pressure: '«Все остальные стараются.»', response: '«Я понимаю. Но в субботу я всё равно не смогу работать.»', translation: 'I understand. But I still won’t be able to work on Saturday.' },
]

export type EngineStage = { title: string; description: string; owner: string }
export const engineStages: EngineStage[] = [
  { title: 'Understand', description: 'Transcribe your voice. Classify whether the input belongs to the scene.', owner: 'ElevenLabs scribe_v2 + Nomigen' },
  { title: 'Respond & review', description: 'Create a reply, check its role and context, and assess how you held your boundary.', owner: 'Nomigen dialogue pipeline' },
  { title: 'Direct the voice', description: 'Add English emotional directions to the reply, in any supported language.', owner: 'Nomigen speech director' },
  { title: 'Make it heard', description: 'Deliver expressive speech in an acoustic scene, from an office to a café.', owner: 'ElevenLabs eleven_v4 + audio_effects' },
]

export const team = [
  { name: 'Mikhail Zaprudin', initials: 'MZ', role: 'Founder, Product & Engineering', bio: '15+ years building low-latency, high-load HFT and trading systems. Leads the voice pipeline and real-time streaming R&D.' },
  { name: 'Kirill Kuprin', initials: 'KK', role: 'Co-Founder, Security & Infrastructure', bio: '11+ years in information security and cloud infrastructure. Former CISO (ISO 27001), leading privacy and PII protection across the platform.' },
]

export const roadmap = [
  { status: 'Live in Private Alpha', title: 'Practice in Telegram', description: 'Voice and text, six languages, your own scenarios, coaching and a debrief you can return to.' },
  { status: 'In R&D', title: 'Real-time conversation', description: 'Low-latency streaming in a standalone app, building on the team’s experience with demanding real-time systems.' },
  { status: 'Next chapter', title: 'More ways to practise', description: 'Sales, negotiation and social confidence. Subscription plans for a lasting practice habit, with new professional applications.' },
]
