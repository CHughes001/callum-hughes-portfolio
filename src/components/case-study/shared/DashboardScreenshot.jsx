import { useState } from 'react'

const FALLBACK =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540"><rect fill="#f4f1ee" width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#596157" font-family="system-ui" font-size="18">Dashboard screenshot</text></svg>',
  )

export default function DashboardScreenshot({ image, onExpand, featured = false }) {
  const src = image.src

  return (
    <button
      type="button"
      onClick={() => onExpand({ ...image, src })}
      className={[
        'group/img block w-full overflow-hidden rounded-md border border-[var(--line-soft)] bg-white text-left shadow-[0_2px_12px_rgba(82,65,76,0.08)] transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgba(91,140,90,0.3)] hover:shadow-[0_4px_20px_rgba(82,65,76,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-link)]',
        featured ? 'ring-1 ring-[rgba(91,140,90,0.12)]' : '',
      ].join(' ')}
    >
      <img
        src={src}
        alt={image.alt}
        className={[
          'w-full object-cover object-top',
          featured ? 'max-h-[min(72vh,640px)]' : 'max-h-48',
        ].join(' ')}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = FALLBACK
        }}
      />
      {image.caption ? (
        <span className="block border-t border-[var(--line-soft)] px-3 py-2 font-['Inter',sans-serif] text-[0.8rem] leading-snug text-[var(--body-text)] transition-colors group-hover/img:text-[var(--primary-title)]">
          {image.caption}
          <span className="ml-2 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-wider text-[var(--accent-link)] opacity-0 transition-opacity group-hover/img:opacity-100">
            Expand
          </span>
        </span>
      ) : null}
    </button>
  )
}
