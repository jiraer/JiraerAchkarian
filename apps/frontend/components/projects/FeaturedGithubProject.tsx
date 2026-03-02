'use client';

import { useState, useEffect } from 'react';
import { Skeleton } from '../ui/skeleton';
import { motion } from 'framer-motion';
import { Star, Github } from 'lucide-react';

/**
 * FeaturedGithubProject
 * - Client component (hardcoded data for now)
 * - Fully typed
 * - Suspense compatible (future SSR integration)
 */
export const FeaturedGithubProject = () => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Hardcoded data for now
  useEffect(() => {
    const hardcodedProject = {
      name: 'Awesome Project',
      description:
        'This is a description of the awesome project, showcasing how cool it is!',
      stars: 1234,
      lastUpdated: '2023-08-01',
      htmlUrl: 'https://github.com/yourname/awesome-project',
      readmePreview: 'This is a preview of the project\'s README.',
    };

    setTimeout(() => {
      setData(hardcodedProject);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, []);

  if (loading) {
    return <Skeleton className="h-72 w-full rounded-3xl bg-muted/70" />;
  }

  if (!data) return null;

  const updated = new Date(data.lastUpdated).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/5 via-black/50 to-black/80 p-6 shadow-soft-glass"
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] items-start">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            Featured · GitHub
          </p>
          <h2 className="text-lg font-semibold text-neutral-50">{data.name}</h2>
          <p className="text-sm text-neutral-300">
            {data.description ||
              'A featured open-source project used as a live case study in this portfolio.'}
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-300 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1">
              <Star className="h-3 w-3 text-highlight" />
              <span>{data.stars.toLocaleString()} stars</span>
            </span>
            <span className="text-neutral-400">Last updated {updated}</span>
          </div>
          <div className="pt-4">
            <a
              href={data.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-50 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        <div className="relative max-h-52 overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-4 text-xs leading-relaxed text-neutral-200">
          <pre className="whitespace-pre-wrap font-mono text-[11px] text-neutral-200">
            {data.readmePreview}
          </pre>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(214,167,94,0.35),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(143,175,159,0.32),transparent_60%)] opacity-40" />
    </motion.section>
  );
};