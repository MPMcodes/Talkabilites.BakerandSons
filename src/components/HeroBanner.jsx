import { Link } from 'react-router-dom'
import FloatingShapes from './FloatingShapes'

const SHAPES = [
  { type: 'blob', top: '-70px', right: '-60px', size: '260px', color: '#C9A84C', opacity: 0.18, blur: 6 },
  { type: 'blob', bottom: '-50px', left: '-50px', size: '220px', color: '#7EB8D4', opacity: 0.16, blur: 4, delay: '2s' },
  { type: 'blob', top: '30%', left: '60%', size: '180px', color: '#E07B5A', opacity: 0.12, blur: 8, delay: '4s' },
  { type: 'message', top: '18%', left: '8%', size: 34, color: '#E6CD84', float: 'slow' },
  { type: 'star', top: '60%', left: '14%', size: 22, color: '#FFCBA4', fill: true, delay: '1.5s' },
  { type: 'sparkle', top: '24%', right: '12%', size: 28, color: '#A9D4E8', delay: '0.5s' },
  { type: 'heart', bottom: '22%', right: '16%', size: 24, color: '#F4A78C', fill: true, float: 'slow', delay: '2.5s' },
  { type: 'cloud', top: '12%', left: '46%', size: 30, color: '#ffffff', delay: '3s' },
]

export default function HeroBanner({ headline, subheadline, cta, eyebrow, compact = false }) {
  return (
    <div className="relative overflow-hidden animated-gradient">
      <FloatingShapes items={SHAPES} />
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div
        className={`relative max-w-6xl mx-auto px-4 text-center text-white z-10 ${
          compact ? 'py-14 md:py-16' : 'py-20 md:py-28'
        }`}
      >
        {eyebrow && (
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-semibold tracking-wide animate-fade-up">
            {eyebrow}
          </span>
        )}
        <h1
          className={`font-heading font-bold leading-tight drop-shadow-md animate-fade-up ${
            compact ? 'text-3xl md:text-4xl' : 'text-3xl md:text-5xl lg:text-6xl'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            className="mt-5 text-lg md:text-xl text-white/85 font-body max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            {subheadline}
          </p>
        )}
        {cta && (
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to={cta.to}
              className="group relative inline-flex items-center gap-2 mt-9 px-9 py-4 bg-primary text-secondary-dark font-heading font-bold rounded-full text-base shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">{cta.label}</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </Link>
          </div>
        )}
      </div>

      {/* Animated layered wave divider */}
      <div className="relative h-16 md:h-20">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[200%] h-16 md:h-20 animate-wave"
            style={{ animationDuration: '18s' }}
            viewBox="0 0 2880 96"
            preserveAspectRatio="none"
            fill="#FFFDF5"
            opacity="0.5"
          >
            <path d="M0,64 C360,16 1080,16 1440,64 C1800,16 2520,16 2880,64 L2880,96 L0,96 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[200%] h-14 md:h-16 animate-wave"
            viewBox="0 0 2880 96"
            preserveAspectRatio="none"
            fill="#FFFDF5"
          >
            <path d="M0,72 C360,32 1080,32 1440,72 C1800,32 2520,32 2880,72 L2880,96 L0,96 Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
