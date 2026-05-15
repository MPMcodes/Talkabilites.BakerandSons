export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-white text-center py-2 px-4 text-sm font-semibold leading-snug">
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
