import { useEffect, useRef, useState } from 'react'
import { Award, BookOpen, Target } from 'lucide-react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'

function AnimatedNumber({ value, suffix = '' }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduceMotion) {
      setDisplay(value)
      return undefined
    }

    const controls = animate(0, value, {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, value, reduceMotion])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function CertificateStats({
  certificateCount,
  learningAreas,
  careerFocus,
}) {
  const cards = [
    {
      icon: Award,
      label: 'Certifications',
      value: certificateCount,
      detail: 'Industry credentials & learning paths',
      list: null,
    },
    {
      icon: BookOpen,
      label: 'Learning Areas',
      value: learningAreas.length,
      detail: null,
      list: learningAreas,
    },
    {
      icon: Target,
      label: 'Career Focus',
      value: careerFocus.length,
      detail: null,
      list: careerFocus,
    },
  ]

  return (
    <div className="mb-14 grid gap-4 sm:mb-16 sm:grid-cols-3 sm:gap-5">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <Reveal key={card.label} delay={index * 0.06}>
            <article className="glass-card h-full rounded-2xl p-6 hover:-translate-y-1 sm:p-7">
              <div className="mb-5 inline-flex size-10 items-center justify-center rounded-full border border-line/80 bg-[var(--glass-bg)] text-ink backdrop-blur-sm">
                <Icon className="size-4" aria-hidden />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {card.label}
              </p>
              <p className="mt-3.5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                <AnimatedNumber value={card.value} />
              </p>
              {card.detail && (
                <p className="mt-3.5 text-sm leading-relaxed text-muted">{card.detail}</p>
              )}
              {card.list && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {card.list.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line/80 bg-[var(--glass-bg)] px-2.5 py-1 text-[11px] text-ink-soft backdrop-blur-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
