import { profile, navLinks } from '../../data/portfolio'
import Container from '../ui/Container'
import SocialLinks from '../ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              {profile.role} · {profile.subtitle}
            </p>
            <SocialLinks className="mt-6" size="sm" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Quick Links
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Contact
            </p>
            <div className="mt-5 space-y-2 text-sm text-ink-soft">
              <a
                href={`mailto:${profile.email}`}
                className="block transition-colors hover:text-ink"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="block transition-colors hover:text-ink"
              >
                {profile.phone}
              </a>
              <p>{profile.location}</p>
            </div>
            <p className="mt-8 text-sm text-muted">
              © {year} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
