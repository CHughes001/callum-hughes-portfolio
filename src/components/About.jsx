const SKILL_GROUPS = [
  {
    title: 'Data & Analytics',
    items: [
      'Python for analytics, automation, and reproducible notebooks',
      'SQL for joins, windowing, and performance-conscious aggregations',
      'Power BI modelling, DAX, and stakeholder-ready visuals',
      'Pipelines for validation, QA, and documentation alongside delivery',
    ],
  },
  {
    title: 'Energy Market Analysis',
    items: [
      'GB power market fundamentals and settlement-period thinking',
      'BMRS data ingestion, cleaning, and interpretation',
      'Balancing and system price behaviour; imbalance cost drivers',
      'Renewable generation analysis and penetration metrics',
      'Market spreads and comparative pricing studies',
    ],
  },
  {
    title: 'Engineering & Modelling',
    items: [
      'Mechanical engineering fundamentals applied to energy systems context',
      'Structured problem framing for infrastructure and operations datasets',
      'Interest in the energy transition, grid flexibility, and asset-level constraints',
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1180px] scroll-mt-28 px-6 py-20 max-[900px]:py-16 max-[640px]:scroll-mt-36 max-[640px]:px-5 max-[640px]:py-14"
    >
      <div className="grid grid-cols-1 gap-14 min-[901px]:grid-cols-[0.9fr_1.5fr] min-[901px]:gap-20">
        <div className="min-w-0">
          <h2 className="m-0 font-['Cormorant_Garamond',serif] text-4xl font-semibold tracking-tight text-[var(--primary-title)] max-[640px]:text-[1.85rem]">
            About
          </h2>

          <p className="mt-4 max-w-md font-['IBM_Plex_Mono',monospace] text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-[var(--body-text)]">
            London · Energy analytics · Data-driven market analysis
          </p>
        </div>

        <div className="min-w-0">

  {/* BIO TEXT */}
  <div className="max-w-[760px] space-y-8 font-['Inter',sans-serif] text-[1rem] leading-[1.78] text-[var(--body-text)] max-[640px]:text-[0.95rem]">
    <p className="m-0 text-pretty">
      Most of my work centres around{' '}
      <strong className="font-medium text-[var(--primary-title)]">
        Python
      </strong>
      ,{' '}
      <strong className="font-medium text-[var(--primary-title)]">
        SQL
      </strong>
      , and{' '}
      <strong className="font-medium text-[var(--primary-title)]">
        Power BI
      </strong>{' '}
      — building data pipelines, analysing market data, and creating dashboards that
      make complex information easier to understand.
    </p>

    <p className="m-0 text-pretty">
      Recently, I’ve been focused on the{' '}
      <strong className="font-medium text-[var(--primary-title)]">
        GB power market
      </strong>
      , working with{' '}
      <strong className="font-medium text-[var(--primary-title)]">
        BMRS data
      </strong>{' '}
      to explore system prices, balancing dynamics, renewable generation, and wider
      market behaviour. I’m particularly interested in the commercial side of the
      energy transition and the role data plays in supporting decision-making.
    </p>

    <p className="m-0 text-pretty">
      I am motivated by the pace of the{' '}
      <strong className="font-medium text-[var(--primary-title)]">
        energy transition
      </strong>{' '}
      and the need for transparent analytics that connect physical system
      realities to market outcomes.
    </p>

    <p className="m-0 text-pretty">
      For a fuller professional history, see my{' '}
      <a
        href="https://www.linkedin.com/in/callumhughes0/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn profile
      </a>
      .
    </p>
  </div>

  {/* SKILLS */}
  <div className="mt-14 w-full border-t border-[var(--line-soft)] pt-10">
    <h3 className="m-0 font-['Cormorant_Garamond',serif] text-2xl font-semibold tracking-tight text-[var(--primary-title)]">
      Skills
    </h3>

    <div className="mt-8 grid gap-10">
      {SKILL_GROUPS.map((group) => (
        <div key={group.title}>
          <h4 className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--primary-title)]">
            {group.title}
          </h4>

          <ul className="mt-4 m-0 list-none space-y-3 p-0">
            {group.items.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-[0.96rem] leading-relaxed before:absolute before:left-0 before:top-[0.72em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent-link)] before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  
</div>
      </div>
    </section>
  )
}