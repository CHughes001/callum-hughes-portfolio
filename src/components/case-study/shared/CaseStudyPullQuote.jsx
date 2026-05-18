export default function CaseStudyPullQuote({ children, compact = false }) {
  return (
    <blockquote
      className={[
        "m-0 border-l-2 border-[var(--accent-link)] pl-5 font-['Cormorant_Garamond',serif] italic leading-snug text-[var(--primary-title)]",
        compact ? 'text-lg max-[640px]:text-base' : 'text-xl max-[640px]:text-lg',
      ].join(' ')}
    >
      {children}
    </blockquote>
  )
}
