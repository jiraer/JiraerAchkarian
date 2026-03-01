'use client';
  
  import { useEffect, useRef } from 'react';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const experiences = [
    {
      period: '2022 — Present',
      role: 'Senior Full‑Stack Engineer',
      company: 'Independent / Fractional',
      description:
        'Partnering with funded teams to design, architect, and ship motion‑heavy product surfaces.'
    },
    {
      period: '2019 — 2022',
      role: 'Product Engineer',
      company: 'SaaS & DevTools',
      description:
        'Led end‑to‑end feature work across frontend, backend, and design systems for B2B products.'
    },
    {
      period: '2016 — 2019',
      role: 'Design‑minded Developer',
      company: 'Agency / Studio',
      description:
        'Crafted interactive brand experiences, micro‑sites, and high‑touch prototypes for global clients.'
    }
  ];
  
  export const ExperienceTimeline = () => {
    const ref = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      if (!ref.current) return;
      const ctx = gsap.context(() => {
        gsap.from('[data-timeline-item]', {
          opacity: 0,
          y: 32,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%'
          }
        });
      }, ref);
      return () => ctx.revert();
    }, []);
  
    return (
      <section className="px-6 md:px-10 lg:px-16">
        <div
          ref={ref}
          className="mx-auto max-w-6xl border-t border-white/5 pt-10 md:pt-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            Experience
          </p>
          <div className="mt-6 space-y-6 md:space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.period}
                data-timeline-item
                className="relative grid gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl md:grid-cols-[140px_minmax(0,1.3fr)_minmax(0,1.6fr)]"
              >
                <p className="text-xs text-neutral-400">{exp.period}</p>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-neutral-50">{exp.role}</p>
                  <p className="text-xs text-neutral-400">{exp.company}</p>
                </div>
                <p className="text-sm text-neutral-200">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  