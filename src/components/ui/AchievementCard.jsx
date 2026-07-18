import Reveal from './Reveal'

export default function AchievementCard({ item, index = 0 }) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="group h-full rounded-2xl border border-line bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.4)] sm:p-7">
        <p className="font-display text-3xl font-semibold tracking-tight text-ink/15 transition-colors group-hover:text-ink/25">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
      </article>
    </Reveal>
  )
}
