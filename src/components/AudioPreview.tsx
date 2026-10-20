import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { preview } from '../data/content'

type AudioState = 'checking' | 'ready' | 'starting' | 'playing' | 'unavailable'
const bars = [12, 20, 14, 30, 42, 24, 48, 34, 22, 42, 54, 30, 18, 38, 46, 26, 14, 34, 48, 26, 40, 18, 30, 12]

export function AudioPreview() {
  const audio = useRef<HTMLAudioElement>(null)
  const operation = useRef(0)
  const mounted = useRef(false)
  const [state, setState] = useState<AudioState>('checking')

  useEffect(() => {
    mounted.current = true
    const controller = new AbortController()
    const element = audio.current
    fetch(preview.source, { method: 'HEAD', signal: controller.signal })
      .then(response => {
        if (!mounted.current || controller.signal.aborted) return
        const available = response.ok && /^audio\//i.test(response.headers.get('content-type') ?? '')
        if (available && element) element.src = preview.source
        setState(available ? 'ready' : 'unavailable')
      })
      .catch(() => {
        if (mounted.current && !controller.signal.aborted) setState('unavailable')
      })
    return () => {
      mounted.current = false
      operation.current += 1
      controller.abort()
      element?.pause()
      element?.removeAttribute('src')
      element?.load()
    }
  }, [])

  async function toggle() {
    const element = audio.current
    if (!element || state === 'unavailable' || state === 'checking' || state === 'starting') return
    const request = ++operation.current
    if (state === 'playing') {
      element.pause()
      setState('ready')
      return
    }
    setState('starting')
    try {
      if (element.ended) element.currentTime = 0
      await element.play()
      if (mounted.current && request === operation.current) setState('playing')
    } catch (error) {
      if (!mounted.current || request !== operation.current) return
      setState(error instanceof DOMException && error.name === 'NotAllowedError' ? 'ready' : 'unavailable')
    }
  }

  const unavailable = state === 'unavailable'
  const playing = state === 'playing'
  return <aside className={`audio-preview${playing ? ' is-playing' : ''}`} aria-label="Confrontation audio preview">
    <span className="audio-preview-label">A moment you might recognize</span>
    <blockquote className="audio-preview-quote">“{preview.quote}”</blockquote>
    <div className="audio-controls">
      <button className="audio-play" type="button" onClick={toggle} disabled={unavailable || state === 'checking' || state === 'starting'} aria-label={playing ? 'Pause preview' : 'Play confrontation preview'}>
        <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
      </button>
      <div className="audio-wave" aria-hidden="true">{bars.map((height, index) => <span key={index} style={{ '--bar-height': `${height}px`, '--bar-delay': `${index * -0.09}s` } as CSSProperties} />)}</div>
    </div>
    <div className="audio-preview-footer"><span className="audio-status" role="status">{unavailable ? 'Audio preview coming soon' : state === 'checking' ? 'Checking audio preview…' : state === 'starting' ? 'Loading preview…' : playing ? 'Playing preview' : 'Listen to confrontation preview'}</span><span>Synthetic boss</span></div>
    <audio ref={audio} preload="none" onEnded={() => { operation.current += 1; setState('ready') }} onPause={() => setState(current => current === 'playing' ? 'ready' : current)} onError={() => { operation.current += 1; setState('unavailable') }} />
  </aside>
}
