'use client';

import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { Suspense } from 'react';

// Client-only components
const AnimatedCursor = dynamic(
  () => import('./AnimatedCursor').then((m) => m.AnimatedCursor),
  { ssr: false }
);

const ParticleBackground = dynamic(
  () => import('./ParticleBackground').then((m) => m.ParticleBackground),
  { ssr: false }
);

export const Shell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Persistent client-only animations */}
      <AnimatedCursor />
      <ParticleBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header always persists */}
        <Header />

        {/* AnimatePresence wraps page content only */}
        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={<div className="h-[400px] w-full animate-pulse bg-muted/60" />}>
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex-grow"
            >
              {children}
            </motion.main>
          </Suspense>
        </AnimatePresence>

        {/* Footer always persists */}
        <Footer />
      </div>
    </div>
  );
};