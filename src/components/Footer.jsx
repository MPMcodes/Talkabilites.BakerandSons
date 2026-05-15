import { Phone, Mail } from 'lucide-react'

function FacebookIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const FOOTER_LOGO = 'https://images.squarespace-cdn.com/content/v1/5f8397bd8502ed181768b927/be190c52-14f3-42fc-a758-0cc1a282ee09/94AF4A2F-B264-454A-9AD0-B1EE11E19F45.PNG?format=1500w'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={FOOTER_LOGO}
              alt="TalkAbilities"
              className="h-16 w-auto object-contain rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-heading font-bold text-lg leading-tight">
              TalkAbilities Speech and Language Services, PLLC
            </p>
            <p className="text-white/80 text-sm mt-1">
              Serving Knightdale, North Carolina and surrounding areas
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start sm:gap-6 gap-2 mt-4 text-sm">
              <a
                href="tel:9197045542"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone size={15} />
                (919) 704-5542
              </a>
              <a
                href="mailto:info@talkabilitiessls.com"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail size={15} />
                info@talkabilitiessls.com
              </a>
              <a
                href="https://www.facebook.com/TalkAbilities-Speech-and-Language-Services-PLLC-102188088344683"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                aria-label="TalkAbilities on Facebook"
              >
                <FacebookIcon size={15} />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs text-white/60">
          © {year} TalkAbilities Speech and Language Services, PLLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
