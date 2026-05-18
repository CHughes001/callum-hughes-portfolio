export default function TechBadge({ label }) {
  return (
    <span className="inline-flex rounded-full border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_85%,transparent)] px-3 py-1 font-['IBM_Plex_Mono',monospace] text-[0.68rem] uppercase tracking-[0.08em] text-[var(--body-text)] transition-colors duration-200 hover:border-[rgba(91,140,90,0.35)]">
      {label}
    </span>
  )
}
