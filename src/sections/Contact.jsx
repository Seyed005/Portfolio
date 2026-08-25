import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm(initialForm)
  }

  const fieldClass =
    'w-full rounded-xl border border-line/80 bg-[var(--glass-bg)] px-4 py-3.5 text-sm text-ink outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-muted focus:border-ink focus:bg-[var(--glass-bg-strong)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--ink)_6%,transparent)]'

  const contacts = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      icon: Phone,
    },
    {
      label: 'Location',
      value: profile.location,
      href: null,
      icon: MapPin,
    },
    {
      label: 'GitHub',
      value: 'github.com/Seyed005',
      href: profile.socials.github,
      icon: GithubIcon,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/seyed-ismail-bilal-s',
      href: profile.socials.linkedin,
      icon: LinkedinIcon,
    },
  ]

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s connect."
      description="Reach out for internship opportunities, collaborations, or cybersecurity discussions."
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <ul className="space-y-1">
            {contacts.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-line/80 bg-[var(--glass-bg)] text-muted backdrop-blur-sm transition-colors duration-300 group-hover:border-line-strong group-hover:text-ink">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </span>
                    <span className="mt-1.5 block text-base text-ink">{item.value}</span>
                  </span>
                </>
              )

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex gap-4 rounded-2xl p-3.5 transition-all duration-300 hover:bg-[var(--glass-bg)] hover:backdrop-blur-sm"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex gap-4 rounded-2xl p-3.5">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="you@email.com"
                  required
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                className={`${fieldClass} resize-y`}
                placeholder="Internship opportunity, collaboration, or question…"
                required
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" variant="primary" magnetic={false}>
                <Send className="size-4" />
                Send message
              </Button>
              {status === 'error' && (
                <p className="text-sm text-muted" role="alert">
                  Please fill in all fields.
                </p>
              )}
              {status === 'sent' && (
                <p className="text-sm text-muted" role="status">
                  Opening your email client…
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
