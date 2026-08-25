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
    'btn-premium inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-50'

  const variants = {
    primary:
      'btn-premium-primary bg-ink text-paper hover:opacity-[0.94]',
    secondary:
      'btn-premium-secondary border border-line-strong bg-[var(--glass-bg-strong)] text-ink backdrop-blur-md hover:border-ink hover:bg-ink hover:text-paper',
    ghost: 'btn-premium-ghost text-ink hover:bg-[var(--glass-bg)] backdrop-blur-sm',
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
