import { useEffect, useRef, useState } from 'react'

type AudioState = 'checking' | 'ready' | 'starting' | 'playing' | 'ended' | 'unavailable'
type AudioPreviewProps = { source: string; title: string; label: string; compact?: boolean }
let activeAudio: HTMLAudioElement | null = null

function time(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00'
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`
}

export function AudioPreview({ source, title, label, compact = false }: AudioPreviewProps) {
  const audio = useRef<HTMLAudioElement>(null)
  const operation = useRef(0)
  const mounted = useRef(false)
  const [state, setState] = useState<AudioState>('checking')
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    mounted.current = true
    const controller = new AbortController()
    const element = audio.current
    setState('checking')
    setDuration(0)
    setPosition(0)
    fetch(source, { method: 'HEAD', signal: controller.signal })
      .then(response => {
        if (!mounted.current || controller.signal.aborted) return
        if (!response.ok || !/^audio\//i.test(response.headers.get('content-type') ?? '') || !element) {
          setState('unavailable')
          return
        }
        element.src = source
        element.load()
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
      if (activeAudio === element) activeAudio = null
    }
  }, [source])

  async function toggle() {
    const element = audio.current
    if (!element || state === 'unavailable' || state === 'checking') return
    const request = ++operation.current
    if (!element.paused) {
      element.pause()
      setState('ready')
      return
    }
    if (activeAudio && activeAudio !== element) activeAudio.pause()
    activeAudio = element
    if (element.ended) element.currentTime = 0
    setState('starting')
    try {
      await element.play()
      if (mounted.current && request === operation.current) setState('playing')
    } catch (error) {
      if (!mounted.current || request !== operation.current) return
      setState(error instanceof DOMException && (error.name === 'NotAllowedError' || error.name === 'AbortError') ? 'ready' : 'unavailable')
    }
  }

  const playing = state === 'playing' || state === 'starting'
  const unavailable = state === 'unavailable'
  const status = unavailable ? 'Audio unavailable. Read the example transcript.' : state === 'checking' ? 'Loading audio…' : state === 'starting' ? 'Loading playback…' : state === 'playing' ? 'Playing' : state === 'ended' ? 'Finished. Play again.' : 'Ready to listen'

  return <div className={`audio-player${compact ? ' audio-player-compact' : ''}`}>
    <div className="audio-player-main">
      <button className="audio-button" type="button" onClick={toggle} disabled={unavailable || state === 'checking'} aria-label={`${playing ? 'Pause' : state === 'ended' ? 'Replay' : 'Play'} ${label}`}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">{playing ? <><rect x="5" y="4" width="3" height="12" rx="1" /><rect x="12" y="4" width="3" height="12" rx="1" /></> : <path d="M6 3.8c0-.7.8-1.1 1.4-.7l10 6.2a.8.8 0 0 1 0 1.4l-10 6.2c-.6.4-1.4 0-1.4-.7V3.8Z" />}</svg>
      </button>
      <div className="audio-copy"><span className="audio-title">{title}</span><span className="audio-status" role="status">{status}</span></div>
      <span className="audio-time" aria-label={`${time(position)} of ${time(duration)}`}>{duration > 0 ? `${time(position)} / ${time(duration)}` : '—:—'}</span>
    </div>
    {!compact && <input className="audio-progress" aria-label={`Playback position for ${label}`} type="range" min="0" max={duration || 1} step="0.1" value={position} disabled={!duration || unavailable} onChange={event => {
      const next = Number(event.target.value)
      if (audio.current) audio.current.currentTime = next
      setPosition(next)
    }} />}
    <audio ref={audio} preload="metadata" onLoadedMetadata={event => {
      setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)
      setState(current => current === 'checking' ? 'ready' : current)
    }} onTimeUpdate={event => setPosition(event.currentTarget.currentTime)} onPlaying={() => setState('playing')} onWaiting={() => setState(current => current === 'playing' ? 'starting' : current)} onEnded={() => { operation.current += 1; setState('ended') }} onPause={() => { operation.current += 1; setState(current => current === 'unavailable' || current === 'checking' || current === 'ended' ? current : 'ready') }} onError={() => { operation.current += 1; setState('unavailable') }} />
  </div>
}
