import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'

const PROJECTS = [
  {
    title: 'GB Power Market Analytics Pipeline',
    image: '/projects/gb-power-market/market-regime-full.png',
    caseStudyTo: '/projects/gb-power-market',
    description: (
      <>
        <p className="m-0">
          End-to-end BMRS → SQLite → Power BI pipeline preserving settlement-period
          granularity and trader-relevant spread metrics.
        </p>
        <p className="m-0">
          Quantifies how wind penetration suppresses CCGT clean spark spreads and drives
          intraday balancing price volatility — April 2026 sample.
        </p>
      </>
    ),
    techStack: ['Python', 'SQL', 'Power BI', 'BMRS API'],
    outcomes: [
      '£65/MWh CSS swing between high and medium wind days from live market data.',
      '63 negative SBP periods surfaced at SP resolution — invisible in daily averages.',
      'Modular pipeline: staging, transformation, and star-schema serving for Power BI.',
    ],
    githubUrl: 'https://github.com/CHughes001/',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1120px] scroll-mt-1 px-5 py-20 max-[900px]:py-16 max-[640px]:scroll-mt-36 max-[640px]:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <h2 className="m-0 font-['Cormorant_Garamond',serif] text-4xl font-semibold tracking-tight text-[var(--primary-title)] max-[640px]:text-[1.85rem]">
          Selected analytics projects
        </h2>
        <p className="mt-3 max-w-2xl font-['Inter',sans-serif] text-[0.98rem] leading-relaxed text-[var(--body-text)] max-[640px]:text-[0.93rem]">
          Work designed to show my data engineering and commercial analytics skills. 
        </p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 gap-8 max-[640px]:mt-10 max-[640px]:gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}
