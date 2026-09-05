import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/services')({
  component: Services,
})

const prepList = [
  'Wear clothing you can comfortably move in, shorts or leggings work best for lower-body assessments.',
  'Bring any scans, imaging reports, or referral letters from your GP or surgeon.',
  'Arrive 5 minutes early to fill out your intake form if this is your first visit.',
]

function Services() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Nav />

     <section class="services">
  <div class="container">

    <header class="section-header">
      <h2>Our Services</h2>
    </header>

    <!-- Achieve Your Goals -->
    <section class="service-category">
      <h3>🏆 Achieve Your Goals</h3>
      <p class="category-intro">
        Rehabilitation that gets you moving forward.
      </p>

      <p>
        Whether your goal is returning to sport, getting back to work,
        walking comfortably, or simply being able to enjoy everyday
        activities again, we can help you work towards it.
      </p>

      <article class="service">
        <h4>Post-Injury Rehabilitation</h4>
        <p>
          Recover from injury with a structured rehabilitation program
          designed around your stage of recovery.
        </p>

        <p>Treatment may focus on:</p>
        <ul>
          <li>Restoring movement and flexibility</li>
          <li>Rebuilding strength and stability</li>
          <li>Improving coordination and function</li>
          <li>Returning to everyday activities</li>
          <li>Progressive return to work, exercise, or sport</li>
        </ul>
      </article>

      <article class="service">
        <h4>Post-Surgical Rehabilitation</h4>
        <p>
          Support your recovery following surgery with personalised
          physiotherapy.
        </p>

        <p>We can help you progressively restore:</p>
        <ul>
          <li>Mobility and range of movement</li>
          <li>Strength and physical function</li>
          <li>Confidence with movement</li>
          <li>Everyday independence</li>
          <li>Safe return to your normal activities</li>
        </ul>
      </article>

      <article class="service">
        <h4>Exercise Rehabilitation</h4>
        <p>
          Build a stronger, more capable body through personalised exercise.
        </p>

        <p>
          Your program can be tailored to your abilities and progressively
          adjusted as you improve.
        </p>
      </article>
    </section>

    <!-- Conquer Your Pain -->
    <section class="service-category">
      <h3>💙 Conquer Your Pain</h3>
      <p class="category-intro">
        Hands-on care and strategies to help you move more comfortably.
      </p>

      <p>
        Pain can affect how you move, how you sleep, how you work, and how
        you participate in the things you enjoy.
      </p>

      <p>
        At Ace Body Physiotherapy &amp; Wellness, we use a combination of
        manual therapy, exercise, education, and pain-management strategies
        to help you manage your symptoms and improve your movement.
      </p>

      <article class="service">
        <h4>Manual Therapy</h4>
        <p>
          Our physiotherapists provide hands-on treatment where appropriate
          to help:
        </p>

        <ul>
          <li>Manage pain</li>
          <li>Improve joint and soft-tissue mobility</li>
          <li>Reduce muscle tension</li>
          <li>Support comfortable movement</li>
          <li>Complement your rehabilitation program</li>
        </ul>
      </article>

      <article class="service">
        <h4>Dry Needling</h4>
        <p>
          Dry needling uses fine, sterile needles to target specific muscles
          and areas of muscular tension.
        </p>

        <p>
          It may be incorporated into your treatment plan to assist with the
          management of muscle pain, tightness, and movement restrictions.
        </p>

        <p>
          Your physiotherapist will assess whether dry needling is
          appropriate for you and discuss the treatment with you beforehand.
        </p>
      </article>
    </section>

    <!-- Elevate Your Wellbeing -->
    <section class="service-category">
      <h3>🌿 Elevate Your Wellbeing</h3>
      <p class="category-intro">
        Build strength, balance and confidence for everyday life.
      </p>

      <p>
        Physiotherapy isn't only about recovering from an injury. Maintaining
        your physical capabilities can help you stay active, independent,
        and confident in your everyday life.
      </p>

      <article class="service">
        <h4>Falls Prevention &amp; Balance Rehabilitation</h4>

        <p>
          Feeling unsteady or worried about falling can affect your
          confidence and independence.
        </p>

        <p>
          Our falls prevention programs focus on improving your ability to
          move safely and confidently through:
        </p>

        <ul>
          <li>Balance and stability training</li>
          <li>Lower-limb strengthening</li>
          <li>Walking and mobility exercises</li>
          <li>Coordination training</li>
          <li>Gait assessment and rehabilitation</li>
          <li>Movement strategies</li>
          <li>Falls-risk education</li>
          <li>Building confidence with everyday activities</li>
        </ul>

        <p>
          Whether you've experienced a fall or simply feel less steady on
          your feet, we can help you work towards greater strength, balance,
          confidence, and independence.
        </p>
      </article>
    </section>

    <!-- Our Approach -->
    <section class="our-approach">
      <header class="section-header">
        <h2>Our Approach</h2>
        <p>Personalised. Hands-On. Goal-Focused.</p>
      </header>

      <p>
        We believe the best physiotherapy is centred around you.
      </p>

      <article class="approach-step">
        <h3><span>01</span> — Understand</h3>
        <p>
          We listen to your concerns, understand your history, assess your
          movement, and identify what is affecting your ability to do what
          matters to you.
        </p>
      </article>

      <article class="approach-step">
        <h3><span>02</span> — Treat</h3>
        <p>
          Where appropriate, treatment may include manual therapy, dry
          needling, exercise, mobility work, and pain-management strategies.
        </p>
      </article>

      <article class="approach-step">
        <h3><span>03</span> — Rehabilitate</h3>
        <p>
          We develop a personalised program to progressively improve your
          strength, mobility, balance, and physical function.
        </p>
      </article>

      <article class="approach-step">
        <h3><span>04</span> — Empower</h3>
        <p>
          We give you the knowledge and tools to understand your body,
          manage your condition, and confidently take control of your
          recovery.
        </p>
      </article>
    </section>

  </div>
</section>
      <Footer />
    </div>
  )
}
