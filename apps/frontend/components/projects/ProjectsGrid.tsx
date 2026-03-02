'use client';

import { ProjectCard } from './ProjectCard';
import { projects } from '../../lib/projects';
import { useSearchParams } from 'next/navigation';

export const ProjectsGrid = () => {
  const searchParams = useSearchParams();
  const tech = searchParams.get('tech'); // this comes from ProjectFilters

  const filteredProjects = tech && tech !== 'All'
    ? projects.filter((p) => p.category === tech)
    : projects;

  if (!filteredProjects || filteredProjects.length === 0) {
    return (
      <p className="text-sm text-neutral-400">
        No projects in this category yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};