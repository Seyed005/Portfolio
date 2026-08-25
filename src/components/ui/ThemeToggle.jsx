import { motion, useReducedMotion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex size-10 items-center justify-center rounded-full border border-line/80 bg-[var(--glass-bg)] text-ink backdrop-blur-md transition-all duration-300 hover:border-line-strong hover:bg-[var(--glass-bg-strong)] ${className}`.trim()}
    >
      <motion.span
        key={isDark ? 'sun' : 'moon'}
        initial={reduceMotion ? false : { opacity: 0, rotate: -40, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="inline-flex"
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </motion.span>
    </button>
  )
}
