import { Link } from 'react-router-dom'
import { useTitle } from '../hooks'

export default function NotFound() {
  useTitle('Page Not Found')
  return (
    <section className="section" style={{ textAlign: 'center', paddingBlock: 'clamp(80px, 12vw, 180px)' }}>
      <span className="label">Error 404</span>
      <h1 className="display" style={{ fontSize: 'clamp(56px, 10vw, 160px)', margin: '16px 0 28px' }}>
        Not Found
      </h1>
      <p className="lead" style={{ margin: '0 auto 36px' }}>
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link to="/" className="btn">
        Back to Home <span className="arrow">→</span>
      </Link>
    </section>
  )
}
