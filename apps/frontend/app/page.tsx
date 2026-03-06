'use client';

import { Hero } from '../components/home/Hero';
import { SkillsGrid } from '../components/home/SkillsGrid';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { ContactForm } from '../components/contact/ContactForm';

export default function HomePage() {
  return (
    <main className="relative z-10 space-y-24 pb-24">
      {/* Hero / top intro */}
      <Hero />

      {/* New Award-winning UX inspired section */}


      {/* Featured Projects — Mobbin-style */}
      {/* <FeaturedProjectCard /> (you can add back if needed) */}

      {/* Skills & Experience */}
      <SkillsGrid />

      <ExperienceTimeline />

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}