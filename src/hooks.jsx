import { useEffect, useRef } from 'react'

/** Muncul saat elemen masuk viewport (scroll reveal). */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -4% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

/** Judul dokumen per halaman. */
export function useTitle(title) {
  useEffect(() => {
    document.title = `${title} — Your Name`
  }, [title])
}
