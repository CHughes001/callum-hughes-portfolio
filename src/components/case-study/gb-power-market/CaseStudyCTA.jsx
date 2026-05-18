import { Link } from 'react-router-dom'
import { CASE_STUDY_META } from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudySection from '../shared/CaseStudySection.jsx'

export default function CaseStudyCTA() {
  return (
    <CaseStudySection
      id="cs-cta"
      eyebrow="08 · Next steps"
      title="Explore the repository"
      className="pb-8"
    >
      <div className="rounded-lg border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--primary-title)_6%,var(--background-base))] px-6 py-8 max-[640px]:px-4">
        <p className="m-0 max-w-xl font-['Inter',sans-serif] text-[0.98rem] leading-relaxed text-[var(--body-text)]">
          Pipeline code, SQLite schema, and Power BI template live on GitHub. The dashboard
          is shared as exports while on Power BI Free — methodology and transforms are fully
          reproducible.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={CASE_STUDY_META.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--action-colour)] px-5 py-2.5 font-['Inter',sans-serif] text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-[#8a0309]"
          >
            View on GitHub
          </a>
          <a
            href={CASE_STUDY_META.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--line-soft)] px-5 py-2.5 font-['Inter',sans-serif] text-sm font-semibold text-[var(--primary-title)] transition-[transform,border-color,color] duration-200 hover:-translate-y-px hover:border-[rgba(91,140,90,0.35)] hover:text-[var(--accent-link)]"
          >
            LinkedIn
          </a>
          <Link
            to="/#projects"
            className="inline-flex min-h-[44px] items-center justify-center px-2 py-2.5 font-['IBM_Plex_Mono',monospace] text-[0.75rem] uppercase tracking-[0.1em] text-[var(--body-text)] transition-colors hover:text-[var(--accent-link)]"
          >
            ← All projects
          </Link>
        </div>
        <p className="m-0 mt-6 font-['IBM_Plex_Mono',monospace] text-[0.68rem] text-[var(--body-text)] opacity-80">
          Callum Hughes · callumhughes38@gmail.com
        </p>
      </div>
    </CaseStudySection>
  )
}
