import { useInView } from '../hooks/useInView'

const insurances = [
  'United Health Care – Commercial & Community',
  'Blue Cross Blue Shield',
  'Medicaid – Alliance',
  'Medicaid – Wellcare',
  'Medicaid – Carolina Complete',
  'Medicaid – AmeriHealth Caritas',
  'Medicaid – UHC Community Plan',
  'Aetna',
  'Cigna',
  'Private Pay',
]

export default function InsuranceList() {
  const [ref, visible] = useInView()

  return (
    <section ref={ref} className={`fade-up bg-secondary/10 rounded-3xl p-8 md:p-10 ${visible ? 'visible' : ''}`}>
      <h3 className="font-heading font-bold text-2xl text-secondary text-center mb-6">
        Insurance Accepted
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {insurances.map((ins) => (
          <span
            key={ins}
            className="px-4 py-2 bg-secondary text-white rounded-full text-sm font-semibold shadow-sm"
          >
            {ins}
          </span>
        ))}
      </div>
    </section>
  )
}
