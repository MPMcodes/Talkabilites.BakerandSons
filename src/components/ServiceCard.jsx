import { useInView } from '../hooks/useInView'

export default function ServiceCard({ Icon, title, description, accentColor = '#F4A228', delay = 0 }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`fade-up bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms`, borderTop: `4px solid ${accentColor}` }}
    >
      <div className="p-6 flex flex-col flex-1">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4 shrink-0"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          {Icon && <Icon size={22} style={{ color: accentColor }} />}
        </div>
        <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <div className="text-sm text-gray-600 leading-relaxed flex-1">
          {typeof description === 'string' ? (
            description.split('\n').map((line, i) =>
              line.startsWith('- ') ? null : line ? <p key={i}>{line}</p> : null
            )
          ) : (
            description
          )}
          {typeof description === 'string' && description.includes('\n- ') && (
            <ul className="mt-2 space-y-1">
              {description
                .split('\n')
                .filter((l) => l.startsWith('- '))
                .map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
                    <span>{l.slice(2)}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
