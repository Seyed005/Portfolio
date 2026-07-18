import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Minus, Plus, RotateCcw, X } from 'lucide-react'

const MIN_SCALE = 1
const MAX_SCALE = 3.5
const STEP = 0.35

export default function CertificateModal({ certificate, onClose }) {
  const reduceMotion = useReducedMotion()
  const open = Boolean(certificate)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const lastPoint = useRef({ x: 0, y: 0 })
  const closeButtonRef = useRef(null)
  const stageRef = useRef(null)

  const resetView = useCallback(() => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    if (!open) return undefined

    resetView()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === '+' || event.key === '=') {
        setScale((s) => Math.min(MAX_SCALE, s + STEP))
      }
      if (event.key === '-') {
        setScale((s) => {
          const next = Math.max(MIN_SCALE, s - STEP)
          if (next <= MIN_SCALE) setOffset({ x: 0, y: 0 })
          return next
        })
      }
      if (event.key === '0') resetView()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, resetView])

  useEffect(() => {
    if (!open) return undefined
    const node = stageRef.current
    if (!node) return undefined

    const onWheel = (event) => {
      event.preventDefault()
      const delta = event.deltaY > 0 ? -STEP : STEP
      setScale((s) => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, s + delta))
        if (next <= MIN_SCALE) setOffset({ x: 0, y: 0 })
        return next
      })
    }

    node.addEventListener('wheel', onWheel, { passive: false })
    return () => node.removeEventListener('wheel', onWheel)
  }, [open])

  const onPointerDown = (event) => {
    if (scale <= 1) return
    dragging.current = true
    lastPoint.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!dragging.current) return
    const dx = event.clientX - lastPoint.current.x
    const dy = event.clientY - lastPoint.current.y
    lastPoint.current = { x: event.clientX, y: event.clientY }
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
  }

  const onPointerUp = (event) => {
    dragging.current = false
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <AnimatePresence>
      {open && certificate && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.title} certificate`}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            aria-label="Close certificate viewer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 flex max-h-[92svh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-2xl"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {certificate.title}
                </p>
                <p className="truncate text-xs text-white/55">
                  {certificate.issuer}
                  {certificate.date ? ` · ${certificate.date}` : ''}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <ToolbarButton
                  label="Zoom out"
                  onClick={() =>
                    setScale((s) => {
                      const next = Math.max(MIN_SCALE, s - STEP)
                      if (next <= MIN_SCALE) setOffset({ x: 0, y: 0 })
                      return next
                    })
                  }
                >
                  <Minus className="size-4" />
                </ToolbarButton>
                <ToolbarButton
                  label="Zoom in"
                  onClick={() => setScale((s) => Math.min(MAX_SCALE, s + STEP))}
                >
                  <Plus className="size-4" />
                </ToolbarButton>
                <ToolbarButton label="Reset view" onClick={resetView}>
                  <RotateCcw className="size-4" />
                </ToolbarButton>
                <ToolbarButton
                  label="Close"
                  onClick={onClose}
                  buttonRef={closeButtonRef}
                >
                  <X className="size-4" />
                </ToolbarButton>
              </div>
            </div>

            <div
              ref={stageRef}
              className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/40 p-3 sm:p-6"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{ cursor: scale > 1 ? 'grab' : 'default' }}
            >
              <motion.img
                src={certificate.image}
                alt={`${certificate.title} — full certificate`}
                className="max-h-[72svh] w-auto max-w-full select-none rounded-lg object-contain shadow-2xl"
                drag={false}
                style={{
                  scale,
                  x: offset.x,
                  y: offset.y,
                  touchAction: 'none',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                draggable={false}
              />
            </div>

            <p className="border-t border-white/10 px-4 py-2.5 text-center text-[11px] text-white/45 sm:text-xs">
              Scroll to zoom · Drag to pan · Esc to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ToolbarButton({ children, label, onClick, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </button>
  )
}
