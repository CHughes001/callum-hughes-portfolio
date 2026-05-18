import { motion } from 'framer-motion'
import {
  CASE_STUDY_META,
  HERO_KPIS,
  HERO_TECH,
} from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudyKpi from '../shared/CaseStudyKpi.jsx'
import TechBadge from '../shared/TechBadge.jsx'

export default function CaseStudyHero() {
  return (
    <header className="case-study-hero relative overflow-hidden rounded-lg border border-[var(--line-soft)] px-6 py-12 max-[640px]:px-4 max-[640px]:py-10">
      <div className="case-study-hero__grid pointer-events-none absolute inset-0 opacity-[0.45]" aria-hidden />
      <div className="case-study-hero__glow pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[rgba(91,140,90,0.08)] blur-3xl" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="relative"
      >
        <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.68rem] uppercase tracking-[0.18em] text-[var(--body-text)]">
          Case study · Energy analytics
        </p>
        <h1 className="m-0 mt-3 max-w-3xl font-['Cormorant_Garamond',serif] text-[clamp(2rem,4.5vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-[var(--primary-title)]">
          {CASE_STUDY_META.title}
        </h1>
        <p className="m-0 mt-2 font-['IBM_Plex_Mono',monospace] text-[0.8rem] tracking-[0.06em] text-[var(--primary-title)]">
          {CASE_STUDY_META.subtitle}
        </p>
        <p className="m-0 mt-5 max-w-2xl font-['Inter',sans-serif] text-[1.02rem] leading-[1.68] text-[var(--body-text)]">
          {CASE_STUDY_META.tagline}
        </p>
        <p className="m-0 mt-3 max-w-2xl font-['Inter',sans-serif] text-[0.92rem] leading-relaxed text-[var(--body-text)] opacity-90">
        A simple analytics pipeline that transforms raw data from Great Britain’s electricity wholesale market (Elexon BMRS data) and commodity prices into a Power-BI fact table. 
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {HERO_TECH.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {HERO_KPIS.map((kpi) => (
            <CaseStudyKpi key={kpi.label} {...kpi} />
          ))}
        </div>
      </motion.div>
    </header>
  )
}
