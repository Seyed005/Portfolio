import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 z-50 inline-flex size-11 items-center justify-center rounded-full border border-line/80 bg-[var(--glass-bg-strong)] text-ink shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-xl sm:bottom-8 sm:right-8"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
