import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function CertificateCard({ certificate, index = 0, onOpen }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)}>
      <motion.button
        type="button"
        onClick={() => onOpen(certificate)}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card group flex h-full w-full flex-col overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        aria-label={`View ${certificate.title} certificate`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-line/60 bg-surface/50">
          <img
            src={certificate.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
          {certificate.featured && (
            <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-ink/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-paper backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:leading-snug">
            {certificate.title}
          </h3>
          <p className="mt-2.5 text-sm text-ink-soft">{certificate.issuer}</p>
          {certificate.date && (
            <p className="mt-3.5 text-xs uppercase tracking-[0.14em] text-muted">
              {certificate.date}
            </p>
          )}
        </div>
      </motion.button>
    </Reveal>
  )
}
