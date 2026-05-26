import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const LOGO = 'https://images.squarespace-cdn.com/content/v1/5f8397bd8502ed181768b927/be190c52-14f3-42fc-a758-0cc1a282ee09/94AF4A2F-B264-454A-9AD0-B1EE11E19F45.PNG?format=1500w'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <nav
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center shrink-0 group">
          <img
            src={LOGO}
            alt="TalkAbilities logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`nav-underline px-4 py-2 rounded-full text-sm font-bold font-heading transition-colors ${
                location.pathname === to
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:9197045542"
            className="ml-3 inline-flex items-center gap-2 px-5 py-2 bg-secondary text-white rounded-full text-sm font-bold font-heading hover:bg-secondary-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            <Phone size={15} />
            (919) 704-5542
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-lg">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`block px-4 py-3 rounded-xl text-sm font-bold font-heading my-1 transition-colors ${
                location.pathname === to
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:9197045542"
            className="block mt-2 px-4 py-3 bg-secondary text-white rounded-xl text-sm font-bold font-heading text-center hover:bg-secondary-dark transition-colors"
          >
            Call (919) 704-5542
          </a>
        </div>
      )}
    </nav>
  )
}
