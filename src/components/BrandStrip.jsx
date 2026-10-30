import { useEffect, useRef } from 'react'
import { brands } from '../data.js'

const LOOP = [...brands, ...brands]

/**
 * Pita putih di atas footer: deretan wordmark abu-abu berjalan (marquee),
 * sesuai brand strip pada desain referensi.
 */
export default function BrandStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            root.classList.add('in')
            io.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )
    io.observe(root)
    return () => io.disconnect()
  }, [])

  return (
    <section className="brand-strip" ref={ref} aria-label="Brands worked with">
      <div className="brand-track">
        {LOOP.map((b, i) => (
          <span className="brand-cell" style={{ '--d': `${(i % brands.length) * 70}ms` }} key={i}>
            {b.glyph && (
              <span className="brand-glyph" aria-hidden="true">
                {b.glyph}
              </span>
            )}
            {b.text && <span className="brand-word">{b.text}</span>}
          </span>
        ))}
      </div>
    </section>
  )
}
