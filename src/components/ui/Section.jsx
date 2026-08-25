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
      className={`scroll-mt-24 border-t border-line/70 py-28 sm:py-36 ${className}`.trim()}
    >
      <Container>
        {(eyebrow || title || description) && (
          <Reveal className="mb-16 max-w-2xl sm:mb-20">
            {eyebrow && (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted sm:text-lg sm:leading-[1.8]">
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
