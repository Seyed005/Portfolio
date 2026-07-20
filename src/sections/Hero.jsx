import { motion, useReducedMotion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { profile, roles } from '../data/portfolio'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SocialLinks from '../components/ui/SocialLinks'
import Typewriter from '../components/ui/Typewriter'
import AvailabilityBadge from '../components/ui/AvailabilityBadge'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-paper" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 mesh-hero"
        animate={reduceMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade" />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise opacity-40" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-2xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              className="mb-8"
            >
              <AvailabilityBadge label={profile.availability} />
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              className="mb-4 text-base text-muted sm:text-lg"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              custom={2}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[4.75rem]"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              className="mt-5 min-h-[2rem] font-display text-xl font-medium tracking-tight text-ink-soft sm:min-h-[2.5rem] sm:text-2xl md:text-3xl"
            >
              <Typewriter words={roles} holdMs={2000} />
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button href="/resume.pdf" variant="primary" download>
                <Download className="size-4" />
                Download Resume
              </Button>
              <Button href="#projects" variant="secondary">
                View Projects
                <ArrowRight className="size-4" />
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              custom={6}
              variants={fadeUp}
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              className="mt-10"
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            className="relative mx-auto flex w-full max-w-[18rem] items-center justify-center sm:max-w-[20rem] md:max-w-[22rem] lg:ml-auto lg:mr-0 lg:max-w-[24rem]"
          >
            <motion.div
              className="relative aspect-square w-full"
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div
                aria-hidden
                className="absolute inset-3 rounded-full bg-ink/10 blur-2xl dark:bg-ink/20"
              />
              <div className="group relative size-full overflow-hidden rounded-full border border-line bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 dark:shadow-[0_28px_70px_-18px_rgba(0,0,0,0.75)] dark:ring-white/10">
                <img
                  src="/profile.jpg"
                  alt={`${profile.name} — professional portrait`}
                  className="absolute inset-0 m-auto size-[88%] object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  width={480}
                  height={480}
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
