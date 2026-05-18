export default function CaseStudyKpi({ value, label, unit, large = false }) {
  return (
    <div
      className={[
        'rounded-md border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_92%,#fff)] px-4 py-4 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgba(91,140,90,0.25)]',
        large ? 'px-5 py-6' : '',
      ].join(' ')}
    >
      <p
        className={[
          "m-0 font-['Cormorant_Garamond',serif] font-semibold tabular-nums leading-none text-[var(--primary-title)]",
          large ? 'text-[clamp(2rem,4vw,2.75rem)]' : 'text-[1.85rem]',
        ].join(' ')}
      >
        {value}
        {unit ? (
          <span className="ml-1 font-['Inter',sans-serif] text-[0.45em] font-medium text-[var(--body-text)]">
            {unit}
          </span>
        ) : null}
      </p>
      <p className="m-0 mt-2 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase leading-snug tracking-[0.1em] text-[var(--body-text)]">
        {label}
      </p>
    </div>
  )
}
