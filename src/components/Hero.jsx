import { motion } from 'framer-motion'

const LINKEDIN = 'https://www.linkedin.com/in/callumhughes0/'
const CV_PATH = '/Callum_Hughes_CV.pdf'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const btnPrimary =
  "inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--action-colour)] px-5 py-2.5 font-['Inter',sans-serif] text-sm font-semibold text-white shadow-[0_2px_12px_rgba(82,65,76,0.08)] transition-[background-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:bg-[#c9554d] hover:shadow-[0_2px_12px_rgba(82,65,76,0.12)] active:translate-y-0"

const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_70%,#fff)] px-5 py-2.5 font-['Inter',sans-serif] text-sm font-semibold text-[var(--primary-title)] transition-[border-color,transform,background-color,color] duration-200 ease-out hover:-translate-y-px hover:border-[rgba(91,140,90,0.35)] hover:text-[var(--accent-link)] active:translate-y-0"

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-[1120px] scroll-mt-28 px-5 pb-20 pt-14 max-[900px]:pb-16 max-[900px]:pt-12 max-[640px]:scroll-mt-36 max-[640px]:pb-14 max-[640px]:pt-9"
    >
      <div className="grid grid-cols-1 items-start gap-12 max-[900px]:gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <h1 className="m-0 font-['Cormorant_Garamond',serif] text-[clamp(2.35rem,5.2vw,3.85rem)] font-semibold leading-[1.08] tracking-tight text-[var(--primary-title)]">
            Callum Hughes
          </h1>
          <p className="mt-3 font-['IBM_Plex_Mono',monospace] text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[var(--primary-title)] max-[640px]:text-[0.72rem]">
            Energy Market &amp; Data Analyst
          </p>
          <p className="mt-1 font-['Inter',sans-serif] text-sm text-[var(--body-text)] opacity-90">
            London
          </p>

          <div className="mt-6 max-w-xl space-y-4 font-['Inter',sans-serif] text-[0.98rem] leading-[1.65] text-[var(--body-text)] max-[640px]:text-[0.93rem]">
            <p className="m-0 text-pretty">
              I&apos;m an analyst with a background in Mechanical
              Engineering (BEng) and Engineering for International Development (MSc,
              Distinction, UCL).
            </p>
            <p className="m-0 text-pretty">
              My experience spans risk analytics, Power BI dashboard
              development, Python automation and market analysis across 
              financial services sectors.
            </p>
            
          </div>

          <div className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button type="button" onClick={() => scrollToId('projects')} className={btnPrimary}>
              View projects
            </button>
            <a href={CV_PATH} download className={`${btnSecondary} text-center sm:text-left`}>
              Download CV
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={`${btnSecondary} text-center sm:text-left`}
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:col-span-5 lg:justify-end"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut', delay: 0.06 }}
        >
          <div
            className="relative w-full max-w-[300px] overflow-hidden rounded-md border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_88%,#fff)] shadow-[0_2px_12px_rgba(82,65,76,0.08)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(82,65,76,0.12)] max-[640px]:max-w-[260px]"
            role="img"
            aria-label="Portrait"
          >
            <div className="flex h-full flex-col">
  <img
    src="/bangor_2022.jpg"
    alt="Near Mount Snowdon, Wales, 2022 — Photo by Callum Hughes"
    className="aspect-[4/5] w-full object-cover"
    width={800}
    height={1000}
    loading="lazy"
  />

  <div className="border-t border-[var(--line-soft)] px-4 py-3">
    <p className="font-['IBM_Plex_Mono',monospace] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--body-text)] opacity-70">
      Near Mount Snowdon, 2022 - Photo by Callum Hughes
    </p>
 
  </div>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
