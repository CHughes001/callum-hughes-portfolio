import { useEffect, useRef, useState } from 'react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
]

const SECTION_ORDER = NAV.map(({ id }) => id)

function scrollToId(id) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header() {
  const [active, setActive] = useState('home')
  const ratiosRef = useRef({})

  useEffect(() => {
    const sections = SECTION_ORDER.map((id) =>
      document.getElementById(id),
    ).filter(Boolean)
    if (sections.length === 0) return undefined

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20)

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        ratiosRef.current[entry.target.id] = entry.intersectionRatio
      }
      const best = SECTION_ORDER.reduce(
        (acc, id) => {
          const r = ratiosRef.current[id] ?? 0
          return r > acc.r ? { id, r } : acc
        },
        { id: SECTION_ORDER[0], r: 0 },
      )
      if (best.r > 0.02) {
        setActive(best.id)
      }
    }, { threshold: thresholds })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_92%,#fff)] backdrop-blur-[6px] transition-shadow duration-200 ease-out hover:shadow-[0_2px_12px_rgba(82,65,76,0.06)]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-4 max-[640px]:items-center sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('home')
          }}
          className="font-['Cormorant_Garamond',serif] text-2xl font-semibold tracking-tight text-[var(--primary-title)] transition-colors duration-200 ease-in-out hover:text-[var(--accent-link)]"
        >
          Callum Hughes
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-[640px]:w-full max-[640px]:justify-center sm:justify-end"
        >
          {NAV.map(({ id, label }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(id)
                }}
                className={[
                  "font-['IBM_Plex_Mono',monospace] text-[0.76rem] uppercase tracking-[0.12em] transition-all duration-200 ease-in-out",
                  isActive
                    ? 'text-[var(--accent-link)]'
                    : 'text-[var(--body-text)] hover:-translate-y-px hover:text-[var(--accent-link)]',
                ].join(' ')}
              >
                {label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
