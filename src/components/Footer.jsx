const LINKEDIN = 'https://www.linkedin.com/in/callumhughes0/'
const GITHUB = 'https://github.com/callumhughes'

const LINKS = [
  { label: 'LinkedIn', href: LINKEDIN },
  { label: 'GitHub', href: GITHUB },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--line-soft)] bg-[var(--background-base)] py-12">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-6 px-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="m-0 max-w-md font-['IBM_Plex_Mono',monospace] text-[0.72rem] uppercase leading-relaxed tracking-[0.1em] text-[var(--body-text)]">
          © {year} Callum Hughes · London · Energy market & data analyst | Built using AI tools.
        </p>
        <ul className="m-0 flex list-none flex-wrap justify-center gap-6 p-0 md:justify-end">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono',monospace] text-[0.8rem] uppercase tracking-[0.1em] text-[var(--accent-link)] transition-[color,transform] duration-200 ease-out hover:-translate-y-px hover:text-[var(--action-colour)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
