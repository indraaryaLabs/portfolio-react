import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const close = () => setOpen(false)
  const cls = ({ isActive }) => (isActive ? 'active' : '')

  // Nav menyembunyikan diri saat scroll turun, muncul lagi saat scroll naik.
  useEffect(() => {
    let last = window.scrollY
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY
        if (y < 140) setHidden(false)
        else if (y > last + 6) setHidden(true)
        else if (y < last - 6) setHidden(false)
        last = y
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${hidden ? 'nav-hidden' : ''}`}>
      <div className={`nav-inner ${open ? 'open' : ''}`}>
        <Link to="/" className="nav-logo" onClick={close}>
          &copy; Your Name &amp; Strategy
        </Link>
        <NavLink to="/projects" className={cls} onClick={close}>
          Projects
        </NavLink>
        <NavLink to="/about" className={cls} onClick={close}>
          About
        </NavLink>
        <NavLink to="/contact" className={cls + ' nav-last'} onClick={close}>
          Contact
        </NavLink>
      </div>
      <button className="nav-burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span>{open ? '×' : '≡'}</span>
      </button>
    </header>
  )
}
