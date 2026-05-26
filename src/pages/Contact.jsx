import { useState } from 'react'
import { MapPin, Phone, Mail, Printer } from 'lucide-react'

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import { useInView } from '../hooks/useInView'

function ContactInfoCard() {
  const [ref, visible] = useInView()
  return (
    <div ref={ref} className={`reveal reveal-left ${visible ? 'visible' : ''} bg-white rounded-2xl shadow-md p-7 h-full`}>
      <h2 className="font-heading font-bold text-xl text-secondary mb-5">Get In Touch</h2>

      <div className="space-y-4 text-sm text-gray-700">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">Office Address</p>
            <p>405 Knightdale Station Run, Ste 121</p>
            <p>Knightdale, NC 27545</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone size={18} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">Phone / Text</p>
            <a href="tel:9197045542" className="text-secondary hover:text-secondary-dark transition-colors font-medium">
              (919) 704-5542
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Printer size={18} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">Fax</p>
            <p>(919) 516-XXXX</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail size={18} className="text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">Email</p>
            <a href="mailto:info@talkabilitiessls.com" className="text-secondary hover:text-secondary-dark transition-colors font-medium break-all">
              info@talkabilitiessls.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-primary mt-0.5 shrink-0"><FacebookIcon size={18} /></span>
          <div>
            <p className="font-semibold text-gray-800">Facebook</p>
            <a
              href="https://www.facebook.com/TalkAbilities-Speech-and-Language-Services-PLLC-102188088344683"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary-dark transition-colors font-medium"
            >
              TalkAbilities on Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-100">
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Hours</p>
        <p className="text-sm text-gray-600">Contact us for current availability.<br />New patient openings available now.</p>
      </div>
    </div>
  )
}

function MapCard() {
  const [ref, visible] = useInView()
  return (
    <div ref={ref} className={`reveal reveal-right ${visible ? 'visible' : ''} rounded-2xl overflow-hidden shadow-md h-full min-h-72`} style={{ transitionDelay: '150ms' }}>
      <iframe
        title="TalkAbilities Office Location"
        src="https://maps.google.com/maps?q=405+Knightdale+Station+Run+Ste+121+Knightdale+NC+27545&output=embed&z=15"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '320px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

function ContactForm() {
  const [ref, visible] = useInView()
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={ref} className={`reveal reveal-up ${visible ? 'visible' : ''} bg-white rounded-2xl shadow-md p-7 mt-8`}>
      <h2 className="font-heading font-bold text-xl text-secondary mb-5">Send Us a Message</h2>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={26} className="text-secondary" />
          </div>
          <h3 className="font-heading font-bold text-lg text-gray-800">Thank you!</h3>
          <p className="text-gray-600 mt-2 text-sm">We've received your message and will be in touch soon.</p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', message: '' }) }}
            className="mt-4 text-secondary text-sm font-semibold hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
                Name <span className="text-coral">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(919) 000-0000"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
              Email <span className="text-coral">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
              Message <span className="text-coral">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your child and how we can help..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-full font-heading font-bold text-base hover:bg-primary-dark transition-colors shadow-md"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroBanner
          compact
          eyebrow="Get In Touch"
          headline="Contact Us"
          subheadline="We'd love to hear from you — reach out to schedule a free screening or evaluation"
        />

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ContactInfoCard />
            <MapCard />
          </div>
          <ContactForm />
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
