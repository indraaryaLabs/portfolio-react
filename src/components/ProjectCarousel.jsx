import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data'

/** Kartu proyek: gambar full-bleed di kiri + panel info berbingkai di kanan. */
export function ProjectCard({ p }) {
  return (
    <Link to={`/projects/${p.slug}`} className="pc-card">
      <div className="pc-media">
        <img src={p.thumb} alt={`${p.name} preview`} loading="lazy" />
      </div>
      <div className="pc-panel">
        <span className="pc-year mono">(&thinsp;{p.year}&thinsp;)</span>
        <h3 className="pc-title">{p.name}</h3>
        <p className="pc-desc">{p.blurb}</p>
        <ul className="pc-tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

/**
 * Section hitam di Home: kartu full-width ditumpuk sticky,
 * kartu berikutnya menimpa kartu sebelumnya yang meredup (scrim).
 */
export function ProjectStack({ items = projects }) {
  const wrapRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = Array.from(wrap.querySelectorAll('.pc-card'))
    if (cards.length < 2) return
    let raf = 0

    const update = () => {
      raf = 0
      const vh = window.innerHeight
      for (let i = 0; i < cards.length - 1; i++) {
        const next = cards[i + 1].getBoundingClientRect().top
        // makin dekat kartu berikutnya menutupi → makin gelap & makin mengecil
        const prog = Math.min(Math.max((vh - next) / vh, 0), 1)
        cards[i].style.setProperty('--scrim', prog.toFixed(3))
      }
      cards[cards.length - 1].style.setProperty('--scrim', 0)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="ps-stack" ref={wrapRef}>
      {items.map((p) => (
        <ProjectCard p={p} key={p.slug} />
      ))}
    </div>
  )
}

/**
 * Work Index: baris kartu besar dalam panel sticky; digeser horizontal
 * dengan drag / trackpad seperti aslinya (tanpa transform terikat scroll).
 */
export function ProjectTrack() {
  return (
    <div className="pt-wrap">
      <div className="pt-sticky">
        <div className="pt-row">
          {projects.map((p) => (
            <ProjectCard p={p} key={p.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}
