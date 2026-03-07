'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';

const phrases = [
  'full-stack systems with taste.',
  'motion-first digital products.',
  'calm, opinionated interfaces.',
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 md:px-10 md:pt-24 lg:px-16">
      <div className="grid gap-12 md:grid-cols-2 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6 md:pr-8 lg:pr-12">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-xs uppercase tracking-[0.22em] text-neutral-400"
          >
            Jiraer Achkarian · Developer & Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-4xl leading-tight md:text-5xl lg:text-6xl font-display tracking-tight"
          >
            I design & engineer{' '}
            <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">
              premium product experiences
            </span>
          </motion.h1>

          <motion.div
            className="relative h-6 overflow-hidden text-sm text-neutral-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                className="absolute"
              >
                I build {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <div className="flex flex-wrap gap-3 pt-2 text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            {['Full-stack architecture', 'Motion systems', 'Product design'].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/5 bg-white/5 px-3 py-1 backdrop-blur-md cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, translateY: -2 }}
              className="group inline-flex items-center gap-2 rounded-full border border-highlight/50 bg-highlight/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-highlight backdrop-blur-md"
            >
              <span>Start a project</span>
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <motion.a
              href="/projects"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-300"
            >
              <span>See selected work</span>
            </motion.a>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <motion.div
          className="grid md:grid-cols-7 w-full rounded-2xl overflow-hidden border border-white/25 bg-neutral-900 shadow-soft-glass"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >

          {/* Image */}
          <div className="relative md:col-span-4 h-[420px]">
            <Image
              src="/jiraer-achkarian.webp"
              alt="Jiraer Achkarian"
              fill
              loading="lazy"
              className="object-cover"
              style={{ objectPosition: '50% 40%' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Card */}
          <motion.div
            className="md:col-span-3 flex justify-center items-center p-6 bg-black/60 backdrop-blur-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.25 }}
          >
            <div className="flex flex-row md:flex-col w-full justify-between md:justify-start gap-x-6 md:gap-y-8">

              <div className="flex flex-col justify-start items-start">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2 md:mb-3">
                  Stack
                </p>
                <div className="space-y-1 text-sm text-neutral-200">
                  <p>TypeScript</p>
                  <p>Next.js · Node</p>
                  <p>Design Systems</p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2 md:mb-3">
                  Approach
                </p>
                <div className="space-y-1 text-sm text-neutral-200">
                  <p>Motion-first</p>
                  <p>Opinionated UI</p>
                  <p>Production-ready systems</p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};