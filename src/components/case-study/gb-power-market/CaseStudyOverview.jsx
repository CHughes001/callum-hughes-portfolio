import CaseStudySection from '../shared/CaseStudySection.jsx'
import CaseStudyPullQuote from '../shared/CaseStudyPullQuote.jsx'

export default function CaseStudyOverview() {
  return (
    <CaseStudySection
      id="cs-overview"
      eyebrow="01 · Overview"
      title="Problem & approach"
      lead="Great Britain's electricity prices and system conditions change at half-hourly resolution, but daily averages conceal scarcity spikes, wind variability, and negative pricing events."
    >
      
        <div className="space-y-4 font-['Inter',sans-serif] text-[0.96rem] leading-[1.68] text-[var(--body-text)]">
          <p className="m-0">
            This pipeline ingests Elexon BMRS data, applies GB market economics at
            half-hour resolution, and serves a Power BI model for balancing prices,
            fuel mix, and dispatch margins.
          </p>
          
        
        
      </div>
    </CaseStudySection>
  )
}
