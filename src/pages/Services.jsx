import { Link } from 'react-router-dom'
import { HeartPulse, Video, Users, Search, ArrowRight, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import ServiceCard from '../components/ServiceCard'
import InsuranceList from '../components/InsuranceList'
import { useInView } from '../hooks/useInView'

const services = [
  {
    Icon: HeartPulse,
    title: 'Individual Speech and Language Therapy',
    color: '#F4A228',
    description: `Speech and Language Therapy sessions are customized to your child's needs. We treat ages 1–18+\n\nSessions address:\n- Articulation/Phonological Disorders\n- Autism\n- Auditory Processing\n- Augmentative Communication\n- Social Language Skills\n- Verbal Apraxia\n- Receptive/Expressive Language Disorders`,
  },
  {
    Icon: Video,
    title: 'Teletherapy',
    color: '#1B3265',
    description: 'While we continue to navigate these uncertain times, TalkAbilities provides teletherapy services!',
  },
  {
    Icon: Users,
    title: 'Consultation & Family Training',
    color: '#FF7B6B',
    description: 'TalkAbilities believes a wholistic approach is critical for growth. We collaborate with related services, parents, teachers, and more.',
  },
  {
    Icon: Search,
    title: 'Free Screenings',
    color: '#7EC8E3',
    description: 'Curious if your child needs a full Speech and Language Evaluation? Contact TalkAbilities to schedule a free screening to determine if a speech and language evaluation is recommended for your child.',
  },
]

function IntroSection() {
  const [ref, visible] = useInView()
  return (
    <section ref={ref} className={`fade-up max-w-3xl mx-auto px-4 pt-12 pb-6 text-center ${visible ? 'visible' : ''}`}>
      <p className="text-lg text-gray-600 leading-relaxed">
        TalkAbilities strives to recognize everyone's unique Abilities, while helping individuals grow their communication skills.
      </p>
    </section>
  )
}

function CTABanner() {
  const [ref, visible] = useInView()
  return (
    <section ref={ref} className={`fade-up bg-secondary rounded-3xl mx-4 md:mx-auto max-w-4xl px-8 py-10 text-center text-white ${visible ? 'visible' : ''}`}>
      <h2 className="font-heading font-bold text-2xl md:text-3xl">Ready to get started?</h2>
      <p className="mt-2 text-white/85 text-base">Contact us today to schedule an evaluation or free screening.</p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 mt-6 px-7 py-3 bg-white text-secondary rounded-full font-heading font-bold hover:bg-cream transition-colors shadow-md"
      >
        Contact Us Today <ArrowRight size={16} />
      </Link>
    </section>
  )
}

export default function Services() {
  const [gridRef, gridVisible] = useInView()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroBanner
          headline="Our Services"
          subheadline="Customized therapy to help every child find their voice"
        />

        <IntroSection />

        {/* Service cards */}
        <section ref={gridRef} className="max-w-6xl mx-auto px-4 py-10">
          <div className={`fade-up text-center mb-8 ${gridVisible ? 'visible' : ''}`}>
            <h2 className="font-heading font-bold text-2xl text-secondary">How We Can Help</h2>
            <div className="w-10 h-1 bg-primary rounded-full mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                Icon={s.Icon}
                title={s.title}
                description={s.description}
                accentColor={s.color}
                delay={i * 100}
              />
            ))}
          </div>
        </section>

        {/* Insurance */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <InsuranceList />
        </section>

        {/* CTA */}
        <section className="pb-14">
          <CTABanner />
        </section>
      </main>

      <Footer />

      {/* Floating mobile call button */}
      <a
        href="tel:9197045542"
        className="md:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg font-heading font-bold text-sm hover:bg-primary-dark transition-colors"
        aria-label="Call TalkAbilities"
      >
        <Phone size={18} />
        Call Us
      </a>
    </div>
  )
}
