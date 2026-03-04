'use client';

import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

export const AnimatedCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isHovering = useMotionValue(0);

  const smoothX = useSpring(cursorX, { stiffness: 140, damping: 18 });
  const smoothY = useSpring(cursorY, { stiffness: 140, damping: 18 });

  const scale = useSpring(isHovering, {
    stiffness: 300,
    damping: 25,
  });

  const ringScale = useTransform(scale, [0, 1], [1, 1.8]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovering = !!target.closest(
        'a, button, [data-cursor="cta"]'
      );

      isHovering.set(hovering ? 1 : 0);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, isHovering]);

  return (
    <>

      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden md:block 
                   h-8 w-8 rounded-full border border-accent/80"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          scale: ringScale,
        }}
      />

      {/* Glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block 
                   h-12 w-12 rounded-full bg-accent/20 blur-xl"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          scale,
        }}
      />
    </>
  );
};