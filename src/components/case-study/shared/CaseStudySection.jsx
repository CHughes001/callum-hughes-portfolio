export default function CaseStudySection({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  tinted = false,
}) {
  const hasHeader = Boolean(eyebrow || title || lead)

  return (
    <section
      id={id}
      className={[
        'scroll-mt-28 py-16 max-[640px]:scroll-mt-24 max-[640px]:py-12',
        tinted
          ? 'rounded-lg border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_88%,#fff)] px-6 py-14 max-[640px]:px-4 max-[640px]:py-10'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow ? (
        <p className="m-0 font-['IBM_Plex_Mono',monospace] text-[0.68rem] uppercase tracking-[0.16em] text-[var(--body-text)] opacity-80">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="m-0 mt-2 font-['Cormorant_Garamond',serif] text-[clamp(1.75rem,3.5vw,2.35rem)] font-semibold tracking-tight text-[var(--primary-title)]">
          {title}
        </h2>
      ) : null}
      {lead ? (
        <p className="m-0 mt-4 max-w-2xl font-['Inter',sans-serif] text-[1rem] leading-[1.7] text-[var(--body-text)] max-[640px]:text-[0.94rem]">
          {lead}
        </p>
      ) : null}
      <div className={hasHeader ? 'mt-8' : undefined}>{children}</div>
    </section>
  )
}
