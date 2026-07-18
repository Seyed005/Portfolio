import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Button from './Button'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
            <span className="font-display text-2xl font-semibold tracking-tight text-white/70">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-[1.35rem]">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-surface/80 px-3 py-1 text-xs text-ink-soft"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={project.github}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs"
              magnetic={false}
            >
              <GithubIcon className="size-3.5" />
              GitHub
            </Button>
            {project.live && (
              <Button
                href={project.live}
                variant="ghost"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs"
                magnetic={false}
              >
                Live Demo
                <ArrowUpRight className="size-3.5" />
              </Button>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}
