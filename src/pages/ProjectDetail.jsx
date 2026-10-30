import { Link, useParams } from 'react-router-dom'
import { projects } from '../data'
import { Reveal, useTitle } from '../hooks'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx === -1) return <NotFound />

  const project = projects[idx]
  const others = projects.filter((p) => p.slug !== slug).slice(0, 6)

  return <DetailInner project={project} idx={idx} others={others} />
}

function DetailInner({ project, idx, others }) {
  useTitle(`(${project.year}) ${project.name}`)

  return (
    <>
      {/* Hero image full-bleed */}
      <Reveal className="detail-hero" delay={60}>
        <img src={project.thumb} alt={`${project.name} hero`} loading="eager" />
      </Reveal>

      {/* Overview */}
      <section className="section detail-overview">
        <Reveal as="h1" className="detail-title" delay={80}>
          {project.name}
        </Reveal>
        <div className="detail-right">
          <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;Overview</Reveal>
          <Reveal as="p" className="detail-blurb" delay={140}>
            {project.blurb}
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <div className="detail-gallery">
        {project.gallery.map((src, i) => (
          <Reveal key={src} delay={60}>
            <img src={src} alt={`${project.name} — image ${i + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </div>

      {/* More projects — grid kecil 3 kolom seperti aslinya */}
      <section className="section more-projects">
        <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;More Projects</Reveal>
        <div className="more-grid">
          {others.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link to={`/projects/${p.slug}`} className="more-card">
                <div className="more-thumb">
                  <img src={p.thumb} alt={`${p.name} preview`} loading="lazy" />
                </div>
                <span className="more-year mono">({p.year})</span>
                <span className="more-name">{p.name}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
