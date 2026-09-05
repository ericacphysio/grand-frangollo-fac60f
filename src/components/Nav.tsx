import { Link } from '@tanstack/react-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Erica' },
  { to: '/services', label: 'Services' },
] as const

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--ink)]/10 bg-[var(--cream)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-[var(--ink)]">
            Ace Body
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-[var(--clay-dark)] sm:inline">
            Physiotherapy &amp; Wellness
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[var(--ink-soft)] transition-colors hover:text-[var(--clay-dark)] [&.active]:text-[var(--clay-dark)] [&.active]:font-semibold"
              activeOptions={{ exact: link.to === '/' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="rounded-full bg-[var(--clay)] px-4 py-2 font-semibold text-[var(--cream)] transition-colors hover:bg-[var(--clay-dark)]"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  )
}
