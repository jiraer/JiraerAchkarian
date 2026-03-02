import { Hero } from '../components/home/Hero';
import { SkillsGrid } from '../components/home/SkillsGrid';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { ContactForm } from '../components/contact/ContactForm';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      {/* Add Google site verification meta tag here */}
      <Head>
        <meta name="google-site-verification" content="6uvLWR03uuAs7C3iKWu-wsH6-h0rvPsAP1ZMPkBMXBs" />
      </Head>

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