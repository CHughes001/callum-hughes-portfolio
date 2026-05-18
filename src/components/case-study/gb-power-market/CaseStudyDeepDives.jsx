import Accordion from '../../Accordion.jsx'
import { DEEP_DIVE_ITEMS } from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudySection from '../shared/CaseStudySection.jsx'

function formatContent(text) {
  const blocks = text.split('\n\n')
  return blocks.map((block) => {
    if (block.startsWith('|')) {
      return (
        <pre
          key={block.slice(0, 24)}
          className="mt-2 overflow-x-auto rounded border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_90%,#fff)] p-3 font-['IBM_Plex_Mono',monospace] text-[0.72rem] leading-relaxed text-[var(--body-text)]"
        >
          {block}
        </pre>
      )
    }
    return (
      <p key={block.slice(0, 32)} className="m-0 mt-2 whitespace-pre-wrap first:mt-0">
        {block.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`(.*?)`/g, '$1')}
      </p>
    )
  })
}

const ITEMS = DEEP_DIVE_ITEMS.map((item) => ({
  title: item.title,
  content: <>{formatContent(item.content)}</>,
}))

export default function CaseStudyDeepDives() {
  return (
    <CaseStudySection
      id="cs-deep-dives"
      eyebrow="05 · Technical detail"
      title="Deeper dives"
      lead="Optional depth for technical interviewers — market logic, transforms, and pipeline mechanics."
    >
      <Accordion items={ITEMS} compact />
    </CaseStudySection>
  )
}
