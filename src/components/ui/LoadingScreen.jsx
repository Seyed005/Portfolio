import { motion } from 'framer-motion'
import { profile } from '../../data/portfolio'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="text-center">
        <motion.p
          className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.shortName}
        </motion.p>
        <motion.div
          className="mx-auto mt-7 h-px w-28 origin-left bg-ink"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        />
        <motion.p
          className="mt-5 text-xs uppercase tracking-[0.24em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {profile.name}
        </motion.p>
      </div>
    </motion.div>
  )
}
