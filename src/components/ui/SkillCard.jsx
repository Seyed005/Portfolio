import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function SkillCard({ category, items, index = 0 }) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-2xl border border-line bg-elevated p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.35)] sm:p-7"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
          {category}
        </h3>
        <ul className="mt-5 space-y-3 border-t border-line pt-5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
              <span className="size-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </motion.article>
    </Reveal>
  )
}
