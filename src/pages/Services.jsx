import { Link } from 'react-router-dom'
import { HeartPulse, Video, Users, Search, ArrowRight, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import ServiceCard from '../components/ServiceCard'
import InsuranceList from '../components/InsuranceList'
import Reveal from '../components/Reveal'

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
  return (
    <Reveal as="section" className="max-w-3xl mx-auto px-4 pt-14 pb-6 text-center">
      <p className="text-lg text-gray-600 leading-relaxed">
        TalkAbilities strives to recognize everyone's unique Abilities, while helping individuals grow their communication skills.
      </p>
    </Reveal>
  )
}

function CTABanner() {
  return (
    <Reveal as="section" variant="scale" className="relative overflow-hidden bg-secondary rounded-3xl mx-4 md:mx-auto max-w-4xl px-8 py-12 text-center text-white">
      <div className="absolute -top-12 -left-8 w-44 h-44 rounded-full bg-white/10 blob-shape animate-blob pointer-events-none" />
      <div className="absolute -bottom-14 -right-8 w-52 h-52 rounded-full bg-primary/20 blob-shape animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="relative">
        <h2 className="font-heading font-bold text-2xl md:text-3xl">Ready to get started?</h2>
        <p className="mt-2 text-white/85 text-base">Contact us today to schedule an evaluation or free screening.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-6 px-7 py-3 bg-white text-secondary rounded-full font-heading font-bold hover:bg-cream hover:-translate-y-0.5 transition-all duration-300 shadow-md"
        >
          Contact Us Today <ArrowRight size={16} />
        </Link>
      </div>
    </Reveal>
  )
}

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroBanner
          compact
          eyebrow="What We Offer"
          headline="Our Services"
          subheadline="Customized therapy to help every child find their voice"
        />

        <IntroSection />

        {/* Service cards */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <Reveal className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-secondary">How We Can Help</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full mx-auto mt-3" />
          </Reveal>
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
        <section className="pb-16">
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
