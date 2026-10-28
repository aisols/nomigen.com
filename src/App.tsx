import { useEffect, useRef, useState } from 'react'
import { AudioPreview } from './components/AudioPreview'
import { Tabs } from './components/Tabs'
import { CONTACT, TELEGRAM, engineStages, hero, languages, practice, practiceSteps, pressureLevels, roadmap, scenarios, team } from './data/content'
import type { DialogueLine } from './data/content'

function TelegramLink({ small = false }: { small?: boolean }) {
  return <a className={`button button-primary${small ? ' button-small' : ''}`} href={TELEGRAM} target="_blank" rel="noopener noreferrer">Open Oitu in Telegram<svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 16 12-12M5 4h11v11" stroke="currentColor" strokeWidth="1.5" /></svg></a>
}

function Brand() {
  return <a className="brand" href="#top" aria-label="Oitu by Nomigen, home"><span className="brand-name">oitu</span><span className="brand-platform">by Nomigen</span></a>
}

function Message({ line, quiet = false }: { line: DialogueLine; quiet?: boolean }) {
  return <div className={`conversation-message ${line.speaker === 'You' ? 'message-you' : 'message-manager'}${quiet ? ' message-quiet' : ''}`}><span className="message-speaker">{line.speaker}</span><p>{line.text}</p></div>
}

function PracticeDemo() {
  const [step, setStep] = useState(0)
  const [pressure, setPressure] = useState(1)
  const [hint, setHint] = useState(false)
  const focusNextPanel = useRef(false)
  const changeStep = (next: number, focusPanel = false) => {
    focusNextPanel.current = focusPanel
    setStep(next)
    setHint(false)
  }
  useEffect(() => {
    if (focusNextPanel.current) {
      document.getElementById(`practice-panel-${step}`)?.focus()
      focusNextPanel.current = false
    }
  }, [step])
  return <div className="practice-demo">
    <Tabs id="practice" label="Explore an example practice" labels={practiceSteps.map(item => item.title)} selected={step} onSelect={changeStep} className="practice-tabs" tabClassName="practice-tab" numbered />
    {practiceSteps.map((item, index) => <div key={item.title} id={`practice-panel-${index}`} role="tabpanel" aria-labelledby={`practice-tab-${index}`} hidden={step !== index} tabIndex={0} className="practice-panel">
      <div className="practice-guide"><p className="example-label">Example practice</p><h3>{item.heading}</h3><p>{item.description}</p>
        <div className="practice-step-actions">{index < 3 ? <button className="text-button" type="button" onClick={() => changeStep(index + 1, true)}>Continue to {practiceSteps[index + 1].title.toLowerCase()}<span aria-hidden="true">→</span></button> : <button className="text-button" type="button" onClick={() => { changeStep(0, true); setPressure(1) }}>Explore the example again<span aria-hidden="true">↺</span></button>}</div>
      </div>
      <div className="practice-scene">
        {index === 0 && <div className="setup-example"><span className="scene-caption">Your situation, in your words</span><blockquote>“{practice.situation}”</blockquote><dl className="setup-facts"><div><dt>You</dt><dd>An employee keeping their weekend free</dd></div><div><dt>Your counterpart</dt><dd>A manager with an urgent request</dd></div></dl><fieldset className="pressure-picker"><legend>Explore the pressure levels</legend><div className="pressure-options">{pressureLevels.map((level, levelIndex) => <button type="button" key={level.name} aria-pressed={pressure === levelIndex} onClick={() => setPressure(levelIndex)}>{level.name}</button>)}</div><p aria-live="polite">{pressureLevels[pressure].description}</p></fieldset></div>}
        {index === 1 && <div className="conversation-stack"><span className="scene-caption">A reply can change the direction</span>{practice.dialogue.slice(0, 3).map((line, i) => <Message line={line} key={i} />)}</div>}
        {index === 2 && <div className="conversation-stack"><span className="scene-caption">Continue the same conversation</span><Message line={practice.dialogue[2]} /><button className="hint-button" type="button" aria-expanded={hint} aria-controls="practice-coaching-hint" onClick={() => setHint(!hint)}>{hint ? 'Hide the coaching hint' : 'I’m stuck. Show a coaching hint'}<span aria-hidden="true">{hint ? '−' : '+'}</span></button><div className="coach-hint" id="practice-coaching-hint" role="status" hidden={!hint}><span className="message-speaker">Oitu’s coaching hint</span><p>{practice.hint}</p><blockquote>“{practice.suggestedReply}”</blockquote><span className="hint-explanation">Try these words, or answer in your own way.</span></div><Message line={practice.dialogue[3]} /><Message line={practice.dialogue[4]} /></div>}
        {index === 3 && <div className="conversation-stack"><span className="scene-caption">Same boundary. A different ending.</span><Message line={practice.dialogue[5]} /><Message line={practice.dialogue[6]} /><div className="scene-takeaway"><span className="message-speaker">What changed</span><p>You acknowledged the pressure without changing your answer.</p><a className="inline-link" href="#scorecard">See the example debrief</a></div></div>}
      </div>
    </div>)}
    <div className="practice-listening"><div className="listening-intro"><h3>Hear the whole exchange.</h3><p>An illustrative session with synthetic voices.</p></div><div className="listening-player"><AudioPreview source={practice.source} title="Listen to the example conversation" label="example conversation" /><details className="transcript"><summary>Read the full transcript</summary><ol>{practice.dialogue.map((line, index) => <li key={index}><strong>{line.speaker}</strong><p>{line.text}</p></li>)}</ol><p className="transcript-note">Coaching hint between replies: “{practice.hint}” The hint is shown in text and is not part of the recording.</p></details></div></div>
  </div>
}

function LanguageExample() {
  const [language, setLanguage] = useState(0)
  return <div className="language-demo"><Tabs id="language" label="Example language" labels={languages.map(item => item.name)} selected={language} onSelect={setLanguage} className="language-tabs" tabClassName="language-tab" />{languages.map((item, index) => <div key={item.code} id={`language-panel-${index}`} role="tabpanel" aria-labelledby={`language-tab-${index}`} hidden={language !== index} tabIndex={0} className="language-example"><div><span className="scene-caption">An appeal to the team</span><blockquote className="language-pressure" lang={item.lang} dir={item.dir}>{item.pressure}</blockquote></div><div className="language-answer"><span className="scene-caption">Your boundary stays yours</span><blockquote lang={item.lang} dir={item.dir}>{item.response}</blockquote>{item.code !== 'en' && <p className="translation"><span>In English</span>{item.translation}</p>}</div></div>)}</div>
}

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" id="top"><div className="container nav-shell"><Brand /><nav className="main-nav" aria-label="Main navigation"><a href="#practice">Practice</a><a href="#technology">Technology</a><a href="#team">Team</a></nav><div className="header-action"><TelegramLink small /></div></div></header>
    <main id="main-content">
      <section className="hero container" aria-labelledby="hero-title"><div className="hero-copy"><div className="availability"><span aria-hidden="true" />Live in Private Alpha</div><h1 id="hero-title">{hero.headline}</h1><p className="hero-description">{hero.description}</p><div className="hero-actions"><TelegramLink /><a className="hero-secondary" href="#practice">See a practice round</a></div><p className="hero-note">Voice practice in Telegram. Available in six languages.</p></div>
        <div className="hero-stage"><div className="hero-stage-heading"><span>That conversation on your mind</span><span className="scene-type">Workplace boundaries</span></div><div className="hero-dialogue"><div className="hero-manager"><span className="message-speaker">Your manager</span><blockquote>“{practice.dialogue[0].text}”</blockquote></div><div className="hero-response"><span className="message-speaker">You, with a little practice</span><blockquote>“{practice.suggestedReply}”</blockquote></div></div><AudioPreview source={practice.openingSource} title="Hear the opening line" label="opening line" compact /><p className="hero-example-note">Example conversation, voiced with ElevenLabs.</p></div>
      </section>

      <section className="section practice-section" id="practice" aria-labelledby="practice-title"><div className="container"><div className="section-heading split-heading"><h2 id="practice-title">The words get easier<br />when you’ve said them before.</h2><p>Set the scene. Hear the pushback. Find your response.<br className="desktop-break" /> Every turn gives you room to think and practise.</p></div><PracticeDemo /></div></section>

      <section className="section container debrief-section" id="scorecard" aria-labelledby="score-title"><div className="debrief-heading"><div><p className="example-label">After the conversation</p><h2 id="score-title">Know what to keep.<br />See what to change.</h2></div><p>A useful debrief connects your words to what happened next. Here’s the breakdown of the example above.</p></div><div className="debrief-body"><div className="debrief-evidence"><article className="evidence-row"><span className="evidence-label">The moment that escalated</span><blockquote>“{practice.dialogue[1].text}”</blockquote><p>The accusation shifted the conversation from your availability to your tone.</p></article><article className="evidence-row"><span className="evidence-label">The boundary you held</span><blockquote>“{practice.dialogue[5].text}”</blockquote><p>You acknowledged the request, repeated your answer and kept your weekend free.</p></article></div><aside className="next-attempt"><span className="next-attempt-icon" aria-hidden="true">↻</span><p className="example-label">Your next attempt</p><h3>Keep the boundary.<br />Leave out the blame.</h3><blockquote>“{practice.suggestedReply}”</blockquote><p>A clear refusal is enough. You don’t have to trade away another part of your time.</p><a className="inline-link" href="#practice">Back to the practice example</a></aside></div><p className="debrief-caption">Illustrative debrief. In Oitu, your feedback draws on your own conversation and goal. Previous attempts stay in your history.</p></section>

      <section className="method-section" id="methodology" aria-labelledby="method-title"><div className="container method-layout"><div><p className="example-label">Why rehearse?</p><h2 id="method-title">Give yourself<br />a second first try.</h2></div><div className="method-copy"><p className="method-lead">It’s one thing to know your answer. It’s another to say it when someone pushes back.</p><p>Oitu brings guided rehearsal and gradual exposure to pressure into a repeatable practice. Start at a comfortable level, get help in the moment, and revisit the same conversation with a different response.</p><div className="method-principles"><span>Pressure you choose</span><span>Space to pause</span><span>Another attempt</span></div><p className="research-note">Methodology background: <a href="https://www.nimh.nih.gov/health/topics/psychotherapies" target="_blank" rel="noopener noreferrer">guided practice</a> and <a href="https://www.ptsd.va.gov/apps/decisionaid/resources/PTSDDecisionAidSIT.pdf" target="_blank" rel="noopener noreferrer">stress inoculation training</a>.</p></div></div></section>

      <section className="section container" id="scenarios" aria-labelledby="scenarios-title"><div className="section-heading split-heading"><h2 id="scenarios-title">Which conversation<br />do you want to practise?</h2><p>Start with a familiar situation, or bring the one that’s on your mind. Choose the pressure before every attempt.</p></div><div className="scenario-list">{scenarios.map(item => <article className="scenario-row" key={item.id}><span className="scenario-context">{item.context}</span><div><h3>{item.title}</h3><p>{item.goal}</p></div><blockquote>{item.quote}</blockquote></article>)}</div><div className="custom-scenario"><div><span className="custom-icon" aria-hidden="true">+</span><h3>Your situation belongs here, too.</h3><p>Describe it by text or voice. Oitu helps prepare the roles, the goal and the conversation you want to have.</p></div><TelegramLink /></div></section>

      <section className="section languages-section" id="languages" aria-labelledby="languages-title"><div className="container"><div className="section-heading split-heading"><h2 id="languages-title">Practise in the language<br />of the conversation.</h2><p>Pressure can arrive as duty, loyalty or an appeal to the team. Rehearse the situation in your language, with words that fit the relationship.</p></div><LanguageExample /><div className="language-footnote"><p>Six languages, including Arabic. Choose your interface and practice language independently.</p><span>Illustrative language examples</span></div></div></section>

      <section className="section container technology-section" id="technology" aria-labelledby="tech-title"><div className="technology-heading"><div><p className="example-label">Built by Nomigen</p><h2 id="tech-title">A voice with intention.<br />A conversation with depth.</h2></div><p>Oitu is the flagship product of Nomigen, our AI voice simulation platform. A multi-stage pipeline shapes each reply before you hear it.</p></div><div className="engine-flow" aria-label="From your voice to the next reply">{engineStages.map((stage, index) => <article className="engine-stage" key={stage.title}><div className="engine-stage-top"><span className="engine-step">{index + 1}</span>{index < engineStages.length - 1 && <span className="engine-connector" aria-hidden="true">→</span>}</div><h3>{stage.title}</h3><p>{stage.description}</p><span className="engine-owner">{stage.owner}</span></article>)}</div><div className="architecture-note"><span className="voice-mark" aria-hidden="true"><i /><i /><i /><i /></span><p><strong>Built with ElevenLabs.</strong> Turn-based voice gives Nomigen room to reason, review and direct every response. Language-agnostic emotional directions and native acoustic scenes bring that response to life.</p></div><div className="team-section" id="team"><div className="team-heading"><h3>Built for the conversation.<br />Engineered for what comes next.</h3><p>Experience in demanding systems, applied to a more human skill.</p></div><div className="team-grid">{team.map(member => <article className="team-member" key={member.name}><div className="team-monogram" aria-hidden="true">{member.initials}</div><div><h4>{member.name}</h4><span className="team-role">{member.role}</span><p>{member.bio}</p></div></article>)}</div></div></section>

      <section className="section roadmap-section" id="roadmap" aria-labelledby="roadmap-title"><div className="container"><div className="section-heading split-heading"><h2 id="roadmap-title">A practice you can start today.<br />More room to grow.</h2><p>Live in Private Alpha with early testers. Building towards a voice platform for the conversations that matter.</p></div><div className="roadmap-list">{roadmap.map((item, index) => <article className="roadmap-item" key={item.title}><span className={`roadmap-status${index === 0 ? ' roadmap-status-live' : ''}`}>{item.status}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="closing"><div><h3>Bring the conversation.<br />Find your way through it.</h3><TelegramLink /></div><div className="contact"><p>Building in voice?<br />Let’s talk.</p><a href={CONTACT}>founder@nomigen.com</a><span>Partnerships, research and early access</span></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><Brand /><p>Nomigen builds AI voice simulations.<br />Oitu makes them a place to practise.</p><nav aria-label="Footer"><a href={TELEGRAM} target="_blank" rel="noopener noreferrer">Telegram</a><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms of Use</a></nav></div><p className="compliance">Designed exclusively for adult learners (18+). Not a substitute for clinical therapy or medical advice.</p></div></footer>
  </>
}
