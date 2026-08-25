import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function MouseSpotlight() {
  const reduceMotion = useReducedMotion()
  const spotRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef(0)
  const visible = useRef(false)

  useEffect(() => {
    if (reduceMotion) return undefined

    const el = spotRef.current
    if (!el) return undefined

    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return undefined

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12
      current.current.y += (target.current.y - current.current.y) * 0.12
      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      raf.current = requestAnimationFrame(tick)
    }

    const onMove = (event) => {
      target.current.x = event.clientX
      target.current.y = event.clientY
      if (!visible.current) {
        visible.current = true
        el.style.opacity = '1'
        current.current.x = event.clientX
        current.current.y = event.clientY
      }
    }

    const onLeave = () => {
      visible.current = false
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="mouse-spotlight pointer-events-none fixed left-0 top-0 z-[1] opacity-0"
    />
  )
}
