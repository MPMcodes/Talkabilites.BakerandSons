import { Link } from 'react-router-dom'

export default function HeroBanner({ headline, subheadline, cta }) {
  return (
    <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1E42 0%, #1B3265 55%, #243A80 100%)' }}>
      {/* Decorative circles */}
      <div className="absolute top-[-60px] right-[-60px] w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[-40px] w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-center text-white z-10">
        <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight drop-shadow-md">
          {headline}
        </h1>
        {subheadline && (
          <p className="mt-4 text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto">
            {subheadline}
          </p>
        )}
        {cta && (
          <Link
            to={cta.to}
            className="inline-block mt-8 px-8 py-3 bg-primary text-white font-heading font-bold rounded-full text-base shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            {cta.label}
          </Link>
        )}
      </div>

      {/* Wave divider */}
      <div className="relative h-12 overflow-hidden">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          fill="#FFFDF5"
        >
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </div>
  )
}
