import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/booking')({
  component: Booking,
})

const prepList = [
  'Wear clothing you can comfortably move in, shorts or leggings work best for lower-body assessments.',
  'Bring any scans, imaging reports, or referral letters from your GP or surgeon.',
  'Arrive 5 minutes early to fill out your intake form if this is your first visit.',
]

function Booking() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay-dark)]">Online booking</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
          Find a time that fits your week.
        </h1>
        <p className="mt-4 max-w-xl text-[var(--ink-soft)]">
          Choose your appointment type and preferred practitioner below.
          You'll get an instant confirmation by email, plus a reminder 24
          hours ahead.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="reveal overflow-hidden rounded-[1.5rem] border border-[var(--ink)]/10 bg-white shadow-sm">
            <div className="border-b border-[var(--ink)]/10 bg-[var(--cream-dark)] px-6 py-4">
              <p className="text-sm font-semibold text-[var(--ink)]">Ace Body Physiotherapy &amp; Wellness — Booking</p>
            </div>
            <iframe
              src="https://erica-physio.splose.com/online-booking/c3d7003c-afab-414f-a050-f8117a18ae4d"
              name="onlineBookingEmbeded"
              scrolling="auto"
              width="100%"
              height="700px"
              loading="lazy"
              frameBorder="0"
              title="Ace Body Physiotherapy & Wellness online booking"
            />
          </div>

          <aside className="reveal space-y-6" style={{ animationDelay: '100ms' }}>
            <div className="rounded-2xl border border-[var(--ink)]/10 bg-[var(--sage-light)]/40 p-6">
              <h2 className="font-display text-lg text-[var(--ink)]">Before you arrive</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {prepList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--clay)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--ink)]/10 bg-white p-6">
              <h2 className="font-display text-lg text-[var(--ink)]">Rather speak to someone?</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                Call the front desk and we'll find a slot for you directly.
              </p>
              <p className="mt-4 font-semibold text-[var(--clay-dark)]">(09) 555 0142</p>
              <p className="text-sm text-[var(--ink-soft)]">Mon–Fri, 8am–6pm</p>
            </div>

            <div className="rounded-2xl border border-[var(--ink)]/10 bg-white p-6">
              <h2 className="font-display text-lg text-[var(--ink)]">Cancellations</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                Please give at least 24 hours' notice so we can offer your
                slot to another patient waiting on our list.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
