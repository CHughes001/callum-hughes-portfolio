import { useState } from 'react'
import { DASHBOARD_TABS } from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudyPullQuote from '../shared/CaseStudyPullQuote.jsx'
import CaseStudySection from '../shared/CaseStudySection.jsx'
import DashboardScreenshot from '../shared/DashboardScreenshot.jsx'
import ImageLightbox from '../shared/ImageLightbox.jsx'

export default function CaseStudyDashboards() {
  const [activeTab, setActiveTab] = useState(DASHBOARD_TABS[0].id)
  const [lightboxImage, setLightboxImage] = useState(null)

  const tab = DASHBOARD_TABS.find((t) => t.id === activeTab) ?? DASHBOARD_TABS[0]
  const [featured, ...thumbs] = tab.images

  return (
    <CaseStudySection
      id="cs-dashboards"
      eyebrow="03 · Dashboards"
      title="Three lenses on the same market"
      lead="Project Overview: Screenshots of my PowerBI dashboard."
    >
      <div
        role="tablist"
        aria-label="Dashboard pages"
        className="flex flex-wrap gap-2 border-b border-[var(--line-soft)] pb-4"
      >
        {DASHBOARD_TABS.map((t) => {
          const selected = t.id === activeTab
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveTab(t.id)}
              className={[
                "rounded-full px-4 py-2 font-['IBM_Plex_Mono',monospace] text-[0.72rem] uppercase tracking-[0.08em] transition-[background-color,color,transform] duration-200",
                selected
                  ? 'bg-[var(--primary-title)] text-[var(--background-base)]'
                  : 'border border-[var(--line-soft)] text-[var(--body-text)] hover:-translate-y-px hover:border-[rgba(91,140,90,0.35)] hover:text-[var(--primary-title)]',
              ].join(' ')}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <p className="m-0 mt-6 max-w-2xl font-['Inter',sans-serif] text-[0.95rem] leading-relaxed text-[var(--body-text)]">
        {tab.purpose}
      </p>

      <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1fr)_280px] xl:items-start">
        <div className="min-w-0 space-y-4">
          {featured ? (
            <DashboardScreenshot
              image={featured}
              featured
              onExpand={setLightboxImage}
            />
          ) : null}
          {thumbs.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {thumbs.map((img) => (
                <DashboardScreenshot
                  key={img.src}
                  image={img}
                  onExpand={setLightboxImage}
                />
              ))}
            </div>
          ) : null}
        </div>

        <aside className="xl:sticky xl:top-28 xl:self-start">
          <div className="space-y-5 rounded-md border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_92%,#fff)] p-5">
            <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--primary-title)]">
              Reading the page
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {tab.commentary.map((line) => (
                <li
                  key={line}
                  className="relative pl-4 text-[0.9rem] leading-relaxed text-[var(--body-text)] before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent-link)] before:content-['']"
                >
                  {line}
                </li>
              ))}
            </ul>
            <CaseStudyPullQuote compact>{tab.pullQuote}</CaseStudyPullQuote>
          </div>
        </aside>
      </div>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </CaseStudySection>
  )
}
