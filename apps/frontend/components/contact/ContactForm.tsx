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
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-highlight/20 via-accent/10 to-highlight/20 blur-2xl opacity-60 pointer-events-none" />

      <div className="relative rounded-3xl border border-white/10 bg-neutral-900/80 p-10 backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">

        <h2 className="text-2xl font-display tracking-tight text-white">
          Book a Google Meet
        </h2>

        <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
          Let’s discuss your product, goals, and how we can build something exceptional.
          Choose a time that works for you and we’ll connect via Google Meet.
        </p>

        <div className="mt-8 space-y-6">

          <div className="rounded-2xl border border-white/10 bg-neutral-800/50 p-6 text-sm text-neutral-300">
            <p className="font-medium text-white mb-2">
              What to expect:
            </p>
            <ul className="space-y-2 text-neutral-400">
              <li>• 20–30 minute strategy call</li>
              <li>• Project scope discussion</li>
              <li>• Timeline & budget alignment</li>
              <li>• Next steps clarity</li>
            </ul>
          </div>

          <div className="flex items-center flex-col md:flex-row gap-4 md:gap-0 justify-between pt-4">
            <button
              onClick={handleBooking}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-highlight to-accent px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black shadow-lg shadow-highlight/30 transition hover:scale-[1.03] disabled:opacity-60"
            >
              {loading ? "Opening…" : "Schedule Google Meet"}
            </button>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-neutral-400"
            >
              Secure • Private • Professional
            </motion.span>
          </div>

        </div>
      </div>
    </div>
  );
};