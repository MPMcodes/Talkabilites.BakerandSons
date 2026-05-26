import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { end: 10, suffix: '+', label: 'Years of Experience', color: '#C9A84C' },
  { text: '1–18+', label: 'Ages We Serve', color: '#E07B5A' },
  { end: 2020, label: 'Serving Since', color: '#1B3265', plain: true },
  { end: 10, suffix: '+', label: 'Insurance Plans Accepted', color: '#7EB8D4' },
]

function Stat({ stat, active, delay }) {
  const count = useCountUp(stat.end || 0, active)
  const display = stat.text
    ? stat.text
    : stat.plain
      ? String(count)
      : `${count}${stat.suffix || ''}`
  return (
    <div
      className={`reveal reveal-scale ${active ? 'visible' : ''} text-center`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-heading font-extrabold text-4xl md:text-5xl" style={{ color: stat.color }}>
        {display}
      </p>
      <p className="mt-1 text-sm font-semibold text-gray-600">{stat.label}</p>
    </div>
  )
}

export default function StatsStrip() {
  const [ref, visible] = useInView({ threshold: 0.35 })
  return (
    <section ref={ref} className="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Stat key={s.label} stat={s} active={visible} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}
