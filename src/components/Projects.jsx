import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'

const PROJECTS = [
  {
    title: 'GB Power Market Dashboard',

    description: (
      <>
        <p className="m-0">
          End-to-end analytics dashboard for the GB electricity market,
          combining BMRS-sourced operational data with curated SQL views
          and Power BI reporting layers.
        </p>

        <p className="m-0">
          Built to support repeatable analysis of system prices,
          generation mix, balancing dynamics, renewable penetration,
          and settlement-period performance across the GB power system.
        </p>
      </>
    ),

    techStack: ['Python', 'SQL', 'Power BI', 'BMRS API'],

    outcomes: [
      'Consolidated BMRS and derived metrics into analysis-ready datasets for trading and operations stakeholders.',
      'Reduced manual reporting time through reusable SQL views and refreshable reporting workflows.',
      'Enabled comparison of renewable penetration against imbalance pricing and system stress events.',
    ],

    githubUrl: 'https://github.com/CHughes001/',

    screenshots: [
      '/projects/power-market/dashboard-overview.png',
      '/projects/power-market/spread-analysis.png',
      '/projects/power-market/wind-forecast.png',
      '/projects/power-market/imbalance-analysis.png',
    ],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1120px] scroll-mt-28 px-5 py-20 max-[900px]:py-16 max-[640px]:scroll-mt-36 max-[640px]:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <h2 className="m-0 font-['Cormorant_Garamond',serif] text-4xl font-semibold tracking-tight text-[var(--primary-title)] max-[640px]:text-[1.85rem]">
          Market & Analytics Projects
        </h2>

        <p className="mt-3 max-w-2xl font-['Inter',sans-serif] text-[0.98rem] leading-relaxed text-[var(--body-text)] max-[640px]:text-[0.93rem]">
          Selected work spanning GB power markets, data engineering,
          commercial analytics, and reporting systems — designed to be
          credible in front of trading, operations, and strategy teams.
        </p>
      </motion.div>

      <div
        className="
          mt-12
          grid
          max-w-[760px]
          mx-auto
          grid-cols-1
          gap-8
          max-[640px]:mt-10
          max-[640px]:gap-6
        "
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}