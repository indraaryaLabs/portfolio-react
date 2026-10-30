/**
 * Teks raksasa berjalan (marquee) dengan efek blend-difference:
 * terlihat gelap di latar terang, terang saat menimpa foto gelap.
 */
export default function BlendMarquee({ text = 'Your Name', size = 'clamp(110px, 12.5vw, 190px)', duration = 24, className = '' }) {
  const items = Array.from({ length: 4 })
  return (
    <div className={`blend-marquee ${className}`} style={{ '--bm-size': size, '--bm-duration': `${duration}s` }}>
      <div className="blend-marquee-track">
        {items.map((_, i) => (
          <span key={i}>
            {text}&thinsp;&ndash;
          </span>
        ))}
      </div>
    </div>
  )
}
