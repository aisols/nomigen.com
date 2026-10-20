import { useRef } from 'react'
import type { KeyboardEvent } from 'react'

type TabsProps = {
  id: string
  label: string
  labels: string[]
  selected: number
  onSelect: (index: number) => void
  className: string
  tabClassName: string
  numbered?: boolean
  vertical?: boolean
}

export function Tabs({ id, label, labels, selected, onSelect, className, tabClassName, numbered, vertical }: TabsProps) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index
    if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = labels.length - 1
    else if (event.key === 'ArrowRight' || (vertical && event.key === 'ArrowDown')) next = (index + 1) % labels.length
    else if (event.key === 'ArrowLeft' || (vertical && event.key === 'ArrowUp')) next = (index - 1 + labels.length) % labels.length
    else return
    event.preventDefault()
    onSelect(next)
    buttons.current[next]?.focus()
  }
  return <div className={className} role="tablist" aria-label={label} aria-orientation={vertical ? 'vertical' : 'horizontal'}>
    {labels.map((title, index) => <button
      type="button"
      role="tab"
      id={`${id}-tab-${index}`}
      aria-controls={`${id}-panel-${index}`}
      aria-selected={selected === index}
      tabIndex={selected === index ? 0 : -1}
      className={tabClassName}
      key={title}
      ref={element => { buttons.current[index] = element }}
      onClick={() => onSelect(index)}
      onKeyDown={event => navigate(event, index)}
    >{numbered && <span className="step-number" aria-hidden="true">0{index + 1}</span>}<span>{title}</span></button>)}
  </div>
}
