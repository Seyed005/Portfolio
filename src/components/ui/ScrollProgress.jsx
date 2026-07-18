import { useScrollProgress } from '../../hooks/useScroll'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-line"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    >
      <div
        className="h-full origin-left bg-ink transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
