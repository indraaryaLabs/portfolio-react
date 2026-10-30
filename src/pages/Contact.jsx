import { useState } from 'react'
import { contact } from '../data'
import { Reveal, useTitle } from '../hooks'
import { IconInstagram, IconLinkedin, IconTwitter } from '../components/icons'

const SOCIAL_ICONS = { Linkedin: IconLinkedin, Twitter: IconTwitter, Instagram: IconInstagram }

export default function Contact() {
  useTitle('Contact')
  const [sent, setSent] = useState(false)

  return (
    <section className="section contact-page">
      <div className="contact-grid">
        <Reveal className="contact-title">
          <h1>
            Reach
            <br />
            Out
          </h1>
        </Reveal>
        <div className="contact-body">
          <Reveal as="h2" className="contact-sub" delay={100}>
            Tell me about your idea.
            <br />
            I&rsquo;ll take it from there.
          </Reveal>
          <Reveal delay={180}>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <input type="text" name="name" placeholder="Your name" required aria-label="Your name" />
              <input type="text" name="job" placeholder="Job title" aria-label="Job title" />
              <input type="email" name="email" placeholder="Email" required aria-label="Email" />
              <textarea name="message" placeholder="Message" rows={2} required aria-label="Message" />
              <button type="submit" className="pill pill-solid">
                {sent ? 'Message Sent ✓' : 'Send Message'}
              </button>
              {sent && <p className="label form-note">Placeholder form — connect it to your own email service later.</p>}
            </form>
          </Reveal>
          <Reveal className="contact-info" delay={240}>
            <p>
              <strong>Office:</strong> {contact.office}
            </p>
            <p>
              <strong>Mail:</strong> <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </p>
          </Reveal>
          <Reveal className="contact-socials" delay={300}>
            {contact.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.name]
              return (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer noopener">
                  <Icon /> {s.name}
                </a>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
