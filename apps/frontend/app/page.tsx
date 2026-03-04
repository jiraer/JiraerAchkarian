'use client'

import { Hero } from '../components/home/Hero';
import { SkillsGrid } from '../components/home/SkillsGrid';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { ContactForm } from '../components/contact/ContactForm';

export default function HomePage() {
  return (
    <>


      <main className="relative space-y-24 pb-24">
        <Hero />
        <SkillsGrid />
        <ExperienceTimeline />
        <section id="contact" className="px-6 md:px-10 lg:px-16">
          <ContactForm />
        </section>
      </main>
    </>
  );
}