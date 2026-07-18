import { useMemo, useState } from 'react'
import {
  certificationsSection,
  certificationStats,
} from '../data/portfolio'
import { resolveCertificates, splitCertificates } from '../data/resolveCertificates'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import CertificateCard from '../components/ui/CertificateCard'
import CertificateModal from '../components/ui/CertificateModal'
import CertificateStats from '../components/ui/CertificateStats'

export default function Certifications() {
  const certificates = useMemo(() => resolveCertificates(), [])
  const { featured, additional } = useMemo(
    () => splitCertificates(certificates),
    [certificates],
  )
  const [active, setActive] = useState(null)

  return (
    <Section
      id="certifications"
      eyebrow={certificationsSection.eyebrow}
      title={certificationsSection.title}
      description={certificationsSection.description}
    >
      <CertificateStats
        certificateCount={certificates.length}
        learningAreas={certificationStats.learningAreas}
        careerFocus={certificationStats.careerFocus}
      />

      {featured.length > 0 && (
        <div className="mb-14 sm:mb-16">
          <Reveal className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Featured
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      )}

      {additional.length > 0 && (
        <div>
          <Reveal className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Additional Certifications
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additional.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      )}

      {certificates.length === 0 && (
        <p className="rounded-2xl border border-dashed border-line bg-surface px-6 py-10 text-center text-sm text-muted">
          Add certificate images to <code className="text-ink">public/certificates/</code> to
          populate this gallery.
        </p>
      )}

      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </Section>
  )
}
