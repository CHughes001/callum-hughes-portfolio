import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'

export default function Accordion({ items = [], compact = false }) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="overflow-hidden rounded-sm border border-[var(--line-soft)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div
            key={item.title}
            className="border-b border-[var(--line-soft)] last:border-b-0"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={[
                "flex w-full items-center justify-between gap-3 px-4 text-left font-['IBM_Plex_Mono',monospace] uppercase tracking-[0.08em] text-[var(--body-text)] transition-colors duration-200 hover:text-[var(--accent-link)]",
                compact ? 'py-2.5 text-[0.72rem]' : 'py-3 text-[0.8rem]',
              ].join(' ')}
            >
              <span>{item.title}</span>
              <span className="text-[var(--primary-title)]" aria-hidden>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key={index}
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    className={[
                      "border-t border-[var(--line-soft)] font-['Inter',sans-serif] leading-relaxed text-[var(--body-text)]",
                      compact ? 'px-4 pb-3 pt-2 text-[0.88rem]' : 'px-4 pb-4 pt-3 text-[0.95rem]',
                    ].join(' ')}
                  >
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
