import { motion, useReducedMotion } from 'framer-motion'

export default function AvailabilityBadge({ label }) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="glow-badge inline-flex items-center gap-2.5 rounded-full border border-line/80 bg-[var(--glass-bg-strong)] px-4 py-2 text-sm font-medium text-ink backdrop-blur-md"
      role="status"
    >
      <span className="relative flex size-2.5">
        {!reduceMotion && (
          <motion.span
            className="absolute inline-flex size-full rounded-full bg-ink opacity-40"
            animate={{ scale: [1, 2.2, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <span className="relative inline-flex size-2.5 rounded-full bg-ink" />
      </span>
      {label}
    </div>
  )
}
