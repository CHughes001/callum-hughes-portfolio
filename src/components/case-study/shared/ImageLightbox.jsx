import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(82,65,76,0.55)] p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded dashboard view"
        >
          <motion.figure
            className="max-h-[92vh] max-w-[min(1200px,96vw)] overflow-hidden rounded-lg border border-[var(--line-soft)] bg-[var(--background-base)] shadow-[0_2px_24px_rgba(82,65,76,0.2)]"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[80vh] w-full object-contain"
            />
            {image.caption ? (
              <figcaption className="border-t border-[var(--line-soft)] px-4 py-3 font-['Inter',sans-serif] text-[0.85rem] text-[var(--body-text)]">
                {image.caption}
              </figcaption>
            ) : null}
          </motion.figure>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-[var(--line-soft)] bg-[var(--background-base)] px-3 py-1.5 font-['IBM_Plex_Mono',monospace] text-[0.7rem] uppercase tracking-wider text-[var(--primary-title)] transition-colors hover:text-[var(--accent-link)]"
          >
            Close
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
