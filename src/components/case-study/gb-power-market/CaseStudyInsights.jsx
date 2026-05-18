import { KEY_INSIGHTS, OUTCOME_KPIS } from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudyKpi from '../shared/CaseStudyKpi.jsx'
import CaseStudyPullQuote from '../shared/CaseStudyPullQuote.jsx'
import CaseStudySection from '../shared/CaseStudySection.jsx'

export default function CaseStudyInsights() {
  return (
    <CaseStudySection
      id="cs-insights"
      eyebrow="04 · Key insights"
      title="What the data says"
      lead="April 2026 sample — illustrative, but commercially legible. The patterns match how desk-adjacent teams read wind, CSS, and SP shape."
      tinted
    >
      <div className="grid gap-6 md:grid-cols-3">
        {KEY_INSIGHTS.map((item) => (
          <article
            key={item.title}
            className="rounded-md border border-[var(--line-soft)] bg-[var(--background-base)] p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(91,140,90,0.28)]"
          >
            <p className="m-0 font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4vw,3rem)] font-semibold leading-none tabular-nums text-[var(--primary-title)]">
              {item.stat}
              {item.unit ? (
                <span className="ml-1 font-['Inter',sans-serif] text-[0.35em] font-medium text-[var(--body-text)]">
                  {item.unit}
                </span>
              ) : null}
            </p>
            <h3 className="m-0 mt-3 font-['Cormorant_Garamond',serif] text-xl font-semibold text-[var(--primary-title)]">
              {item.title}
            </h3>
            <p className="m-0 mt-2 font-['Inter',sans-serif] text-[0.9rem] leading-relaxed text-[var(--body-text)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 max-w-3xl">
        <CaseStudyPullQuote>
          CCGTs lost £22/MWh on variable costs across the window — yet medium-wind days flipped
          clean spark to +£8/MWh. Wind is not background noise; it is the margin story.
        </CaseStudyPullQuote>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 border-t border-[var(--line-soft)] pt-10 sm:grid-cols-4">
        {OUTCOME_KPIS.map((k) => (
          <CaseStudyKpi key={k.label} value={k.value} label={k.label} />
        ))}
      </div>
    </CaseStudySection>
  )
}
