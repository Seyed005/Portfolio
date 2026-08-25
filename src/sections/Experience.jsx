import { Briefcase, Sparkles } from 'lucide-react'
import { experience, profile } from '../data/portfolio'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import AvailabilityBadge from '../components/ui/AvailabilityBadge'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internship & availability."
      description="Hands-on experience with a clear focus on the next opportunity in cybersecurity."
    >
      <Reveal className="mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <AvailabilityBadge label={profile.availability} />
          {profile.availabilityDetails.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line/80 bg-[var(--glass-bg)] px-3.5 py-1.5 text-xs text-muted backdrop-blur-sm sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {experience.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="glass-card group h-full rounded-2xl p-6 hover:-translate-y-1.5 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-[var(--glass-bg)] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
                  {item.type === 'Internship' ? (
                    <Briefcase className="size-3.5" aria-hidden />
                  ) : (
                    <Sparkles className="size-3.5" aria-hidden />
                  )}
                  {item.type}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl sm:leading-snug">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm font-medium text-ink-soft">{item.company}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base sm:leading-[1.75]">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
