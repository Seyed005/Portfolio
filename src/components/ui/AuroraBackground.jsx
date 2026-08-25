import { useReducedMotion } from 'framer-motion'

export default function AuroraBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      aria-hidden
      className={`aurora-root pointer-events-none fixed inset-0 z-0 overflow-hidden ${
        reduceMotion ? 'aurora-static' : ''
      }`}
    >
      <div className="aurora-blob aurora-blob-a" />
      <div className="aurora-blob aurora-blob-b" />
      <div className="aurora-blob aurora-blob-c" />
      <div className="aurora-blob aurora-blob-d" />
      <div className="aurora-veil" />
    </div>
  )
}
