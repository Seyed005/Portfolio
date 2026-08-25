import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function SkillCard({ category, items, index = 0 }) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card h-full rounded-2xl p-6 sm:p-7"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3.5 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl sm:leading-snug">
          {category}
        </h3>
        <ul className="mt-6 space-y-3.5 border-t border-line/70 pt-5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm leading-relaxed text-ink-soft">
              <span className="size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </motion.article>
    </Reveal>
  )
}
