'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Palette, Sparkles } from 'lucide-react';

const skills = [
  {
    label: 'Frontend Architecture',
    icon: Code2,
    items: ['Next.js 14', 'React', 'App Router', 'RSC']
  },
  {
    label: 'Backend Systems',
    icon: Database,
    items: ['Node.js', 'Express', 'MongoDB', 'Redis']
  },
  {
    label: 'Experience Design',
    icon: Palette,
    items: ['Product Strategy', 'Design Systems', 'Prototyping']
  },
  {
    label: 'Motion & 3D',
    icon: Sparkles,
    items: ['Framer Motion', 'GSAP', 'Three.js']
  }
];

export const SkillsGrid = () => {
  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-20">
      {/* Section ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 h-72 w-72 bg-accent/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 bg-highlight/10 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/5 pt-12">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Capabilities
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground tracking-tight">
              Engineering & Product Strength
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, idx) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.2 }}
                whileHover={{ y: -6 }}
                id='jack'
                className="group relative overflow-hidden rounded-xl border border-white/5 
                           bg-gradient-to-br from-muted/70 via-background to-black/80
                           p-6 shadow-soft-glass transition-all duration-300 "
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-20 -left-20 h-60 w-60 bg-highlight/15 blur-3xl rounded-full" />
                  <div className="absolute -bottom-20 -right-20 h-60 w-60 bg-accent/15 blur-3xl rounded-full" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon + Label */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center 
                                    rounded-lg bg-highlight/10 text-highlight
                                    transition-all duration-300 
                                    group-hover:bg-highlight group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                      {group.label}
                    </p>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3 text-sm">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between text-neutral-300 
                                   transition-colors duration-300 group-hover:text-neutral-100"
                      >
                        <span>{item}</span>

                        {/* Animated dot indicator */}
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/60 
                                         transition-all duration-300 
                                         group-hover:scale-125 
                                         group-hover:bg-highlight" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Shine */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr 
                                from-white/5 via-transparent to-white/5 
                                opacity-0 transition-opacity duration-500 
                                group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};