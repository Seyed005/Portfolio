import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from '../components/ui/ThemeToggle'
import { profile } from '../data/portfolio'

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col bg-paper text-ink">
      <div className="absolute right-5 top-5 sm:right-8 sm:top-8">
        <ThemeToggle />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-8xl font-semibold tracking-tight text-ink/10 sm:text-9xl"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Page not found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-3 max-w-md text-muted"
        >
          The page you requested does not exist. Return to {profile.name}&apos;s portfolio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            Back home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
