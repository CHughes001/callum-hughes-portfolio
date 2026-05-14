import { motion } from 'framer-motion'

export default function ProjectCard({
  image,
  title,
  description,
  techStack = [],
  outcomes = [],
  tags = [],
  link,
  githubUrl,
  embed,
  index = 0,
}) {
  const hasTech = techStack.length > 0 || tags.length > 0
  const stack = techStack.length > 0 ? techStack : tags

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded border border-[var(--line-soft)] bg-[var(--background-base)] p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgba(91,140,90,0.3)] hover:shadow-[0_2px_12px_rgba(82,65,76,0.1)] max-[640px]:p-5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.28, ease: 'easeOut', delay: index * 0.08 }}
    >
      {image ? (
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-sm border border-[var(--line-soft)] transition-opacity duration-200 group-hover:opacity-[0.98]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <h3 className="m-0 font-['Cormorant_Garamond',serif] text-[1.65rem] font-semibold leading-tight tracking-tight text-[var(--primary-title)] max-[640px]:text-2xl">
        {title}
      </h3>

      <div className="mt-3 space-y-3 font-['Inter',sans-serif] text-[0.95rem] leading-[1.65] text-[var(--body-text)] max-[640px]:text-[0.92rem]">
        {typeof description === 'string' ? (
          <p className="m-0">{description}</p>
        ) : (
          description
        )}
      </div>

      {embed}

      {hasTech ? (
        <div className="mt-5">
          <p className="m-0 mb-2 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--primary-title)]">
            Tech stack
          </p>
          <ul className="m-0 flex flex-wrap gap-2 p-0">
            {stack.map((tag) => (
              <li
                key={tag}
                className="list-none rounded-full border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--background-base)_85%,transparent)] px-2.5 py-1 font-['IBM_Plex_Mono',monospace] text-[0.68rem] uppercase tracking-wide text-[var(--body-text)] transition-colors duration-200 hover:border-[rgba(91,140,90,0.35)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {outcomes.length > 0 ? (
        <div className="mt-5">
          <p className="m-0 mb-2 font-['IBM_Plex_Mono',monospace] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--primary-title)]">
            Outcomes & impact
          </p>
          <ul className="m-0 list-none space-y-2 p-0">
            {outcomes.map((item) => (
              <li
                key={item}
                className="relative pl-4 font-['Inter',sans-serif] text-[0.9rem] leading-snug text-[var(--body-text)] before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent-link)] before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--line-soft)] pt-5">
        {link && (!githubUrl || link !== githubUrl) ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-['Inter',sans-serif] text-sm font-medium text-[var(--accent-link)] transition-[color,transform] duration-200 ease-out hover:-translate-y-px hover:text-[var(--action-colour)]"
          >
            View project
            <span aria-hidden className="text-xs opacity-70">
              ↗
            </span>
          </a>
        ) : null}
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-['IBM_Plex_Mono',monospace] text-[0.78rem] uppercase tracking-[0.06em] text-[var(--accent-link)] transition-[color,transform] duration-200 ease-out hover:-translate-y-px hover:text-[var(--action-colour)]"
          >
            GitHub
            <span aria-hidden className="text-xs opacity-70">
              ↗
            </span>
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}
