import { useState } from 'react'
import { AudioPreview } from './components/AudioPreview'
import { Tabs } from './components/Tabs'
import { cultures, hero, practiceBenefits, practiceSteps, principles, roadmap, scenarioCategories, TELEGRAM } from './data/content'

function TelegramLink({ children = 'Try Alpha in Telegram' }: { children?: string }) {
  return <a className="button button-primary" href={TELEGRAM} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">→</span></a>
}
function Brand() {
  return <a className="brand" href="#top" aria-label="Oitu by Nomigen, home">oitu<span className="brand-platform">by Nomigen</span></a>
}

export default function App() {
  const [step, setStep] = useState(0)
  const [category, setCategory] = useState(0)
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" id="top"><div className="container nav-shell"><Brand /><a className="header-link" href="#how-it-works">How it works <span aria-hidden="true">↗</span></a></div></header>
    <main id="main-content">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="alpha-badge">Alpha Live <span aria-hidden="true">•</span> Available in 6 Languages<span className="alpha-languages">EN · ES · DE · AR · PL · RU</span></p>
            <h1 className="hero-title" id="hero-title">{hero.headline}</h1>
            <p className="hero-description">{hero.description}</p><p className="hero-upcoming">{hero.upcoming}</p>
            <div className="hero-actions"><TelegramLink /></div>
            <p className="hero-footnote">Built for adults 18+ | Powered by ElevenLabs expressive voice AI</p><p className="hero-footnote">Free, open alpha · Asynchronous Telegram voice notes</p>
          </div>
          <AudioPreview />
        </div>
      </section>

      <section className="section container" id="how-it-works" aria-labelledby="loop-title">
        <div className="section-heading"><p className="eyebrow">01 / THE PRACTICE LOOP</p><h2 id="loop-title">Hear it. Say it.<br />Hold your ground.</h2><p className="section-intro">Short voice-note exchanges in Telegram. Practice at your own pace, with a hint when you need one.</p></div>
        <div className="benefits-grid">{practiceBenefits.map(item => <article className="benefit-card" key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        <div className="practice-layout">
          <Tabs id="practice" label="Training steps" labels={practiceSteps.map(item => item.title)} selected={step} onSelect={setStep} className="step-tabs" tabClassName="step-tab" numbered vertical />
          {practiceSteps.map((item, index) => <div key={item.title} role="tabpanel" id={`practice-panel-${index}`} aria-labelledby={`practice-tab-${index}`} tabIndex={0} hidden={step !== index} className="example-card">
            <span className="example-label">A practice round / {String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3><p>{item.description}</p>
            <div className={`message-bubble${item.outgoing ? ' message-bubble-user' : ''}`}><span className="message-meta">{item.sender}</span><p>{item.message}</p></div>
            <p className="example-note">{item.note}</p>
          </div>)}
        </div>
      </section>

      <section className="section container" id="scorecard" aria-labelledby="score-title">
        <div className="section-heading"><p className="eyebrow">02 / THE TAKEAWAY</p><h2 id="score-title">Leave with something<br />to work on.</h2><p className="section-intro">After each session, review feedback on your wording and tone. This illustrative scorecard shows the kinds of observations you can practice with.</p></div>
        <div className="scorecard">
          <div className="scorecard-heading"><div><span className="example-label">Example report</span><h3>The weekend overtime request</h3></div><span className="status-badge">Illustrative metrics</span></div>
          <div className="scorecard-grid">
            <article className="score-metric score-metric-primary"><h4>Boundary held</h4><p className="score-value">65<span>%</span></p><p className="score-diagnosis">You declined the overtime, but made unnecessary concessions.</p></article>
            <article className="score-metric"><h4>Vocal stability</h4><p className="score-value">Pitch rise</p><p className="score-diagnosis">Your statement ended like a question. Uptalk and vocal tremor are different signals.</p></article>
            <article className="score-metric"><h4>Apology traps</h4><p className="score-value">3 phrases</p><p className="score-diagnosis">“Sorry”, “unfortunately”, “maybe”. Try a direct answer without softening it.</p></article>
          </div>
          <div className="counter-action"><span className="example-label">Try next / The broken record</span><div><blockquote>“I’m unavailable this weekend. I’ll return to this on Monday at 9.”</blockquote><p>Repeat your boundary calmly, without explaining your personal plans.</p></div></div>
          <p className="example-note">Example debrief design, not an assessment of your voice or a verified production measurement.</p>
        </div>
      </section>

      <section className="section container" id="methodology" aria-labelledby="science-title">
        <div className="section-heading"><p className="eyebrow">03 / WHY REHEARSAL</p><h2 id="science-title">Knowing the words<br />is only the beginning.</h2></div>
        <div className="principles-grid">{principles.map((item, index) => <article className="principle-card" key={item.title}><span className="scenario-number" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        <div className="reading-links"><p>Oitu is a practice tool, not therapy. Background reading: <a href="https://www.nimh.nih.gov/health/topics/psychotherapies" target="_blank" rel="noopener noreferrer">NIMH: psychotherapies ↗</a> · <a href="https://www.ptsd.va.gov/apps/decisionaid/resources/PTSDDecisionAidSIT.pdf" target="_blank" rel="noopener noreferrer">VA: stress inoculation training ↗</a>.</p></div>
      </section>

      <section className="section container" id="scenarios" aria-labelledby="scenarios-title">
        <div className="section-heading"><p className="eyebrow">04 / YOUR NEXT CHALLENGE</p><h2 id="scenarios-title">Real-life pressure.<br />Room to progress.</h2><p className="section-intro">Practice personal and workplace boundaries now. Explore example scenarios and preview the categories coming next.</p></div>
        <Tabs id="catalog" label="Scenario categories" labels={scenarioCategories.map(item => item.status === 'Coming Soon' ? `${item.name} · Coming Soon` : item.name)} selected={category} onSelect={setCategory} className="catalog-tabs" tabClassName="catalog-tab" />
        {scenarioCategories.map((group, index) => <div role="tabpanel" id={`catalog-panel-${index}`} aria-labelledby={`catalog-tab-${index}`} tabIndex={0} hidden={category !== index} className="catalog-panel" key={group.name}>
          <div className="catalog-intro"><span className="status-badge">{group.status}</span><p>{group.description}</p></div>
          {group.scenarios.map(item => <article className="level-row" key={item.name}><span className="level-label">LEVEL {item.level}</span><div className="level-copy"><h3>{item.name}</h3><blockquote>“{item.quote}”</blockquote></div><p className="level-goal">{item.goal}</p></article>)}
        </div>)}
        <div className="section-actions"><TelegramLink>Try Boundary Practice on Telegram</TelegramLink></div>
      </section>

      <section className="section container" id="languages" aria-labelledby="languages-title">
        <div className="section-heading"><p className="eyebrow">05 / CULTURAL FLUENCY</p><h2 id="languages-title">Different words.<br />Familiar pressure.</h2><p className="section-intro">Available now in English, Spanish, German, Arabic, Polish and Russian. Practice with the words and context that fit your situation. Expansion to 70+ languages and automatic language matching are planned.</p></div>
        <div className="culture-grid">{cultures.map(item => <article className="culture-card" key={item.context}><span className="card-label">{item.context}</span><h3>{item.theme}</h3><blockquote>{item.example}</blockquote></article>)}</div>
        <p className="example-note">Illustrative situations, not national traits. Communication varies by person, relationship and setting.</p>
      </section>

      <section className="section container" id="technology" aria-labelledby="tech-title">
        <div className="section-heading"><p className="eyebrow">06 / UNDER THE HOOD</p><h2 id="tech-title">Nomigen is the engine.<br />Oitu is your practice room.</h2><p className="section-intro">Nomigen orchestrates voice simulations. ElevenLabs provides the expressive voice foundation.</p></div>
        <div className="engine-grid">
          <article className="engine-stage"><span className="engine-number">01 / UNDERSTAND</span><h3>Listen for context</h3><p>ElevenLabs transcribes your voice notes. Oitu uses the exchange to provide coaching and post-session feedback on your wording and tone.</p></article>
          <article className="engine-stage"><span className="engine-number">02 / RESPOND</span><h3>Shape the exchange</h3><p>Scenario logic and models accessed through OpenRouter guide the counterpart’s next response and coaching hints.</p></article>
          <article className="engine-stage"><span className="engine-number">03 / VOICE</span><h3>Make it feel real</h3><p>ElevenLabs synthesis adds expression, with voice controls matched to the model’s capabilities.</p></article>
        </div>
        <div className="tech-facts"><p><strong>&lt;500 ms</strong> End-to-end response target for future real-time sessions.</p><p><strong>Synthetic archetypes</strong> Designed characters. No unauthorized cloning of real people.</p></div>
        <p className="engine-note">Voice technology · <a href="https://elevenlabs.io/docs/overview/models" target="_blank" rel="noopener noreferrer">ElevenLabs model capabilities ↗</a></p>
      </section>
    </main>

    <footer className="site-footer" id="roadmap"><div className="container">
      <div className="footer-heading"><p className="eyebrow">07 / WHAT’S NEXT</p><h2>A practice habit today.<br />A bigger voice platform tomorrow.</h2></div>
      <div className="roadmap-grid">{roadmap.map(item => <article className="roadmap-card" key={item.phase}><span className="phase-label">{item.phase}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      <div className="footer-cta"><TelegramLink>Start Your First Practice</TelegramLink><span>Built with ElevenLabs · Grant applicant</span></div>
      <p className="grant-note">Nomigen is applying for an ElevenLabs Startup Grant to develop its voice simulation platform and future real-time practice. A grant has not been awarded.</p>
      <div className="footer-legal"><p className="platform-description">Nomigen — AI Voice Simulation Platform.</p><p>Designed exclusively for adult learners (18+). Not a substitute for clinical therapy or medical advice.</p><nav aria-label="Legal"><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms of Use</a></nav></div>
      <div className="footer-bottom"><Brand /><a href="mailto:founder@nomigen.com">Contact: founder@nomigen.com</a><a href={TELEGRAM} target="_blank" rel="noopener noreferrer">@oitubot ↗</a><a href="https://nomigen.com">nomigen.com</a></div>
    </div></footer>
  </>
}
