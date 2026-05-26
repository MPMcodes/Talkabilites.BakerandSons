export default function AnnouncementBar() {
  return (
    <div
      className="text-white text-center py-2 px-4 text-sm font-semibold leading-snug animated-gradient"
      style={{ background: 'linear-gradient(100deg, #C9A84C, #A8872E, #C9A84C)', backgroundSize: '200% auto' }}
    >
      <span className="relative inline-flex h-2 w-2 mr-2 align-middle">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-pulse-ring" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </span>
      We currently have new patient openings &amp; accept most major insurance.{' '}
      <a
        href="tel:9197045542"
        className="underline underline-offset-2 hover:text-white/80 transition-colors whitespace-nowrap"
      >
        Call, text
      </a>{' '}
      or{' '}
      <a
        href="mailto:info@talkabilitiessls.com"
        className="underline underline-offset-2 hover:text-white/80 transition-colors"
      >
        email
      </a>{' '}
      us today!
    </div>
  )
}
