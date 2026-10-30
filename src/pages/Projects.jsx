import { oldProjects } from '../data'
import { Reveal, useTitle } from '../hooks'
import { ProjectTrack } from '../components/ProjectCarousel'

export default function Projects() {
  useTitle('Work Index')
  return (
    <>
      <section className="section work">
        <Reveal>
          <h1 className="work-h1">Work Index</h1>
        </Reveal>
      </section>

      <ProjectTrack />

      <section className="section old-projects">
        <Reveal className="sec-label label">{`//`}&nbsp;&nbsp;Old projects</Reveal>
        <div className="old-rows">
          {oldProjects.map(([name, year, tag], i) => (
            <Reveal key={name + i} delay={i * 30}>
              <a className="old-row" href="#" onClick={(e) => e.preventDefault()}>
                <span className="old-name">
                  {name} <small className="mono">({year})</small>
                </span>
                <span>{tag}</span>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
