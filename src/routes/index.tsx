import { createFileRoute, Link } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  {
    title: 'Sports & Orthopaedic Rehab',
    copy: 'Return-to-play plans for tendon, ligament, and joint injuries, built around your training calendar, not a generic protocol.',
  },
  {
    title: 'Manual Therapy',
    copy: 'Joint mobilisation, soft tissue release, and dry needling used precisely where they help, never as filler.',
  },
  {
    title: 'Persistent Pain Coaching',
    copy: 'Graded exposure and load management for pain that has hung around longer than it should have.',
  },
  {
    title: 'Post-Surgical Recovery',
    copy: 'Structured strength and mobility rebuilding after knee, shoulder, and spine procedures, in step with your surgeon.',
  },
]

const timeline = [
  { step: '01', title: 'Book online', copy: 'Pick a time that works in under two minutes, no phone tag required.' },
  { step: '02', title: 'Initial assessment', copy: 'A 45-minute deep dive into your movement, history, and goals.' },
  { step: '03', title: 'A plan you keep', copy: 'A written plan with clear milestones, reviewed and adjusted every visit.' },
]

function Home() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Nav />

     <section className="relative overflow-hidden">
  <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-6 md:pb-28 md:pt-24">
    <div className="reveal md:col-span-6 md:pt-6">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--clay)]/30 bg-[var(--sage-light)]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sage)]">
        Sydney, Australia
      </p>

      <h1 className="font-display text-5xl leading-[1.05] text-[var(--ink)] sm:text-6xl">
        Achieve your goals.
        <br />
        Conquer your pain.
        <br />
        <span className="italic text-[var(--clay-dark)]">
          Elevate your wellbeing.
        </span>
      </h1>

      <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--ink-soft)]">
        Personalised physiotherapy to help you move better, recover stronger,
        and live with confidence.
      </p>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--ink-soft)]">
        At Ace Body Physiotherapy & Wellness, we believe physiotherapy is
        about more than treating an injury. It's about helping you return to
        the activities you love, manage pain, build strength, improve your
        movement, and maintain your independence.
      </p>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--ink-soft)]">
        Whether you're recovering from an injury or surgery, experiencing
        persistent pain, concerned about falls, or looking to improve your
        physical wellbeing, we're here to support you throughout your journey.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          to="/booking"
          className="rounded-full bg-[var(--clay)] px-7 py-3.5 font-semibold text-[var(--cream)] shadow-[0_10px_30px_-12px_rgba(143,65,40,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--clay-dark)]"
        >
          Book your first visit
        </Link>

        <Link
                to="/about"
                className="rounded-full border border-[var(--ink)]/15 px-7 py-3.5 font-semibold text-[var(--ink)] transition-colors hover:border-[var(--clay)] hover:text-[var(--clay-dark)]"
              >
                Meet Erica &rarr;
              </Link>
            </div>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--ink)]/10 pt-8">
              <div>
                <dt className="font-display text-3xl text-[var(--clay-dark)]">5</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-[var(--ink-soft)]">years in practice</dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-[var(--clay-dark)]">300+</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-[var(--ink-soft)]">patients treated</dd>
              </div>
              <div>
                
              </div>
            </dl>
          </div>

          <div className="reveal relative md:col-span-6" style={{ animationDelay: '120ms' }}>
            <div className="relative mx-auto max-w-md md:ml-auto md:mr-0">
              <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-[var(--sage-light)]" />
              <div className="overflow-hidden rounded-[1.75rem] border border-[var(--ink)]/10 shadow-xl">
                <img
                  src=""
                  alt=""
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-[var(--ink)]/10 bg-white p-4 shadow-lg sm:block">
                <p className="font-display text-base text-[var(--ink)]">
                  &ldquo;Back to running six weeks after surgery.&rdquo;
                </p>
                <p className="mt-2 text-xs text-[var(--ink-soft)]">Priya N., ACL rehab patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--ink)]/10 bg-[var(--cream-dark)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay-dark)]">What we treat</p>
              <h2 className="mt-2 font-display text-3xl text-[var(--ink)] sm:text-4xl">
                Care built around your body, not a chart.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-soft)]">
              Every session starts with a real conversation about what you're
              trying to get back to, whether that's a deadlift PB or simply
              gardening without wincing.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`reveal rounded-2xl border border-[var(--ink)]/10 bg-[var(--cream)] p-7 transition-shadow hover:shadow-md`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <h3 className="font-display text-xl text-[var(--ink)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{service.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay-dark)]">How it works</p>
        <h2 className="mt-2 max-w-lg font-display text-3xl text-[var(--ink)] sm:text-4xl">
          Three steps from &ldquo;this still hurts&rdquo; to a plan.
        </h2>
        <div className="relative mt-14 grid gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[var(--ink)]/10 md:block" />
          {timeline.map((item, i) => (
            <div key={item.step} className="reveal relative" style={{ animationDelay: `${i * 110}ms` }}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--clay)]/40 bg-[var(--cream)] font-display text-lg text-[var(--clay-dark)]">
                {item.step}
              </div>
              <h3 className="mt-5 font-display text-xl text-[var(--ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--clay-dark)] px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl text-[var(--cream)] sm:text-4xl">
            Ready to stop working around the pain?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--cream)]/80">
            Sessions run Monday through Sunday with
            same-week availability most weeks.
          </p>
          <Link
            to="/booking"
            className="mt-8 inline-block rounded-full bg-[var(--cream)] px-8 py-3.5 font-semibold text-[var(--clay-dark)] transition-transform hover:-translate-y-0.5"
          >
            Check availability
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
