import { useInView } from '../hooks/useInView'

export default function StaffCard({ name, credentials, title, photo, bio, delay = 0 }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`fade-up bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-heading font-bold text-xl text-secondary leading-tight">
            {name}
          </h3>
          {credentials && (
            <p className="text-secondary/70 font-heading font-semibold text-sm mt-0.5">
              {credentials}
            </p>
          )}
          {title && (
            <p className="text-coral font-semibold text-sm mt-1">{title}</p>
          )}
        </div>

        <div className="text-sm text-gray-600 leading-relaxed space-y-3 flex-1">
          {bio.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
