import { Link } from 'react-router-dom'
import { GraduationCap, Shield, Baby, HeartPulse, Video, Users, Search, Phone, ArrowRight } from 'lucide-react'
import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import ServiceCard from '../components/ServiceCard'
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

function HighlightCard({ Icon, title, desc, color, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`fade-up bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${color}20` }}>
        <Icon size={26} style={{ color }} />
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
      className={`fade-up bg-white rounded-2xl shadow-md overflow-hidden text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/2] overflow-hidden bg-gray-100">
        <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-base text-secondary">{name}</h3>
        <p className="text-coral text-xs font-semibold mt-1">{title}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [servicesRef, servicesVisible] = useInView()
  const [staffRef, staffVisible] = useInView()

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroBanner
          headline="TalkAbilities Speech and Language Services, PLLC"
          subheadline="Serving Knightdale, North Carolina and surrounding areas"
          cta={{ label: 'Contact Us Today', to: '/contact' }}
        />

        {/* Why TalkAbilities */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-secondary">Why TalkAbilities?</h2>
            <div className="w-10 h-1 bg-primary rounded-full mx-auto mt-3 mb-3" />
            <p className="text-gray-500 text-base">Caring, experienced therapy for every child's unique journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <HighlightCard key={h.title} {...h} delay={i * 100} />
            ))}
          </div>
        </section>

        {/* Services Preview */}
        <section ref={servicesRef} className="bg-white py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className={`fade-up text-center mb-10 ${servicesVisible ? 'visible' : ''}`}>
              <h2 className="font-heading font-bold text-3xl text-secondary">What We Treat</h2>
              <div className="w-10 h-1 bg-primary rounded-full mx-auto mt-3 mb-3" />
              <p className="text-gray-500 text-base">Comprehensive speech and language services for children ages 1–18+.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {servicePreview.map((s, i) => (
                <ServiceCard key={s.title} {...s} accentColor={s.color} delay={i * 80} />
              ))}
            </div>
            <div className={`fade-up text-center mt-8 ${servicesVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-full font-heading font-bold hover:bg-primary-dark transition-colors shadow-md"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Staff Preview */}
        <section ref={staffRef} className="max-w-6xl mx-auto px-4 py-14">
          <div className={`fade-up text-center mb-10 ${staffVisible ? 'visible' : ''}`}>
            <h2 className="font-heading font-bold text-3xl text-secondary">Meet Our Team</h2>
            <div className="w-10 h-1 bg-primary rounded-full mx-auto mt-3 mb-3" />
            <p className="text-gray-500 text-base">Passionate, experienced speech-language pathologists dedicated to your child's success.</p>
          </div>
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
          <div className={`fade-up text-center mt-8 ${staffVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3 bg-secondary text-white rounded-full font-heading font-bold hover:bg-secondary-dark transition-colors shadow-md"
            >
              Meet Our Full Team <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-primary py-12 px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Ready to get started?</h2>
            <p className="mt-2 text-white/90 text-base">We're accepting new patients and most major insurance. Reach out today.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9197045542"
                className="px-7 py-3 bg-white text-secondary rounded-full font-heading font-bold hover:bg-cream transition-colors shadow-md"
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
          </div>
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
