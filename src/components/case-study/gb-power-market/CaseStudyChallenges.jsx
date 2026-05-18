import { CHALLENGES } from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudySection from '../shared/CaseStudySection.jsx'

export default function CaseStudyChallenges() {
  return (
    <CaseStudySection
      id="cs-challenges"
      eyebrow="06 · Delivery"
      title="Challenges & learnings"
      lead="Production energy analytics friction — and how each constraint shaped the design."
      tinted
    >
      <ol className="m-0 list-none space-y-0 p-0">
        {CHALLENGES.map((row, i) => (
          <li
            key={row.problem}
            className="grid gap-4 border-b border-[var(--line-soft)] py-6 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-6"
          >
            <div>
              <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.62rem] uppercase tracking-[0.14em] text-[var(--body-text)]">
                {String(i + 1).padStart(2, '0')} · Problem
              </p>
              <p className="m-0 mt-1 font-medium text-[var(--primary-title)]">{row.problem}</p>
            </div>
            <div>
              <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.62rem] uppercase tracking-[0.14em] text-[var(--body-text)]">
                Resolution
              </p>
              <p className="m-0 mt-1 text-[0.9rem] leading-relaxed text-[var(--body-text)]">
                {row.resolution}
              </p>
            </div>
            <div>
              <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.62rem] uppercase tracking-[0.14em] text-[var(--accent-link)]">
                Learning
              </p>
              <p className="m-0 mt-1 text-[0.9rem] leading-relaxed text-[var(--body-text)]">
                {row.learning}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  )
}
