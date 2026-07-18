import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function Magnetic({
  children,
  className = '',
  strength = 0.35,
  as: Tag = 'div',
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.4 })

  const onMove = (event) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </MotionTag>
  )
}
