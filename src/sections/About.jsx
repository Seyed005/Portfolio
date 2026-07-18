import { about } from '../data/portfolio'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import { GraduationCap, Target, Compass } from 'lucide-react'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building toward professional offensive security."
      description="Hands-on learning, practical labs, and a clear goal — becoming a Professional Penetration Tester."
    >
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div className="space-y-10">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {about.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-line bg-elevated p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Target className="size-5 text-muted" aria-hidden />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  Career Objective
                </p>
              </div>
              <p className="text-base leading-relaxed text-ink-soft">{about.objective}</p>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-elevated p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="size-5 text-muted" aria-hidden />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  Education
                </p>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {about.education.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                Specialization: {about.education.specialization}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {about.education.institution}
              </p>
              <p className="mt-2 text-sm text-muted">{about.education.status}</p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-line bg-elevated p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Compass className="size-5 text-muted" aria-hidden />
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  Current Focus
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {about.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
