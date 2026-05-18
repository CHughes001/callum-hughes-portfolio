import { useEffect, useState } from 'react'
import { TOC_SECTIONS } from '../../../data/gbPowerMarketCaseStudy.js'

export default function CaseStudyTOC() {
  const [active, setActive] = useState(TOC_SECTIONS[0].id)

  useEffect(() => {
    const ids = TOC_SECTIONS.map((s) => s.id)
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (nodes.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.15, 0.4] },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Case study sections"
      className="hidden w-[168px] shrink-0 xl:block"
    >
      <div className="sticky top-28">
        <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.62rem] uppercase tracking-[0.18em] text-[var(--body-text)] opacity-75">
          On this page
        </p>
        <ul className="m-0 mt-4 list-none space-y-1 p-0">
          {TOC_SECTIONS.map(({ id, label }) => {
            const isActive = active === id
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollTo(id)}
                  className={[
                    "w-full border-l-2 py-1.5 pl-3 text-left font-['Inter',sans-serif] text-[0.82rem] leading-snug transition-[color,border-color,transform] duration-200 ease-out hover:-translate-y-px",
                    isActive
                      ? 'border-[var(--accent-link)] font-medium text-[var(--accent-link)]'
                      : 'border-transparent text-[var(--body-text)] hover:border-[var(--line-soft)] hover:text-[var(--primary-title)]',
                  ].join(' ')}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
