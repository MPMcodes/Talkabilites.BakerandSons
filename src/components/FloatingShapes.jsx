import { MessageCircle, Star, Heart, Sparkles, Cloud } from 'lucide-react'

const ICONS = { message: MessageCircle, star: Star, heart: Heart, sparkle: Sparkles, cloud: Cloud }

// Decorative, non-interactive floating shapes used as background ornamentation.
export default function FloatingShapes({ items = [], className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((it, i) => {
        if (it.type === 'blob') {
          return (
            <div
              key={i}
              className="absolute blob-shape animate-blob"
              style={{
                top: it.top,
                left: it.left,
                right: it.right,
                bottom: it.bottom,
                width: it.size,
                height: it.size,
                background: it.color,
                opacity: it.opacity ?? 0.5,
                animationDelay: it.delay || '0s',
                filter: it.blur ? `blur(${it.blur}px)` : undefined,
              }}
            />
          )
        }
        const Icon = ICONS[it.type] || Star
        return (
          <div
            key={i}
            className={it.float === 'slow' ? 'absolute animate-float-slow' : 'absolute animate-float'}
            style={{ top: it.top, left: it.left, right: it.right, bottom: it.bottom, animationDelay: it.delay || '0s' }}
          >
            <Icon size={it.size || 28} style={{ color: it.color }} fill={it.fill ? it.color : 'none'} strokeWidth={2} />
          </div>
        )
      })}
    </div>
  )
}
