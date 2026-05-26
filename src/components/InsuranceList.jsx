import { useInView } from '../hooks/useInView'
import Marquee from './Marquee'

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
    <section ref={ref} className={`reveal reveal-up ${visible ? 'visible' : ''} bg-secondary/5 rounded-3xl py-8 md:py-10 overflow-hidden`}>
      <h3 className="font-heading font-bold text-2xl text-secondary text-center mb-6 px-4">
        Insurance Accepted
      </h3>
      <Marquee
        items={insurances}
        renderItem={(ins) => (
          <span className="px-5 py-2.5 bg-secondary text-white rounded-full text-sm font-semibold shadow-sm whitespace-nowrap">
            {ins}
          </span>
        )}
      />
    </section>
  )
}
