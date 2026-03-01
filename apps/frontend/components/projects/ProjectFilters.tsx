'use client';
  
  import { useRouter, useSearchParams } from 'next/navigation';
  import { useTransition } from 'react';
  import { motion } from 'framer-motion';
  
  const filters = ['All', 'Frontend', 'Backend', 'Design', '3D'];
  
  export const ProjectFilters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [pending, startTransition] = useTransition();
  
    const active = searchParams.get('tech') || 'All';
  
    const onSelect = (label: string) => {
      startTransition(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (label === 'All') {
          params.delete('tech');
        } else {
          params.set('tech', label);
        }
        router.replace(`/projects?${params.toString()}`);
      });
    };
  
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-black/40 p-1 text-[11px] tracking-[0.18em]">
        {filters.map((label) => {
          const isActive = active === label || (label === 'All' && !searchParams.get('tech'));
          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelect(label)}
              className="relative rounded-full px-4 py-1.5 text-[10px] uppercase text-neutral-400"
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/5"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
              <span className={isActive ? 'text-foreground' : ''}>{label}</span>
            </button>
          );
        })}
        {pending && (
          <span className="px-2 text-[10px] uppercase text-neutral-500">Updating…</span>
        )}
      </div>
    );
  };
  