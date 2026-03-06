'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Code2, Database, Palette, Sparkles } from 'lucide-react';

// === Skills Data ===
const skills = [
  {
    label: 'Frontend Architecture',
    icon: Code2,
    items: ['Next.js', 'React', 'App Router', 'RSC'],
    logos: ['/nextdotjs.svg', '/react.svg'],
  },
  {
    label: 'Backend Systems',
    icon: Database,
    items: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    logos: ['/nodedotjs.svg', '/mongodb.svg', '/typescript.svg'],
  },
  {
    label: 'Experience Design',
    icon: Palette,
    items: ['Product Strategy', 'Design Systems', 'Prototyping'],
    logos: ['tailwindcss.svg', 'figma.svg'],
  },
  {
    label: 'Motion & 3D',
    icon: Sparkles,
    items: ['Framer Motion', 'GSAP', 'Three.js'],
    logos: ['/gsap.svg', 'graphql.svg', '/threedotjs.svg'],
  },
];

// === Carousel Logos ===
const carouselLogos = [
  '/nextdotjs.svg',
  '/reactdotjs.svg',
  '/typescript.svg',
  '/nodedotjs.svg',
  '/mongodb.svg',
  '/threedotjs.svg',
  '/docker.svg',
  '/cloudflare.svg',
  '/tailwindcss.svg',
];

// Duplicate for seamless scroll
const duplicated = [...carouselLogos, ...carouselLogos];

// === Carousel Row Component ===
function CarouselRow({ reverse = false }: { reverse?: boolean }) {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const rowRefs = [ref0, ref1];

  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls = [controls0, controls1];

  useEffect(() => {
    rowRefs.forEach((ref, i) => {
      if (!ref.current) return;

      const totalWidth = ref.current.scrollWidth / 2;
      const duration = 40;

      const direction = reverse ? (i % 2 === 0 ? 1 : -1) : (i % 2 === 0 ? -1 : 1);

      controls[i].start({
        x: direction === 1 ? [-totalWidth, 0] : [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        },
      });
    });
  }, [reverse]);

  return (
    <div className="relative w-full md:w-1/2 flex flex-col gap-8 justify-between items-stretch h-full">
      {/* Title & Description */}
      <div className="flex flex-col gap-4">
        <p className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">
          Skills & Technologies
        </p>
        <p className="text-sm sm:text-base text-left text-neutral-300 max-w-full sm:max-w-2xl">
          Mastering modern tools and frameworks to build scalable, beautiful, and interactive applications.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden w-full flex-1">
        {[0, 1].map((rowIdx) => (
          <motion.div
            key={rowIdx}
            ref={rowRefs[rowIdx]}
            className="flex gap-3 w-max"
            animate={controls[rowIdx]}
          >
            {duplicated.map((logo, j) => (
              <div
                key={j}
                className="mt-3 flex h-fit w-fit border border-white/25 p-4 rounded-lg items-center justify-center transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="tech logo"
                  className="h-10 w-10 object-contain filter invert brightness-0 saturate-0"
                />
              </div>
            ))}
          </motion.div>
        ))}

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>
  );
}

// === Skills Grid Component ===
export const SkillsGrid = () => {
  return (
    <section className="relative max-w-7xl mx-auto  px-6 md:px-10 lg:px-16 ">
      <div
        className="mx-auto  border-t border-white/5 pt-10 md:pt-14"
      ></div>
      <div className="mx-auto flex flex-col md:flex-row justify-start md:justify-center items-start md:items-end gap-8">
        {/* Carousel Left */}
        <CarouselRow />

        {/* Skills Cards Right */}
        <div className="flex-1 grid gap-6 grid-cols-1 md:grid-cols-2 w-full">
          {skills.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-lg border border-white/5
                           bg-gradient-to-br from-muted/70 via-background to-black/80
                           p-5 md:p-4 shadow-soft-glass transition-all duration-300 flex flex-col gap-4"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-16 -left-16 h-48 w-48 bg-highlight/15 blur-3xl rounded-full" />
                  <div className="absolute -bottom-16 -right-16 h-48 w-48 bg-accent/15 blur-3xl rounded-full" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-highlight/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm md:text-xs uppercase tracking-[0.15em] text-neutral-400">
                    {group.label}
                  </p>
                </div>

                {/* Logos */}
                {group.logos.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {group.logos.map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt={`${group.label} logo`}
                        className="h-6 w-6 object-contain filter invert brightness-0 saturate-0"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}

                {/* Items */}
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300 flex flex-col">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="transition-colors duration-300 group-hover:text-neutral-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Overlay effect */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};