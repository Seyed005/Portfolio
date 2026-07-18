import { Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import Magnetic from './Magnetic'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
}

export default function SocialLinks({ className = '', size = 'md' }) {
  const sizeClass = size === 'sm' ? 'size-9' : 'size-11'
  const iconClass = 'size-4'

  const links = [
    { key: 'github', href: profile.socials.github, label: 'GitHub' },
    { key: 'linkedin', href: profile.socials.linkedin, label: 'LinkedIn' },
    { key: 'email', href: profile.socials.email, label: 'Email' },
  ]

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {links.map(({ key, href, label }) => {
        const Icon = iconMap[key]
        return (
          <Magnetic key={key} strength={0.4}>
            <a
              href={href}
              aria-label={label}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noreferrer'}
              className={`inline-flex ${sizeClass} items-center justify-center rounded-full border border-line bg-elevated text-ink transition-colors hover:bg-surface`}
            >
              <Icon className={iconClass} />
            </a>
          </Magnetic>
        )
      })}
    </div>
  )
}
