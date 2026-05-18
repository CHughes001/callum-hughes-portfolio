import { TECH_STACK_GROUPS } from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudySection from '../shared/CaseStudySection.jsx'
import TechBadge from '../shared/TechBadge.jsx'

export default function CaseStudyTechStack() {
  return (
    <CaseStudySection
      id="cs-stack"
      eyebrow="07 · Stack"
      title="Technologies"
      lead="Lean toolchain — no unnecessary dependencies; each layer has a clear ownership boundary."
    >
      <div className="grid gap-8 sm:grid-cols-3">
        {TECH_STACK_GROUPS.map((group) => (
          <div key={group.category}>
            <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--primary-title)]">
              {group.category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </CaseStudySection>
  )
}
