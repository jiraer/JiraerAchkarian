'use client';

import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

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
      <AnimatedCursor />
      <ParticleBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Header>
        <Footer />
      </div>
    </div>
  );
};
