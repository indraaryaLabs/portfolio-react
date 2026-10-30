import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IMG, awards, facts } from '../data'
import { Reveal, useTitle } from '../hooks'

const SMOKE_QUOTE =
  'Distinctive design for brands with taste — built to stand apart in a world of sameness.'
/* idx kata pertama yang berwarna merah (setelah "brands") */
const SMOKE_RED_FROM = 4

/** Pita gelap: kata per kata menyala mengikuti scroll (putih → merah → putih). */
function SmokeBand() {
  const ref = useRef(null)
  const words = SMOKE_QUOTE.split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 saat pita mulai masuk viewport bawah, 1 saat mencapai tengah layar
      const prog = Math.min(Math.max((vh * 0.9 - r.top) / (vh * 0.55), 0), 1)
      const spans = el.querySelectorAll('.sm-word')
      const n = Math.round(prog * spans.length)
      spans.forEach((s, i) => s.classList.toggle('lit', i < n))
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
    <section className="smoke-band" ref={ref}>
      <img src={IMG.aboutSmoke} alt="" loading="lazy" />
      <p>
        {words.map((w, i) => (
          <span className={`sm-word ${i >= SMOKE_RED_FROM ? 'sm-red' : ''}`} key={i}>
            {w}{' '}
          </span>
        ))}
      </p>
    </section>
  )
}

export default function About() {
  useTitle('About')

  return (
    <>
      {/* Statement */}
      <section className="section about-head">
        <div className="about-statement">
          <Reveal className="about-avatar">
            <img src={IMG.aboutAvatar} alt="Portrait kecil" />
          </Reveal>
          <Reveal as="h1" className="about-h1" delay={100}>
            I&rsquo;m a designer and art director with over 25 years of experience turning ideas into brands and
            products. I work closely with founders, marketing teams, and developers to create visual systems that
            scale &mdash; from brand strategy to launch-ready interfaces.
          </Reveal>
          <div className="about-cols">
            <Reveal as="p" className="about-col" delay={140}>
              Placeholder — your origin story goes here: how you started, what you learned, and the break that shaped
              the way you work today.
            </Reveal>
            <Reveal as="p" className="about-col" delay={200}>
              Placeholder — describe the mix of brand and product in your work, the teams you join, and the pace you
              keep.
            </Reveal>
            <Reveal delay={260}>
              <Link to="/contact" className="pill">
                Let&rsquo;s Talk
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wide image */}
      <Reveal className="about-wide" delay={80}>
        <img src={IMG.aboutWide} alt="Selected work" loading="lazy" />
      </Reveal>

      {/* Awards */}
      <section className="section awards">
        <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;Recognition and Awards</Reveal>
        <div className="awards-rows">
          {awards.map((a, i) => (
            <Reveal key={a.name + i} delay={i * 30}>
              <a
                className="aw-row"
                href="https://awwwards.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="aw-name">{a.name}</span>
                <span>{a.award}</span>
                <span>{a.source}</span>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Smoke statement band */}
      <SmokeBand />

      {/* Facts */}
      <section className="section facts">
        <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;Facts</Reveal>
        <div className="facts-rows">
          {facts.map((f, i) => (
            <Reveal as="div" className="fact-block" key={f.title} delay={i * 40}>
              <div className="fact-num" aria-hidden="true">
                {String(f.value).padStart(2, '0')}
              </div>
              <div className="fact-content">
                <h3 className="svc-title">{f.title}</h3>
                <p className="svc-desc">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
