'use client';

const experiences = [
  {
    period: 'May 2025 — Oct 2025',
    role: 'Full-stack Developer',
    company: 'SAFINA INTERNATIONAL LIMITED · Contract',
    description: 'Full-Stack Development. Remote, Beirut, Lebanon.',
  },
  {
    period: 'Oct 2024 — Jan 2025',
    role: 'Frontend Web Developer',
    company: 'N IDEA · Full-time',
    description: 'Front-End Development. Hybrid, Beirut, Lebanon.',
  },
  {
    period: 'Jul 2022 — Jun 2024',
    role: 'Web Developer',
    company: 'Upwork',
    description: 'Freelance Web Development projects.',
  },
  {
    period: 'Apr 2021 — Apr 2022',
    role: 'Frontend Web Developer',
    company: 'Codeminos · Contract',
    description: 'Frontend development tasks. Beirut, Lebanon.',
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="relative px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl pt-12 md:pt-16 relative">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white mb-12">
          Professional{' '}
          <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        {/* Timeline Line */}
        <div className="blur-xs absolute left-8 top-3/2 h-2/3 w-1 bg-gradient-to-b from-accent/75 via-highlight/90 to-accent/75 rounded-full shadow-md" />

        <div className="space-y-10 md:space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.period}
              className="group relative grid gap-4 md:grid-cols-[140px_minmax(0,1.5fr)_minmax(0,2fr)]
                         rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg
                         transition-all duration-300 hover:shadow-2xl hover:brightness-105 cursor-pointer"
            >
              {/* Slight Glow on Hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30">
                <div className="absolute -top-6 -left-6 h-32 w-32 bg-highlight/15 blur-2xl rounded-full" />
                <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-accent/15 blur-2xl rounded-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 rounded-3xl" />
              </div>

              {/* Period */}
              <p className="text-xs md:text-sm font-mono text-neutral-300 group-hover:text-white transition-colors duration-300">
                {exp.period}
              </p>

              {/* Role & Company */}
              <div className="space-y-1">
                <p className="text-sm md:text-base font-bold text-white group-hover:text-white scale-100 group-hover:scale-105 transition-all duration-300">
                  {exp.role}
                </p>
                <p className="text-xs md:text-sm italic text-neutral-400 group-hover:text-white/90 transition-colors duration-300">
                  {exp.company}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};