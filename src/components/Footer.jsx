import { useEffect, useState } from 'react'
import BlendMarquee from './BlendMarquee'
import { IconArrowUp, IconInstagram, IconLinkedin, IconTwitter } from './icons'
import { IMG, contact } from '../data'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="footer">
      <img className="footer-portrait" src={IMG.portrait} alt="" loading="lazy" />
      <div className="footer-marquee">
        <BlendMarquee text="Reach Out" size="clamp(90px, 10vw, 148px)" duration={26} />
      </div>
      <div className="footer-left">
        <div className="footer-info">
          <p>
            <strong>Office:</strong> {contact.office}
          </p>
          <p>
            <strong>Mail:</strong> <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
          </p>
        </div>
        <div className="footer-socials">
          {contact.socials.map((s) => {
            const Icon = s.name === 'Linkedin' ? IconLinkedin : s.name === 'Twitter' ? IconTwitter : IconInstagram
            return (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer noopener">
                <Icon /> {s.name}
              </a>
            )
          })}
        </div>
      </div>
      <button
        className={`to-top ${showTop ? 'show' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IconArrowUp />
      </button>
    </footer>
  )
}
