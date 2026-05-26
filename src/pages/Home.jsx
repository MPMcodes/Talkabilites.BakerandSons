import { Link } from 'react-router-dom'
import { GraduationCap, Shield, Baby, HeartPulse, Video, Users, Search, Phone, ArrowRight, ClipboardCheck, Sparkles } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import ServiceCard from '../components/ServiceCard'
import StatsStrip from '../components/StatsStrip'
import Reveal from '../components/Reveal'
import { useInView } from '../hooks/useInView'

const LINDSAY_PHOTO = 'https://images.squarespace-cdn.com/content/v1/5f8397bd8502ed181768b927/7f3db0f5-4049-492d-bffe-25e05a3a26dd/Smiling+Woman+at+Sunset+Beach.png'
const SARA_PHOTO = 'https://images.squarespace-cdn.com/content/v1/5f8397bd8502ed181768b927/e10613d6-a89c-4e47-aa5f-7fd81255d3b7/Sara.png'

const highlights = [
  {
    Icon: GraduationCap,
    title: 'Expert Therapists',
    desc: 'Licensed SLPs with 10+ years of experience helping children communicate.',
    color: '#F4A228',
  },
  {
    Icon: Baby,
    title: 'Ages 1–18+',
    desc: 'We serve children from toddlers through teens, meeting each child where they are.',
    color: '#1B3265',
  },
  {
    Icon: Shield,
    title: 'Insurance Accepted',
    desc: 'Most major insurance plans accepted, including Medicaid. Private pay available.',
    color: '#FF7B6B',
  },
]

const servicePreview = [
  {
    Icon: HeartPulse,
    title: 'Individual Therapy',
    description: 'Customized sessions for ages 1–18+ addressing articulation, language, autism, and more.',
    color: '#F4A228',
  },
  {
    Icon: Video,
    title: 'Teletherapy',
    description: 'Convenient online therapy sessions available from the comfort of home.',
    color: '#1B3265',
  },
  {
    Icon: Users,
    title: 'Family Training',
    description: 'Collaborative approach involving parents, teachers, and caregivers for best outcomes.',
    color: '#FF7B6B',
  },
  {
    Icon: Search,
    title: 'Free Screenings',
    description: 'Not sure if your child needs a full evaluation? Schedule a free screening today.',
    color: '#7EC8E3',
  },
]

const journey = [
  {
    Icon: Search,
    title: 'Free Screening',
    desc: 'Schedule a free screening to determine if a speech and language evaluation is recommended for your child.',
    color: '#7EC8E3',
  },
  {
    Icon: ClipboardCheck,
    title: 'Evaluation',
    desc: 'A comprehensive speech and language evaluation helps us understand your child’s unique needs.',
    color: '#F4A228',
  },
  {
    Icon: HeartPulse,
    title: 'Individualized Therapy',
    desc: 'Customized, play-based sessions for ages 1–18+ addressing articulation, language, autism, and more.',
    color: '#FF7B6B',
  },
  {
    Icon: Sparkles,
    title: 'Family Training',
    desc: 'We collaborate with parents, teachers, and caregivers so progress carries over into everyday life.',
    color: '#8FD9C0',
  },
]

function HighlightCard({ Icon, title, desc, color, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal reveal-up ${visible ? 'visible' : ''} group card-hover bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={28} style={{ color }} />
      </div>
      <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}

function StaffPreviewCard({ name, title, photo, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal reveal-up ${visible ? 'visible' : ''} group card-hover bg-white rounded-2xl shadow-md overflow-hidden text-center`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/2] overflow-hidden bg-gray-100">
        <img src={photo} alt={name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-base text-secondary">{name}</h3>
        <p className="text-coral text-xs font-semibold mt-1">{title}</p>
      </div>
    </div>
  )
}

function JourneyStep({ Icon, title, desc, color, index, last }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal reveal-up ${visible ? 'visible' : ''} relative flex flex-col items-center text-center`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Connector line (desktop) */}
      {!last && (
        <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
      )}
      <div className="relative z-10 mb-4">
        <div
          className="w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-md bg-white"
          style={{ border: `3px solid ${color}` }}
        >
          <Icon size={28} style={{ color }} />
        </div>
        <span
          className="absolute -top-1 -right-1 w-7 h-7 rounded-full text-white text-xs font-heading font-bold flex items-center justify-center shadow"
          style={{ backgroundColor: color }}
        >
          {index + 1}
        </span>
      </div>
      <h3 className="font-heading font-bold text-base text-secondary mb-1.5">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{desc}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroBanner
          eyebrow="Pediatric Speech & Language Therapy"
          headline="TalkAbilities Speech and Language Services, PLLC"
          subheadline="Serving Knightdale, North Carolina and surrounding areas"
          cta={{ label: 'Contact Us Today', to: '/contact' }}
        />

        {/* Stats */}
        <StatsStrip />

        {/* Why TalkAbilities */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <Reveal className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary">Why TalkAbilities?</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full mx-auto mt-3 mb-3" />
            <p className="text-gray-500 text-base">Caring, experienced therapy for every child's unique journey.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <HighlightCard key={h.title} {...h} delay={i * 100} />
            ))}
          </div>
        </section>

        {/* Services Preview */}
        <section className="relative bg-white py-16 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4">
            <Reveal className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary">What We Treat</h2>
              <div className="w-12 h-1.5 bg-primary rounded-full mx-auto mt-3 mb-3" />
              <p className="text-gray-500 text-base">Comprehensive speech and language services for children ages 1–18+.</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {servicePreview.map((s, i) => (
                <ServiceCard key={s.title} {...s} accentColor={s.color} delay={i * 80} />
              ))}
            </div>
            <Reveal className="text-center mt-10" delay={200}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-full font-heading font-bold hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary">How It Works</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full mx-auto mt-3 mb-3" />
            <p className="text-gray-500 text-base">A simple, supportive path from first hello to lasting progress.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {journey.map((step, i) => (
              <JourneyStep key={step.title} {...step} index={i} last={i === journey.length - 1} />
            ))}
          </div>
        </section>

        {/* Staff Preview */}
        <section className="relative bg-white py-16 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-4">
            <Reveal className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary">Meet Our Team</h2>
              <div className="w-12 h-1.5 bg-primary rounded-full mx-auto mt-3 mb-3" />
              <p className="text-gray-500 text-base">Passionate, experienced speech-language pathologists dedicated to your child's success.</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <StaffPreviewCard
                name="Lindsay Fleitz, MS, CCC-SLP"
                title="Owner & Speech Language Pathologist"
                photo={LINDSAY_PHOTO}
                delay={0}
              />
              <StaffPreviewCard
                name="Sara Baker Brookshire, M.S. CCC-SLP"
                title="Speech Language Pathologist"
                photo={SARA_PHOTO}
                delay={120}
              />
            </div>
            <Reveal className="text-center mt-10" delay={150}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 bg-secondary text-white rounded-full font-heading font-bold hover:bg-secondary-dark hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                Meet Our Full Team <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* CTA strip */}
        <section className="relative overflow-hidden bg-primary py-14 px-4">
          <div className="absolute -top-16 -left-10 w-56 h-56 rounded-full bg-white/10 blob-shape animate-blob pointer-events-none" />
          <div className="absolute -bottom-20 -right-10 w-64 h-64 rounded-full bg-white/10 blob-shape animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />
          <Reveal className="relative max-w-2xl mx-auto text-center text-white">
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Ready to get started?</h2>
            <p className="mt-2 text-white/90 text-base">We're accepting new patients and most major insurance. Reach out today.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9197045542"
                className="px-7 py-3 bg-white text-secondary rounded-full font-heading font-bold hover:bg-cream hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                Call (919) 704-5542
              </a>
              <Link
                to="/contact"
                className="px-7 py-3 bg-white/20 border-2 border-white text-white rounded-full font-heading font-bold hover:bg-white/30 transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />

      {/* Floating mobile call button */}
      <a
        href="tel:9197045542"
        className="md:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg font-heading font-bold text-sm hover:bg-primary-dark transition-colors animate-bounce-soft"
        aria-label="Call TalkAbilities"
      >
        <Phone size={18} />
        Call Us
      </a>
    </div>
  )
}
