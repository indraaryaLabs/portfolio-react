import { useEffect, useState } from 'react'
import { IMG, contact, projects, services, testimonials } from '../data'
import { Reveal, useTitle } from '../hooks'
import BlendMarquee from '../components/BlendMarquee'
import { ProjectStack } from '../components/ProjectCarousel'
import BrandStrip from '../components/BrandStrip'
import { IconInstagram, IconLinkedin, IconTwitter } from '../components/icons'

const SOCIAL_ICONS = { Linkedin: IconLinkedin, Twitter: IconTwitter, Instagram: IconInstagram }

export default function Home() {
  useTitle('Web Designer & Art Director')
  return (
    <>
      <HeroMarquee />
      <Intro />
      <Services />
      <Projects />
      <Testimonials />
      <BrandStrip />
    </>
  )
}

/* ------------------------------------------------------------------ Hero */
function HeroMarquee() {
  return (
    <section className="hero">
      <h1 className="sr-only">Your Name — Web Designer &amp; Art Director</h1>
      <img className="hero-portrait" src={IMG.portrait} alt="Portrait" loading="eager" />
      <div className="hero-marquee">
        <BlendMarquee text="Your Name" size="clamp(110px, 12.5vw, 190px)" duration={24} />
      </div>
      <div className="hero-socials">
        {contact.socials.map((s) => {
          const Icon = SOCIAL_ICONS[s.name]
          return (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer noopener">
              <Icon /> {s.name}
            </a>
          )
        })}
      </div>
      <div className="hero-roles">
        <h2>
          Web Designer
          <br />
          Art Director
        </h2>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Intro */
function Intro() {
  return (
    <section className="section intro">
      <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;Intro</Reveal>
      <div className="intro-col">
        <Reveal as="p" className="intro-text" delay={120}>
          Placeholder intro — replace with your own story in two or three short lines. Who you are, who you work with,
          and what you care about when designing for the web.
        </Reveal>
      </div>
      <Reveal as="p" className="intro-note" delay={200}>
        Bringing your vision to life quickly and efficiently — without the bloated process or agency overhead.
      </Reveal>
    </section>
  )
}

/* ----------------------------------------------------------- Services */
function Services() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const blocks = document.querySelectorAll('.svc-block')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.i))
        })
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    )
    blocks.forEach((b) => io.observe(b))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section services">
      <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;Services</Reveal>
      <div className="svc-grid">
        <div className="svc-num-wrap">
          <div className="svc-num" key={active}>
            {String(active + 1).padStart(2, '0')}
          </div>
        </div>
        <div className="svc-blocks">
          {services.map((s, i) => (
            <Reveal as="div" className="svc-block" data-i={i} key={s.name} delay={i * 40}>
              <h3 className="svc-title">{s.name}</h3>
              <p className="svc-desc">{s.desc}</p>
              <ul className="svc-list">
                {s.items.map((item, j) => (
                  <li key={item}>
                    <span>{item}</span>
                    <span className="mono">{String(j + 1).padStart(2, '0')}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- Projects */
function Projects() {
  return (
    <section className="section projects">
      <span className="sec-label label">{`//`}&nbsp;&nbsp;Projects</span>
      <ProjectStack items={projects.slice(0, 4)} />
    </section>
  )
}

/* ------------------------------------------------------- Testimonials */
function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % testimonials.length), 7000)
    return () => clearInterval(t)
  }, [idx])

  const t = testimonials[idx]

  return (
    <section className="section testimonials">
      <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;Testimonials</Reveal>
      <div className="t-body">
        <blockquote className="t-quote" key={idx}>
          <Reveal as="p" className="t-text" delay={60}>
            &ldquo;{t.quote}&rdquo;
          </Reveal>
          <Reveal as="div" className="t-author" delay={140}>
            <p className="t-byline">
              <span className="mono">//</span>
              &nbsp;&nbsp;
              <strong>{t.name}</strong>
            </p>
            <p className="t-role">{t.role}</p>
          </Reveal>
        </blockquote>
        <div className="t-avatars">
          {testimonials.map((p, i) => (
            <button
              key={p.name}
              className={`t-avatar ${i === idx ? 'active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
            >
              <img src={p.photo} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
