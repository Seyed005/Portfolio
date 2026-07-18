import { skills } from '../data/portfolio'
import Section from '../components/ui/Section'
import SkillCard from '../components/ui/SkillCard'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical foundation."
      description="Categorized capabilities across cybersecurity, programming, tools, and operating systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((group, index) => (
          <SkillCard
            key={group.category}
            category={group.category}
            items={group.items}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
