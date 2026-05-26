// Infinite horizontal scroller. Children are duplicated so the loop is seamless.
export default function Marquee({ items, speed = 'normal', renderItem }) {
  const animClass = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
  const loop = [...items, ...items]
  return (
    <div className="marquee-mask w-full overflow-hidden">
      <div className={`marquee-track gap-3 ${animClass}`}>
        {loop.map((item, i) => (
          <div key={i} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  )
}
