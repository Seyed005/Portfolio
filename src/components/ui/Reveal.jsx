import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  once = true,
}) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduceMotion) {
    const Static = as === 'div' ? 'div' : as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  )
}
