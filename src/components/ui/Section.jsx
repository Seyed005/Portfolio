import Container from './Container'
import Reveal from './Reveal'

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-24 sm:py-32 ${className}`.trim()}
    >
      <Container>
        {(eyebrow || title || description) && (
          <Reveal className="mb-14 max-w-2xl sm:mb-16">
            {eyebrow && (
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}
