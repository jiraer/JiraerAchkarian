'use client';
  
  import { useEffect, useState } from 'react';
  import { ProjectCard } from './ProjectCard';
  import type { Project } from '../../lib/types';
  import { BACKEND_URL } from '../../lib/config';
  import { Skeleton } from '../ui/skeleton';
  import { useSearchParams } from 'next/navigation';
  
  export const ProjectsGrid = () => {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const tech = searchParams.get('tech') || undefined;
  
    useEffect(() => {
      const fetchProjects = async () => {
        setLoading(true);
        try {
          const url = new URL('/api/projects', BACKEND_URL);
          if (tech) url.searchParams.set('tech', tech);
          const res = await fetch(url.toString(), { cache: 'no-store' });
          const json = await res.json();
          setProjects(json.data || []);
        } catch {
          setProjects([]);
        } finally {
          setLoading(false);
        }
      };
      fetchProjects();
    }, [tech]);
  
    if (loading) {
      return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-3xl bg-muted/70" />
          ))}
        </div>
      );
    }
  
    if (!projects || projects.length === 0) {
      return (
        <p className="text-sm text-neutral-400">
          Projects will appear here soon. In the meantime, see the featured GitHub
          repo above.
        </p>
      );
    }
  
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  };
  