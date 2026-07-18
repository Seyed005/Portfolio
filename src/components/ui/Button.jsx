import Magnetic from './Magnetic'

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  download,
  target,
  rel,
  magnetic = true,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-50'

  const variants = {
    primary:
      'bg-ink text-paper hover:opacity-90 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
    secondary:
      'border border-line-strong bg-elevated text-ink hover:border-ink hover:bg-ink hover:text-paper',
    ghost: 'text-ink hover:bg-surface',
  }

  const classes = `${base} ${variants[variant]} ${className}`.trim()

  const content = href ? (
    <a href={href} className={classes} download={download} target={target} rel={rel} {...props}>
      {children}
    </a>
  ) : (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )

  if (!magnetic) return content

  return <Magnetic className="inline-flex">{content}</Magnetic>
}
