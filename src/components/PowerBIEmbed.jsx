/**
 * Replace YOUR_POWERBI_EMBED_LINK with your published Power BI embed URL.
 * See: https://learn.microsoft.com/en-us/power-bi/developer/embedded/embed-sample-for-customers
 */
const PLACEHOLDER_EMBED = 'YOUR_POWERBI_EMBED_LINK'

export default function PowerBIEmbed({ title = 'Power BI dashboard' }) {
  return (
    <div className="group/embed mt-5 w-full transition-transform duration-200 ease-out hover:-translate-y-px">
      <p className="mb-2 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--body-text)] opacity-80">
        Live view
      </p>
      <div
        className="overflow-hidden rounded-md border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_92%,#fff)] shadow-[0_2px_12px_rgba(82,65,76,0.08)] transition-[border-color,box-shadow] duration-200 ease-out hover:border-[rgba(91,140,90,0.25)] hover:shadow-[0_2px_12px_rgba(82,65,76,0.1)]"
        style={{ aspectRatio: '16 / 10' }}
      >
        <iframe
          title={title}
          src={PLACEHOLDER_EMBED}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <p className="mt-2 font-['Inter',sans-serif] text-[0.8rem] leading-snug text-[var(--body-text)] opacity-90">
        Embed URL placeholder — set your publish link in{' '}
        <code className="rounded border border-[var(--line-soft)] bg-[var(--background-base)] px-1 py-0.5 font-['IBM_Plex_Mono',monospace] text-[0.72rem]">
          PowerBIEmbed.jsx
        </code>
        .
      </p>
    </div>
  )
}
