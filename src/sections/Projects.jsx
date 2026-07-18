import { projects } from '../data/portfolio'
import Section from '../components/ui/Section'
import ProjectCard from '../components/ui/ProjectCard'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected security work."
      description="Hands-on projects from network scanning and traffic analysis to application builds — all available on GitHub."
    >
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
