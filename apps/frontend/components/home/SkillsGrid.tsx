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
  '/react.svg',
  '/typescript.svg',
  '/nodedotjs.svg',
  '/mongodb.svg',
  '/threedotjs.svg',
  '/docker.svg',
  '/cloudflare.svg',
  '/tailwindcss.svg',
];

// === Carousel Row Component ===
function CarouselRow({ reverse = false }: { reverse?: boolean }) {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const rowRefs = [ref0, ref1];

  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls = [controls0, controls1];

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      rowRefs.forEach((ref, i) => {
        if (!ref.current) return;

        const el = ref.current;
        const parentWidth = el.parentElement?.clientWidth || 0;
        const scrollTarget = Math.max(0, el.scrollWidth - parentWidth);

        const duration = 20;
        const direction = reverse ? (i % 2 === 0 ? 1 : -1) : (i % 2 === 0 ? -1 : 1);

        if (scrollTarget > 0) {
          controls[i].start({
            x: direction === 1 ? [-scrollTarget, 0] : [0, -scrollTarget],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration,
                ease: 'linear',
              },
            },
          });
        } else {
          controls[i].stop();
          controls[i].set({ x: 0 });
        }
      });
    });

    rowRefs.forEach(ref => {
      if (ref.current?.parentElement) {
        resizeObserver.observe(ref.current.parentElement);
      }
    });

    return () => resizeObserver.disconnect();
  }, [reverse]);

  return (
    <div className="relative flex flex-col justify-between h-full min-h-full">
      {/* Title & Description at the top */}
      <div className="flex flex-col gap-4">
        <p className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">
          Skills & Technologies  <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">
            Efficient Development
          </span>
        </p>
        <p className="text-sm sm:text-base text-neutral-300 max-w-full sm:max-w-2xl">
          Mastering modern tools and frameworks to build scalable, beautiful, and interactive applications.
        </p>
      </div>

      {/* Carousel at the bottom */}
      <div className="relative overflow-hidden w-full pt-8">
        {[0, 1].map((rowIdx) => (
          <motion.div
            key={rowIdx}
            ref={rowRefs[rowIdx]}
            className="flex gap-3 w-max mt-8"
            animate={controls[rowIdx]}
          >
            {carouselLogos.map((logo, j) => (
              <div
                key={j}
                className="flex h-fit w-fit border border-white/25 p-4 rounded-lg items-center justify-center transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="tech logo"
                  className="h-12 w-12 object-contain filter invert brightness-0 saturate-0"
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
    <section className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      <div className="mx-auto border-t border-white/5 pt-10 md:pt-14"></div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        <CarouselRow />

        {/* Skills Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {skills.map((group, idx) => {
            return (
              <motion.div
                key={group.label}
                id='jack'
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover" // Triggers staggered children
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.2 }}
                className="group relative overflow-hidden rounded-lg border border-white/25
                bg-gradient-to-br from-muted/80 via-background to-black/90
                p-5 md:p-4 shadow-soft-glass transition-all duration-300 flex flex-col gap-4 cursor-pointer"
              >
                {/* Glow Background */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-16 -left-16 h-48 w-48 bg-highlight/25 blur-3xl rounded-full" />
                  <div className="absolute -bottom-16 -right-16 h-48 w-48 bg-accent/25 blur-3xl rounded-full" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-3">
                  <p className="text-sm md:text-xs uppercase tracking-[0.15em] text-white/85 font-medium">
                    {group.label}
                  </p>
                </div>

                {/* Staggered Logos */}
                {group.logos.length > 0 && (
                  <motion.div
                    className="flex gap-4 flex-wrap items-center py-1"
                    variants={{
                      hover: {
                        transition: {
                          staggerChildren: 0.07, // The staggering delay
                        }
                      }
                    }}
                  >
                    {group.logos.map((logo, i) => (
                      <div key={i} className="relative">
                        {/* 3D Shadow Layer */}
                        <motion.div
                          className="absolute inset-0 bg-black/80 blur-md rounded-full"
                          variants={{
                            hover: {
                              opacity: 0.8,
                              y: 8,
                              scale: 0.8,
                            },
                          }}
                          initial={{ opacity: 0, y: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />

                        {/* The Logo */}
                        <motion.img
                          src={logo}
                          alt={`${group.label} logo`}
                          className="relative h-7 w-7 object-contain filter invert brightness-0 z-10"
                          variants={{
                            hover: {
                              y: -6, // Lift effect
                              filter: "invert(1) brightness(1) drop-shadow(0 10px 8px rgba(0,0,0,0.5))",
                            },
                          }}
                          initial={{ y: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Items */}
                <ul className="list-disc list-inside space-y-1 text-sm text-white/70 flex flex-col relative z-10">
                  {group.items.map((item) => (
                    <li key={item} className="transition-colors duration-300 group-hover:text-white">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Subtle Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
