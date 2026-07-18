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
              className="rounded-full border border-line bg-elevated px-3.5 py-1.5 text-xs text-muted sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {experience.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="h-full rounded-2xl border border-line bg-elevated p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.4)] sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  {item.type === 'Internship' ? (
                    <Briefcase className="size-3.5" aria-hidden />
                  ) : (
                    <Sparkles className="size-3.5" aria-hidden />
                  )}
                  {item.type}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-ink-soft">{item.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
