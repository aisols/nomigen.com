import { useState } from 'react'
import { AudioPreview } from './components/AudioPreview'
import { Tabs } from './components/Tabs'
import { cultures, hero, practiceBenefits, practiceSteps, principles, roadmap, scenarioCategories, team, TELEGRAM } from './data/content'

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
            <p className="alpha-badge">Private Alpha Live <span aria-hidden="true">•</span> Available in 6 Languages<span className="alpha-languages">EN · ES · DE · AR · PL · RU</span></p>
            <h1 className="hero-title" id="hero-title">{hero.headline}</h1>
            <p className="hero-description">{hero.description}</p><p className="hero-upcoming">{hero.upcoming}</p>
            <div className="hero-actions"><TelegramLink /></div>
            <p className="hero-footnote">Built for adults 18+ · Powered by ElevenLabs expressive voice AI</p>
          </div>
          <AudioPreview />
        </div>
      </section>

      <section className="section container" id="how-it-works" aria-labelledby="loop-title">
        <div className="section-heading"><p className="eyebrow">01 / THE PRACTICE LOOP</p><h2 id="loop-title">Hear it. Say it.<br />Hold your ground.</h2><p className="section-intro">Turn-based voice exchanges in Telegram. Practice at a psychologically safe pace, with contextual hints and deep analysis on every turn.</p></div>
        <div className="benefits-grid">{practiceBenefits.map(item => <article className="benefit-card" key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        <div className="practice-layout">
          <Tabs id="practice" label="Training steps" labels={practiceSteps.map(item => item.title)} selected={step} onSelect={setStep} className="step-tabs" tabClassName="step-tab" numbered vertical />
          {practiceSteps.map((item, index) => <div key={item.title} role="tabpanel" id={`practice-panel-${index}`} aria-labelledby={`practice-tab-${index}`} tabIndex={0} hidden={step !== index} className="example-card">
            <span className="example-label">Illustrative practice round / {String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3><p>{item.description}</p>
            <div className={`message-bubble${item.outgoing ? ' message-bubble-user' : ''}`}><span className="message-meta">{item.sender}</span><p>{item.message}</p></div>
            <p className="example-note">{item.note}</p>
          </div>)}
        </div>
      </section>

      <section className="section container" id="scorecard" aria-labelledby="score-title">
        <div className="section-heading"><p className="eyebrow">02 / THE TAKEAWAY</p><h2 id="score-title">Leave with something<br />to work on.</h2><p className="section-intro">After each session, review structured feedback on your wording, confidence and conflict dynamics—catching where you held firm and where you accidentally triggered pushback.</p></div>
        <div className="scorecard">
          <div className="scorecard-heading"><div><span className="example-label">Illustrative post-session breakdown</span><h3>The weekend overtime request</h3></div><span className="status-badge">Behavioral & vocal analysis</span></div>
          <div className="scorecard-grid">
            <article className="score-metric score-metric-primary"><h4>Boundary held</h4><p className="score-value">65<span>%</span></p><p className="score-diagnosis">You declined the Saturday shift, but over-explained your personal reasons.</p></article>
            <article className="score-metric"><h4>Escalation risk</h4><p className="score-value">1 trigger</p><p className="score-diagnosis">Saying “Why is poor planning my problem?” shifted the exchange from a firm refusal into personal conflict.</p></article>
            <article className="score-metric"><h4>Apology traps</h4><p className="score-value">3 phrases</p><p className="score-diagnosis">“Sorry”, “unfortunately”, “maybe”. State your boundary directly without softening it.</p></article>
          </div>
          <div className="counter-action"><span className="example-label">Try next / De-escalate & hold</span><div><blockquote>“I’m unavailable this weekend. I’ll prioritize this first thing Monday at 9 AM.”</blockquote><p>Acknowledge the task calmly and lock in your boundary without defensive counter-attacks.</p></div></div>
        </div>
      </section>

      <section className="section container" id="methodology" aria-labelledby="science-title">
        <div className="section-heading"><p className="eyebrow">03 / WHY REHEARSAL</p><h2 id="science-title">Knowing the words<br />is only the beginning.</h2></div>
        <div className="principles-grid">{principles.map((item, index) => <article className="principle-card" key={item.title}><span className="scenario-number" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        <div className="reading-links"><p>Oitu is a communication practice tool, not clinical therapy. Background reading: <a href="https://www.nimh.nih.gov/health/topics/psychotherapies" target="_blank" rel="noopener noreferrer">NIMH: psychotherapies ↗</a> · <a href="https://www.ptsd.va.gov/apps/decisionaid/resources/PTSDDecisionAidSIT.pdf" target="_blank" rel="noopener noreferrer">VA: stress inoculation training ↗</a>.</p></div>
      </section>

      <section className="section container" id="scenarios" aria-labelledby="scenarios-title">
        <div className="section-heading"><p className="eyebrow">04 / YOUR NEXT CHALLENGE</p><h2 id="scenarios-title">Real-life pressure.<br />Room to progress.</h2><p className="section-intro">Practice personal and workplace boundaries today, or create your own custom scenario. Preview upcoming modules in negotiation and dating confidence.</p></div>
        <Tabs id="catalog" label="Scenario categories" labels={scenarioCategories.map(item => item.status === 'Coming Soon' ? `${item.name} · Coming Soon` : item.name)} selected={category} onSelect={setCategory} className="catalog-tabs" tabClassName="catalog-tab" />
        {scenarioCategories.map((group, index) => <div role="tabpanel" id={`catalog-panel-${index}`} aria-labelledby={`catalog-tab-${index}`} tabIndex={0} hidden={category !== index} className="catalog-panel" key={group.name}>
          <div className="catalog-intro"><span className="status-badge">{group.status}</span><p>{group.description}</p></div>
          {group.scenarios.map(item => <article className="level-row" key={item.name}><span className="level-label">LEVEL {item.level}</span><div className="level-copy"><h3>{item.name}</h3><blockquote>“{item.quote}”</blockquote></div><p className="level-goal">{item.goal}</p></article>)}
        </div>)}
        <div className="section-actions"><TelegramLink>Try Boundary Practice on Telegram</TelegramLink></div>
      </section>

      <section className="section container" id="languages" aria-labelledby="languages-title">
        <div className="section-heading"><p className="eyebrow">05 / CULTURAL FLUENCY</p><h2 id="languages-title">Different words.<br />Familiar pressure.</h2><p className="section-intro">Live across 6 languages spanning four language groups (English, Spanish, German, Arabic, Polish and Russian). Our language-agnostic directing pipeline adapts interpersonal pressure to local cultural norms and scales rapidly to new locales.</p></div>
        <div className="culture-grid">{cultures.map(item => <article className="culture-card" key={item.context}><span className="card-label">{item.context}</span><h3>{item.theme}</h3><blockquote>{item.example}</blockquote></article>)}</div>
      </section>

      <section className="section container" id="technology" aria-labelledby="tech-title">
        <div className="section-heading"><p className="eyebrow">06 / UNDER THE HOOD</p><h2 id="tech-title">Nomigen is the engine.<br />Oitu is your practice room.</h2><p className="section-intro">A custom multi-stage dialogue pipeline powered by ElevenLabs expressive synthesis and multilingual transcription.</p></div>
        <div className="engine-grid">
          <article className="engine-stage"><span className="engine-number">01 / MULTILINGUAL STT</span><h3>Listen & classify</h3><p>ElevenLabs Scribe v2 transcribes voice input across all 6 supported languages while our classifier evaluates intent, tone and boundary firmness.</p></article>
          <article className="engine-stage"><span className="engine-number">02 / DIALOGUE & DIRECTING</span><h3>Shape the response</h3><p>Culturally adapted LLM stages generate and validate character pushback, then inject standardized English emotional delivery cues.</p></article>
          <article className="engine-stage"><span className="engine-number">03 / EXPRESSIVE VOICE</span><h3>Make it feel real</h3><p>ElevenLabs v4 (Text to Dialogue API) renders nuanced vocal dynamics—hesitation, irritation or warmth—layered with native acoustic scene effects.</p></article>
        </div>
        <div className="tech-facts"><p><strong>Multi-stage pipeline</strong> Input classification, dialogue validation & automated speech directing.</p><p><strong>Privacy & ethics</strong> Synthetic behavioral archetypes with PII protection. No unauthorized voice cloning.</p></div>
        <div className="team-grid">
          {team.map(member => <article className="team-card" key={member.name}><span className="card-label">{member.role}</span><h3>{member.name}</h3><p>{member.bio}</p></article>)}
        </div>
      </section>
    </main>

    <footer className="site-footer" id="roadmap"><div className="container">
      <div className="footer-heading"><p className="eyebrow">07 / WHAT’S NEXT</p><h2>A practice habit today.<br />A real-time voice platform tomorrow.</h2></div>
      <div className="roadmap-grid">{roadmap.map(item => <article className="roadmap-card" key={item.phase}><span className="phase-label">{item.phase}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      <div className="footer-cta"><TelegramLink>Start Your First Practice</TelegramLink><span>Powered by ElevenLabs Voice AI</span></div>
      <div className="footer-legal"><p className="platform-description">Nomigen — AI Voice Simulation Platform (creator of Oitu).</p><p>Designed exclusively for adult learners (18+). Not a substitute for clinical therapy or medical advice.</p><nav aria-label="Legal"><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms of Use</a></nav></div>
      <div className="footer-bottom"><Brand /><a href="mailto:founder@nomigen.com">Contact: founder@nomigen.com</a><a href={TELEGRAM} target="_blank" rel="noopener noreferrer">@oitubot ↗</a><a href="https://nomigen.com">nomigen.com</a></div>
    </div></footer>
  </>
}
