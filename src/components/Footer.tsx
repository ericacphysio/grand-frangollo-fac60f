import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t border-[var(--ink)]/10 bg-[var(--cream-dark)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-[var(--ink)]">Ace Body Physiotherapy &amp; Wellness</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
            Hands-on physiotherapy and movement rehabilitation, guided by
            evidence and tailored to how you actually live and move.
          </p>
        </div>
        <div className="text-sm text-[var(--ink-soft)]">
          <p className="mb-3 font-semibold text-[var(--ink)]">Visit</p>
          <p>Shop 1/260 Belmore Rd, Riverwood</p>
          <p>New South Wales, Australia 2150</p>
        </div>
        <div className="text-sm text-[var(--ink-soft)]">
          <p className="mb-3 font-semibold text-[var(--ink)]">Get in touch</p>
          <p>ericacphysio@gmail.com</p>
          <p>(+61) 435 195 018</p>
          <Link
            to="/booking"
            className="mt-4 inline-block font-semibold text-[var(--clay-dark)] hover:underline"
          >
            Book an appointment &rarr;
          </Link>
        </div>
      </div>
      <div className="border-t border-[var(--ink)]/10 px-6 py-5 text-center text-xs text-[var(--ink-soft)]">
        &copy; {new Date().getFullYear()} Ace Body Physiotherapy &amp; Wellness. All rights reserved.
      </div>
    </footer>
  )
}
