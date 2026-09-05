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

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-14">
        Our Services
🏆 Achieve Your Goals
Rehabilitation that gets you moving forward.

Whether your goal is returning to sport, getting back to work, walking comfortably, or simply being able to enjoy everyday activities again, we can help you work towards it.

Post-Injury Rehabilitation

Recover from injury with a structured rehabilitation program designed around your stage of recovery.

Treatment may focus on:

Restoring movement and flexibility
Rebuilding strength and stability
Improving coordination and function
Returning to everyday activities
Progressive return to work, exercise, or sport
Post-Surgical Rehabilitation

Support your recovery following surgery with personalised physiotherapy.

We can help you progressively restore:

Mobility and range of movement
Strength and physical function
Confidence with movement
Everyday independence
Safe return to your normal activities
Exercise Rehabilitation

Build a stronger, more capable body through personalised exercise.

Your program can be tailored to your abilities and progressively adjusted as you improve.

💙 Conquer Your Pain
Hands-on care and strategies to help you move more comfortably.

Pain can affect how you move, how you sleep, how you work, and how you participate in the things you enjoy.

At Ace Body Physiotherapy & Wellness, we use a combination of manual therapy, exercise, education, and pain-management strategies to help you manage your symptoms and improve your movement.

Manual Therapy

Our physiotherapists provide hands-on treatment where appropriate to help:

Manage pain
Improve joint and soft-tissue mobility
Reduce muscle tension
Support comfortable movement
Complement your rehabilitation program
Dry Needling

Dry needling uses fine, sterile needles to target specific muscles and areas of muscular tension.

It may be incorporated into your treatment plan to assist with the management of muscle pain, tightness, and movement restrictions.

Your physiotherapist will assess whether dry needling is appropriate for you and discuss the treatment with you beforehand.

🌿 Elevate Your Wellbeing
Build strength, balance and confidence for everyday life.

Physiotherapy isn't only about recovering from an injury. Maintaining your physical capabilities can help you stay active, independent, and confident in your everyday life.

Falls Prevention & Balance Rehabilitation

Feeling unsteady or worried about falling can affect your confidence and independence.

Our falls prevention programs focus on improving your ability to move safely and confidently through:

Balance and stability training
Lower-limb strengthening
Walking and mobility exercises
Coordination training
Gait assessment and rehabilitation
Movement strategies
Falls-risk education
Building confidence with everyday activities

Whether you've experienced a fall or simply feel less steady on your feet, we can help you work towards greater strength, balance, confidence, and independence.

Our Approach
Personalised. Hands-On. Goal-Focused.

We believe the best physiotherapy is centred around you.

01 — Understand

We listen to your concerns, understand your history, assess your movement, and identify what is affecting your ability to do what matters to you.

02 — Treat

Where appropriate, treatment may include manual therapy, dry needling, exercise, mobility work, and pain-management strategies.

03 — Rehabilitate

We develop a personalised program to progressively improve your strength, mobility, balance, and physical function.

04 — Empower

We give you the knowledge and tools to understand your body, manage your condition, and confidently take control of your recovery.
      </section>

      <Footer />
    </div>
  )
}
