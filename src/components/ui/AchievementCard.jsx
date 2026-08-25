import Reveal from './Reveal'

export default function AchievementCard({ item, index = 0 }) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="glass-card group h-full rounded-2xl p-6 hover:-translate-y-1.5 sm:p-7">
        <p className="font-display text-3xl font-semibold tracking-tight text-ink/15 transition-colors duration-300 group-hover:text-ink/25">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl sm:leading-snug">
          {item.title}
        </h3>
        <p className="mt-3.5 text-sm leading-relaxed text-muted">{item.description}</p>
      </article>
    </Reveal>
  )
}
