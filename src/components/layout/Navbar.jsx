import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../../data/portfolio'
import { useScrolled } from '../../hooks/useScroll'
import Container from '../ui/Container'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const resolveHref = (href) => {
    if (href.startsWith('#')) {
      return isHome ? href : `/${href}`
    }
    return href
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line glass'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[4.25rem]">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {profile.shortName}
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <Button
              href={profile.resumeUrl}
              variant="primary"
              download
              className="px-4 py-2 text-xs"
              magnetic={false}
            >
              Resume
            </Button>
          </div>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-ink"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-line glass xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="rounded-xl px-3 py-3 text-base text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 rounded-xl bg-ink px-3 py-3 text-center text-sm font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
