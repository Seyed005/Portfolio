import Reveal from './Reveal'

export default function CertTimeline({ items }) {
  return (
    <ol className="relative space-y-0">
      {items.map((cert, index) => (
        <Reveal key={cert.title} delay={index * 0.07} as="li">
          <div className="group relative grid gap-4 border-l border-line pb-12 pl-8 last:pb-0 sm:grid-cols-[7.5rem_1fr] sm:gap-10 sm:pl-10">
            <span
              aria-hidden
              className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-ink bg-paper transition-transform duration-300 group-hover:scale-125"
            />
            <p className="pt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {cert.year}
            </p>
            <div className="rounded-2xl border border-transparent p-0 transition-colors sm:-ml-2 sm:border-line sm:bg-elevated sm:p-6 sm:hover:border-line-strong">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {cert.issuer}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {cert.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {cert.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
