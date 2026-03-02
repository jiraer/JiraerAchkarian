'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../lib/types';

export const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    el.style.setProperty('--tilt-x', `${y * -6}deg`);
    el.style.setProperty('--tilt-y', `${x * 6}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        transform:
          'perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateZ(0)',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/4 via-black/40 to-black/70 p-5 backdrop-blur-2xl shadow-soft-glass"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-neutral-50">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-300 line-clamp-3">
            {project.description}
          </p>
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${project.title} in new tab`}
            className="rounded-full bg-white/5 p-2 text-neutral-200 transition-colors hover:bg-white/10"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-neutral-300">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-900/70 px-3 py-1 text-[10px] uppercase tracking-[0.16em]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Live Preview Iframe */}
      {project.liveUrl && (
        <div className="mt-6 relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 aspect-[16/10]">
          <iframe
            src={project.liveUrl}
            title={`${project.title} preview`}
            loading="lazy"
            className="absolute inset-0 w-full h-full scale-[0.9] origin-top pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* GitHub Link */}
      {project.githubUrl && (
        <div className="mt-4 text-xs text-neutral-400">
          <span>GitHub: </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            View source
          </a>
        </div>
      )}

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(214,167,94,0.28),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(143,175,159,0.24),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  );
};