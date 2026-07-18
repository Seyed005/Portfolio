import { achievements } from '../data/portfolio'
import Section from '../components/ui/Section'
import AchievementCard from '../components/ui/AchievementCard'

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Momentum & practice."
      description="Competitive ranking, learning paths, and consistent hands-on lab work toward internship readiness."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <AchievementCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </Section>
  )
}
