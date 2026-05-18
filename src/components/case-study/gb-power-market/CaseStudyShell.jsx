import { Link } from 'react-router-dom'
import CaseStudyTOC from '../shared/CaseStudyTOC.jsx'

export default function CaseStudyShell({ children }) {
  return (
    <div className="min-h-svh bg-[var(--background-base)] text-[var(--body-text)] antialiased">
      <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_94%,#fff)] backdrop-blur-[6px]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3.5 max-[640px]:px-4">
          <Link
            to="/#projects"
            className="font-['IBM_Plex_Mono',monospace] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--body-text)] transition-[color,transform] duration-200 hover:-translate-y-px hover:text-[var(--accent-link)]"
          >
            ← Projects
          </Link>
          <Link
            to="/"
            className="font-['Cormorant_Garamond',serif] text-xl font-semibold text-[var(--primary-title)] transition-colors hover:text-[var(--accent-link)]"
          >
            Callum Hughes
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1280px] gap-10 px-5 pb-24 pt-6 max-[640px]:px-4 xl:gap-14">
        <CaseStudyTOC />
        <article className="min-w-0 flex-1 max-w-[880px]">{children}</article>
      </div>
    </div>
  )
}
