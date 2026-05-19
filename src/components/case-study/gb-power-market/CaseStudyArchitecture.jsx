import { useState } from 'react'
import {
  PIPELINE_LAYERS,
  PIPELINE_SCRIPTS,
  STAR_SCHEMA,
} from '../../../data/gbPowerMarketCaseStudy.js'
import CaseStudySection from '../shared/CaseStudySection.jsx'
import ImageLightbox from '../shared/ImageLightbox.jsx'

const ARCH_IMAGE = '/projects/gb-power-market/architecture.png'

export default function CaseStudyArchitecture() {
  const [archSrc, setArchSrc] = useState(ARCH_IMAGE)
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <CaseStudySection
      id="cs-architecture"
      eyebrow="02 · Architecture"
      title="Pipeline & data model"
      lead="Three layers — staging, transformation, serving — with a star schema keyed on (date, settlement_period)."
      tinted
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* CLICKABLE IMAGE */}
        <div
          className="overflow-hidden rounded-md border border-[var(--line-soft)] bg-white shadow-[0_2px_12px_rgba(82,65,76,0.08)] cursor-zoom-in"
          onClick={() =>
            setLightboxImage({
              src: archSrc,
              alt: "Pipeline architecture diagram — BMRS API to SQLite to Power BI",
            })
          }
          
        >
          <img
            src={archSrc}
            alt="Pipeline architecture diagram — BMRS API to SQLite to Power BI"
            className="w-full object-contain p-4"
            onError={() =>
              setArchSrc(
                'data:image/svg+xml,' +
                  encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420"><rect fill="#fff" width="100%" height="100%"/><text x="400" y="200" text-anchor="middle" fill="#596157" font-family="system-ui" font-size="16">Add architecture.png to public/projects/gb-power-market/</text></svg>',
                  ),
              )
            }
          />
          <p className="m-0 border-t border-[var(--line-soft)] px-4 py-2 font-['IBM_Plex_Mono',monospace] text-[0.68rem] text-[var(--body-text)]">
            Pipeline diagram (click to expand)
          </p>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-8">
          <div>
            <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--primary-title)]">
              Layers
            </p>
            <ul className="m-0 mt-3 list-none space-y-3 p-0">
              {PIPELINE_LAYERS.map((layer, i) => (
                <li
                  key={layer.name}
                  className="flex gap-3 border-l-2 border-[var(--line-soft)] pl-4 transition-colors hover:border-[var(--accent-link)]"
                >
                  <span className="font-['IBM_Plex_Mono',monospace] text-[0.7rem] text-[var(--accent-link)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="m-0 font-medium text-[var(--primary-title)]">{layer.name}</p>
                    <p className="m-0 mt-0.5 text-[0.88rem] leading-snug text-[var(--body-text)]">
                      {layer.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--primary-title)]">
              Star schema
            </p>
            <ul className="m-0 mt-3 grid gap-2 sm:grid-cols-2">
              {STAR_SCHEMA.map((row) => (
                <li
                  key={row.table}
                  className="rounded border border-[var(--line-soft)] bg-[var(--background-base)] px-3 py-2"
                >
                  <code className="font-['IBM_Plex_Mono',monospace] text-[0.72rem] text-[var(--primary-title)]">
                    {row.table}
                  </code>
                  <p className="m-0 mt-1 text-[0.8rem] leading-snug text-[var(--body-text)]">
                    {row.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SCRIPTS */}
      <div className="mt-10 border-t border-[var(--line-soft)] pt-8">
        <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--primary-title)]">
          Modular scripts
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {PIPELINE_SCRIPTS.map((s) => (
            <div
              key={s.script}
              className="rounded border border-[var(--line-soft)] px-4 py-3 transition-[border-color,transform] duration-200 hover:-translate-y-px hover:border-[rgba(91,140,90,0.3)]"
            >
              <code className="font-['IBM_Plex_Mono',monospace] text-[0.75rem] text-[var(--accent-link)]">
                {s.script}
              </code>
              <p className="m-0 mt-1 text-[0.85rem] text-[var(--body-text)]">{s.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </CaseStudySection>
  )
}
