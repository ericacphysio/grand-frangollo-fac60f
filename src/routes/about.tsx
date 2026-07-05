import { createFileRoute, Link } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/about')({
  component: About,
})

const credentials = [
  'Bachelor of Physiotherapy',
  'Dry Needling Level 2'
]

const philosophy = [
  {
    title: 'Explain the "why"',
    copy: 'You should leave every session understanding what is actually going on in your body, not just what exercises to do.',
  },
  {
    title: 'Load, don’t avoid',
    copy: 'Rest rarely fixes tissue that needs to get stronger. Erica builds rehab around progressive loading, not blanket restriction.',
  },
  {
    title: 'Measure what matters',
    copy: 'Grip strength, range of motion, single-leg hop distance — real numbers tracked visit to visit, not vague check-ins.',
  },
]

function About() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Nav />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 md:grid-cols-12 md:gap-8">
        <div className="reveal md:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay-dark)]">About your physiotherapist</p>
          <h1 className="mt-2 font-display text-5xl leading-[1.05] text-[var(--ink)] sm:text-6xl">
            Erica Chen
          </h1>
          <p className="mt-3 font-display text-xl italic text-[var(--sage)]">
            Registered Physiotherapist
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            Erica is a motivated and dedicated physiotherapist who has worked in a 
            variety of clinical settings. She has also undertaken additional training 
            in Dry Needling and is passionate about improving people's quality of life. 
            She finds immense satisfaction in assisting people in returning to their 
            interests and in accomplishing their goals.    
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--ink-soft)]">
            Today she treats everyone from weekend hikers with cranky knees to
            competitive powerlifters chasing a total, and post-operative
            patients rebuilding strength one honest rep at a time. Her
            approach blends precise manual therapy with a strength coach's
            eye for loading tissue correctly, so progress holds up outside
            the clinic, not just on the table.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="rounded-full bg-[var(--clay)] px-7 py-3.5 font-semibold text-[var(--cream)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--clay-dark)]"
            >
              Book with Erica
            </Link>
          </div>
        </div>

        <div className="reveal relative md:col-span-5" style={{ animationDelay: '120ms' }}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 -z-10 -rotate-2 rounded-[2rem] bg-[var(--clay)]/15" />
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--ink)]/10 shadow-xl">
              
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--ink)]/10 bg-[var(--cream-dark)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay-dark)]">Training &amp; credentials</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {credentials.map((item, i) => (
              <div
                key={item}
                className="reveal flex items-start gap-4 rounded-2xl border border-[var(--ink)]/10 bg-[var(--cream)] p-6"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-2xl text-[var(--clay-dark)]">{`0${i + 1}`}</span>
                <p className="pt-1 text-sm leading-relaxed text-[var(--ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--clay-dark)]">How Erica works</p>
        <h2 className="mt-2 max-w-lg font-display text-3xl text-[var(--ink)] sm:text-4xl">
          Three principles behind every plan.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {philosophy.map((item, i) => (
            <div
              key={item.title}
              className={`reveal rounded-2xl border border-[var(--ink)]/10 bg-white p-7 shadow-sm ${
                i === 1 ? 'md:mt-8' : ''
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="font-display text-xl text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2rem] border border-[var(--ink)]/10 bg-[var(--sage-light)]/40 px-8 py-12 sm:px-14">
          <p className="font-display text-2xl italic leading-snug text-[var(--ink)] sm:text-3xl">
            &ldquo;I don't think of rehab as getting back to baseline. I think
            of it as finding out what your body can actually handle, then
            building past the old baseline.&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sage)]">
            Erica Chen, Founder &amp; Lead Physiotherapist
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
