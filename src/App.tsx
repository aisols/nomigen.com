import { useEffect, useRef, useState } from 'react'
import { AudioPreview } from './components/AudioPreview'
import { Tabs } from './components/Tabs'
import { CONTACT, TELEGRAM, engineStages, hero, languages, practice, practiceSteps, pressureLevels, roadmap, scenarios, team } from './data/content'
import type { DialogueLine } from './data/content'

function Arrow({ outward = false }: { outward?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={outward ? 'm4 16 12-12M5 4h11v11' : 'M3 10h14m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" /></svg>
}

function TelegramLink({ small = false }: { small?: boolean }) {
  return <a className={`button button-primary${small ? ' button-small' : ''}`} href={TELEGRAM} target="_blank" rel="noopener noreferrer">Open Oitu in Telegram<Arrow outward /></a>
}

function Brand() {
  return <a className="brand" href="#top" aria-label="Oitu by Nomigen, home"><span className="brand-name">oitu</span><span className="brand-platform">by Nomigen</span></a>
}

function Message({ line }: { line: DialogueLine }) {
  return <div className={`conversation-message ${line.speaker === 'You' ? 'message-you' : 'message-manager'}`}><span className="message-speaker">{line.speaker}</span><p>{line.text}</p></div>
}

function PracticeDemo() {
  const [step, setStep] = useState(0)
  const [pressure, setPressure] = useState(1)
  const [hint, setHint] = useState(false)
  const [verticalTabs, setVerticalTabs] = useState(() => !window.matchMedia('(max-width: 800px)').matches)
  const focusNextPanel = useRef(false)
  const changeStep = (next: number, focusPanel = false) => {
    focusNextPanel.current = focusPanel
    setStep(next)
    setHint(false)
  }
  useEffect(() => {
    const media = window.matchMedia('(max-width: 800px)')
    const syncOrientation = () => setVerticalTabs(!media.matches)
    syncOrientation()
    media.addEventListener('change', syncOrientation)
    return () => media.removeEventListener('change', syncOrientation)
  }, [])
  useEffect(() => {
    if (focusNextPanel.current) {
      document.getElementById(`practice-panel-${step}`)?.focus()
      focusNextPanel.current = false
    }
  }, [step])
  return <div className="practice-demo">
    <Tabs id="practice" label="Explore an example practice" labels={practiceSteps.map(item => item.title)} selected={step} onSelect={changeStep} className="practice-tabs" tabClassName="practice-tab" numbered vertical={verticalTabs} />
    {practiceSteps.map((item, index) => <div key={item.title} id={`practice-panel-${index}`} role="tabpanel" aria-labelledby={`practice-tab-${index}`} hidden={step !== index} tabIndex={0} className="practice-panel">
      <div className="practice-guide"><h3>{item.heading}</h3><p>{item.description}</p></div>
      <div className="practice-scene">
        {index === 0 && <div className="setup-example"><span className="scene-caption">Your situation, in your words</span><blockquote>“{practice.situation}”</blockquote><dl className="setup-facts"><div><dt>You</dt><dd>An employee keeping their weekend free</dd></div><div><dt>Your counterpart</dt><dd>A manager with an urgent request</dd></div></dl><fieldset className="pressure-picker"><legend>Explore the pressure levels</legend><div className="pressure-options">{pressureLevels.map((level, levelIndex) => <button type="button" key={level.name} aria-pressed={pressure === levelIndex} onClick={() => setPressure(levelIndex)}>{level.name}</button>)}</div><p aria-live="polite">{pressureLevels[pressure].description}</p></fieldset></div>}
        {index === 1 && <div className="conversation-stack"><span className="scene-caption">A reply can change the direction</span>{practice.dialogue.slice(0, 3).map((line, i) => <Message line={line} key={i} />)}</div>}
        {index === 2 && <div className="conversation-stack"><span className="scene-caption">Continue the same conversation</span><Message line={practice.dialogue[2]} /><button className="hint-button" type="button" aria-expanded={hint} aria-controls="practice-coaching-hint" onClick={() => setHint(!hint)}>{hint ? 'Hide the coaching hint' : 'I’m stuck. Show a coaching hint'}<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={hint ? 'M4 10h12' : 'M4 10h12M10 4v12'} stroke="currentColor" strokeWidth="1.5" /></svg></button><div className="coach-hint" id="practice-coaching-hint" role="status" hidden={!hint}><span className="message-speaker">Oitu’s coaching hint</span><p>{practice.hint}</p><blockquote>“{practice.suggestedReply}”</blockquote><span className="hint-explanation">Try these words, or answer in your own way.</span></div><Message line={practice.dialogue[3]} /><Message line={practice.dialogue[4]} /></div>}
        {index === 3 && <div className="conversation-stack"><span className="scene-caption">Same boundary. A different ending.</span><Message line={practice.dialogue[5]} /><Message line={practice.dialogue[6]} /><div className="scene-takeaway"><span className="message-speaker">What changed</span><p>You acknowledged the pressure without changing your answer.</p><a className="inline-link" href="#scorecard">See the example debrief</a></div></div>}
      </div>
      <div className="practice-step-actions">{index < 3 ? <button className="text-button" type="button" onClick={() => changeStep(index + 1, true)}>Continue to {practiceSteps[index + 1].title.toLowerCase()}<Arrow /></button> : <button className="text-button" type="button" onClick={() => { changeStep(0, true); setPressure(1) }}>Explore the example again<Arrow /></button>}</div>
    </div>)}
    <div className="practice-listening"><div className="listening-intro"><h3>Hear the whole exchange.</h3><p>An illustrative session with synthetic voices.</p></div><div className="listening-player"><AudioPreview source={practice.source} title="Listen to the example conversation" label="example conversation" /><details className="transcript"><summary>Read the full transcript</summary><ol>{practice.dialogue.map((line, index) => <li key={index}><strong>{line.speaker}</strong><p>{line.text}</p></li>)}</ol><p className="transcript-note">Coaching hint between replies: “{practice.hint}” The hint is shown in text and is not part of the recording.</p></details></div></div>
  </div>
}

function LanguageExample() {
  const [language, setLanguage] = useState(0)
  return <div className="language-demo"><Tabs id="language" label="Example language" labels={languages.map(item => item.name)} selected={language} onSelect={setLanguage} className="language-tabs" tabClassName="language-tab" />{languages.map((item, index) => <div key={item.code} id={`language-panel-${index}`} role="tabpanel" aria-labelledby={`language-tab-${index}`} hidden={language !== index} tabIndex={0} className="language-example"><div className="language-pressure-wrap"><span className="scene-caption">An appeal to the team</span><blockquote className="language-pressure" lang={item.lang} dir={item.dir}>{item.pressure}</blockquote></div><div className="language-answer"><span className="scene-caption">Your boundary stays yours</span><blockquote lang={item.lang} dir={item.dir}>{item.response}</blockquote>{item.code !== 'en' && <p className="translation"><span>In English</span>{item.translation}</p>}</div></div>)}</div>
}

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" id="top"><div className="container nav-shell"><Brand /><nav className="main-nav" aria-label="Main navigation"><a href="#practice">How it works</a><a href="#technology">The technology</a><a href="#team">Our team</a></nav><span className="availability">Private Alpha</span></div></header>
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title"><div className="container hero-intro"><h1 id="hero-title"><span>{hero.headline}</span><span>{hero.answer}</span></h1><div className="hero-invitation"><div className="hero-actions"><TelegramLink /><a className="hero-secondary" href="#practice">Explore a practice round<Arrow /></a></div><div className="hero-explanation"><p>{hero.description}</p><span>Private Alpha · Voice & text in Telegram · Six languages</span></div></div><div className="hero-example"><div className="hero-cue"><span className="message-speaker">Your manager, on Friday afternoon</span><blockquote>“{practice.dialogue[0].text}”</blockquote></div><div className="hero-audio"><AudioPreview source={practice.openingSource} title="Hear the pressure" label="opening line" compact /><p>Example conversation, voiced with ElevenLabs.</p></div></div></div><div className="hero-answer-band"><div className="container hero-answer"><span>You, with a little practice</span><blockquote>“{practice.suggestedReply}”</blockquote><a href="#practice" aria-label="See how the practice helps you find your response"><Arrow /></a></div></div></section>

      <section className="section practice-section" id="practice" aria-labelledby="practice-title"><div className="container"><div className="practice-heading"><h2 id="practice-title">There’s room<br />for another answer.</h2><p>Bring your situation. Hear the pushback. Find the words that work for you.<br />Let’s walk through one practice.</p></div><PracticeDemo /></div></section>

      <section className="section container debrief-section" id="scorecard" aria-labelledby="score-title"><div className="debrief-heading"><h2 id="score-title">Your words.<br />Their turning point.</h2><p>A useful debrief connects what you said to what happened next. Here’s the breakdown of the example above.</p></div><div className="debrief-evidence"><article className="evidence-row"><span className="evidence-label">The moment that escalated</span><blockquote>“{practice.dialogue[1].text}”</blockquote><p>The accusation shifted the conversation from your availability to your tone.</p></article><article className="evidence-row evidence-held"><span className="evidence-label">The boundary you held</span><blockquote>“{practice.dialogue[5].text}”</blockquote><p>You acknowledged the request, repeated your answer and kept your weekend free.</p></article></div><aside className="next-attempt"><h3>Keep the boundary.<br /><span>Leave out the blame.</span></h3><div><p>A clear refusal is enough. You don’t have to trade away another part of your time.</p><blockquote>“{practice.suggestedReply}”</blockquote><a className="inline-link" href="#practice">Back to the practice example<Arrow /></a></div></aside><p className="debrief-caption">Illustrative debrief. In Oitu, feedback draws on your own conversation and goal. Previous attempts stay in your history.</p></section>

      <section className="method-section" id="methodology" aria-labelledby="method-title"><div className="container method-layout"><h2 id="method-title">Give yourself<br />a second<br /><span>first try.</span></h2><div className="method-copy"><p className="method-lead">Knowing your answer is one thing.<br />Saying it under pressure is another.</p><p>Oitu brings guided rehearsal and gradual exposure to pressure into a repeatable practice. Start at a comfortable level, get help in the moment, and revisit the same conversation with a different response.</p><ul className="method-principles"><li>Pressure you choose</li><li>Space to pause</li><li>Another attempt</li></ul><p className="research-note">Methodology background: <a href="https://www.nimh.nih.gov/health/topics/psychotherapies" target="_blank" rel="noopener noreferrer">guided practice</a> and <a href="https://www.ptsd.va.gov/apps/decisionaid/resources/PTSDDecisionAidSIT.pdf" target="_blank" rel="noopener noreferrer">stress inoculation training</a>.</p></div></div></section>

      <section className="section container scenarios-section" id="scenarios" aria-labelledby="scenarios-title"><h2 id="scenarios-title">You know the conversation.</h2><p className="section-intro">Start with a familiar situation, or bring the one that’s on your mind.</p><div className="scenario-list">{scenarios.map(item => <details className="scenario-item" name="scenarios" key={item.id} open={item.id === 'work'}><summary><h3>{item.title}</h3><span className="scenario-context">{item.context}</span><svg className="scenario-toggle" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-7-7v14" stroke="currentColor" strokeWidth="1.5" /></svg></summary><div className="scenario-detail"><blockquote>{item.quote}</blockquote><p>{item.goal}</p></div></details>)}</div><div className="custom-scenario"><div><h3>Your situation belongs here, too.</h3><p>Describe it by text or voice. Prepare the roles, the goal and how much pressure you want to practise with.</p></div><TelegramLink /></div></section>

      <section className="section languages-section" id="languages" aria-labelledby="languages-title"><div className="container"><div className="language-heading"><h2 id="languages-title">The same boundary.<br />In your own language.</h2><p>Duty, loyalty, an appeal to the team. Pressure speaks differently in every relationship. Practise with words that fit yours.</p></div><LanguageExample /><div className="language-footnote"><p>Six languages, including Arabic. Choose your interface and practice language independently.</p><span>Illustrative language examples</span></div></div></section>

      <section className="section container technology-section" id="technology" aria-labelledby="tech-title"><div className="technology-heading"><h2 id="tech-title">A voice with intention.<br />A conversation with depth.</h2><p>Oitu is the flagship product of <strong>Nomigen</strong>, our AI voice simulation platform. A multi-stage pipeline gives every reply room to be understood, reviewed and brought to life.</p></div><ol className="engine-flow" aria-label="From your voice to the next reply">{engineStages.map((stage, index) => <li className="engine-stage" key={stage.title}><div className="engine-stage-name"><span className="engine-step" aria-hidden="true">0{index + 1}</span><h3>{stage.title}</h3></div><p>{stage.description}</p><span className="engine-owner">{stage.owner}</span></li>)}</ol><div className="architecture-note"><strong>Built with ElevenLabs.</strong><p>Turn-based voice gives Nomigen room to reason, review and direct every response. Language-agnostic English emotional directions and native acoustic scenes make the exchange expressive in all six languages.</p></div><div className="team-section" id="team"><div className="team-heading"><h3>Human experience.<br />Serious engineering.</h3><p>The team behind Nomigen brings experience in demanding systems to a more human skill.</p></div><div className="team-grid">{team.map(member => <article className="team-member" key={member.name}><h4>{member.name}</h4><span className="team-role">{member.role}</span><p>{member.bio}</p></article>)}</div></div></section>

      <section className="section roadmap-section" id="roadmap" aria-labelledby="roadmap-title"><div className="container"><h2 id="roadmap-title">A first step.<br />A bigger conversation.</h2><p className="section-intro">Live in Private Alpha with early testers. Building a voice platform for the conversations that matter.</p><ol className="roadmap-list">{roadmap.map((item, index) => <li className="roadmap-item" key={item.title}><h3>{item.title}</h3><span className={`roadmap-status${index === 0 ? ' roadmap-status-live' : ''}`}>{item.status}</span><p>{item.description}</p></li>)}</ol><div className="closing"><div><h3>Bring the conversation.<br /><span>Find your words.</span></h3><TelegramLink /></div><div className="contact"><p>Building in voice?<br />Let’s talk.</p><a href={CONTACT}>founder@nomigen.com</a><span>Partnerships, research and early access</span></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><Brand /><p>Nomigen builds AI voice simulations.<br />Oitu makes them a place to practise.</p><nav aria-label="Footer"><a href={TELEGRAM} target="_blank" rel="noopener noreferrer">Telegram</a><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms of Use</a></nav></div><p className="compliance">Designed exclusively for adult learners (18+). Not a substitute for clinical therapy or medical advice.</p></div></footer>
  </>
}
