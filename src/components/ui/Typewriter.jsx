import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Typewriter that cycles roles forever.
 * Each role is typed, held for holdMs, then deleted.
 * Target cadence: ~2s visible hold after typing completes.
 */
export default function Typewriter({
  words = [],
  typingSpeed = 45,
  deletingSpeed = 28,
  holdMs = 2000,
  className = '',
}) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return undefined

    if (reduceMotion) {
      setText(words[0])
      const id = setInterval(() => {
        setIndex((i) => (i + 1) % words.length)
      }, holdMs)
      return () => clearInterval(id)
    }

    const current = words[index % words.length]

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(pause)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return undefined
    }

    const delay = deleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.slice(0, Math.max(0, prev.length - 1))
          : current.slice(0, prev.length + 1),
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [words, index, text, deleting, typingSpeed, deletingSpeed, holdMs, reduceMotion])

  useEffect(() => {
    if (reduceMotion && words.length) {
      setText(words[index % words.length])
    }
  }, [index, reduceMotion, words])

  const display = reduceMotion ? words[index % words.length] : text

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {display}
      <span
        className="ml-0.5 inline-block w-[2px] translate-y-[2px] animate-pulse bg-current"
        style={{ height: '0.9em' }}
        aria-hidden
      />
    </span>
  )
}
