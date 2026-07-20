import { projects } from '../data/portfolio'
import Section from '../components/ui/Section'
import ProjectCard from '../components/ui/ProjectCard'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected security work."
      description="Hands-on cybersecurity labs covering reconnaissance, network scanning, and packet-level traffic analysis — each project documented on GitHub."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
