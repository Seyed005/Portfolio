import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgress from '../components/ui/ScrollProgress'
import LoadingScreen from '../components/ui/LoadingScreen'
import PageTransition from '../components/ui/PageTransition'
import BackToTop from '../components/ui/BackToTop'
import Hero from '../sections/Hero'

const About = lazy(() => import('../sections/About'))
const Skills = lazy(() => import('../sections/Skills'))
const Projects = lazy(() => import('../sections/Projects'))
const Certifications = lazy(() => import('../sections/Certifications'))
const Experience = lazy(() => import('../sections/Experience'))
const Achievements = lazy(() => import('../sections/Achievements'))
const Contact = lazy(() => import('../sections/Contact'))

function SectionFallback() {
  return <div className="min-h-40 border-t border-line bg-paper" aria-hidden />
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>

      <PageTransition>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Experience />
            <Achievements />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </PageTransition>
    </>
  )
}
