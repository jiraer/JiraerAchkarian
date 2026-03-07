'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleBooking = () => {
    setLoading(true);

    const bookingUrl = "https://calendar.app.google/J3VVGXD3VkWsLJUR8";

    window.open(bookingUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-6 pt-16 md:px-10 md:pt-24 lg:px-16">
      {/* Soft Glow & Background */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-highlight/10 via-accent/5 to-highlight/10 blur-xl opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative rounded-3xl border border-white/20 bg-neutral-900/90 p-10 backdrop-blur-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.7)] transition-shadow duration-300"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">
          Book a <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">Google Meet</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          Let’s discuss your product, goals, and create something exceptional together.
          Pick a time that works for you, and we’ll connect via Google Meet.
        </p>

        {/* Info Card */}
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-800/50 p-6 text-sm text-neutral-300 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <p className="font-medium text-white mb-2">What to expect:</p>
            <ul className="space-y-2 text-neutral-400 list-inside list-disc">
              <li>20–30 minute strategy call</li>
              <li>Project scope discussion</li>
              <li>Timeline & budget alignment</li>
              <li>Next steps clarity</li>
            </ul>
          </div>

          {/* Button + Note */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 pt-4">
            <motion.button
              onClick={handleBooking}
              disabled={loading}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-highlight to-accent px-8 py-4 text-sm md:text-xs font-semibold uppercase tracking-wider text-black shadow-lg shadow-highlight/30 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Opening…" : "Schedule Google Meet"}
            </motion.button>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs text-neutral-400 text-center md:text-right"
            >
              Secure • Private • Professional
            </motion.span>
          </div>
        </div>

        {/* Decorative floating gradients for fun */}
        <div className="absolute -top-12 -left-12 h-48 w-48 bg-highlight/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute -bottom-12 -right-16 h-56 w-56 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      </motion.div>
    </div>
  );
};
