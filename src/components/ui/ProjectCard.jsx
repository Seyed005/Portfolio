import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Button from './Button'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project, index = 0 }) {
  const technologies = project.technologies ?? project.tags ?? []

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -10 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-elevated transition-[border-color,box-shadow] duration-500 hover:border-ink/25 hover:shadow-[0_28px_60px_-28px_rgba(0,0,0,0.4)] dark:hover:border-white/20 dark:hover:shadow-[0_28px_60px_-28px_rgba(0,0,0,0.85)]"
      >
        <div className="relative aspect-[16/11] overflow-hidden border-b border-line bg-surface">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-7">
            <span className="font-display text-3xl font-semibold tracking-tight text-white/65 transition-colors duration-500 group-hover:text-white/90 sm:text-4xl">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7 sm:p-8 lg:p-9">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-ink-soft sm:text-[1.65rem]">
            {project.title}
          </h3>
          <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted sm:text-base sm:leading-7">
            {project.description}
          </p>

          <div className="mt-7">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
              Technologies
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs text-ink-soft transition-all duration-300 group-hover:border-line-strong group-hover:bg-surface"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={project.github}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-sm transition-transform duration-300 group-hover:border-ink"
              magnetic={false}
            >
              <GithubIcon className="size-4" />
              GitHub
            </Button>
            {project.live && (
              <Button
                href={project.live}
                variant="ghost"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-sm"
                magnetic={false}
              >
                Live Demo
                <ArrowUpRight className="size-4" />
              </Button>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}
