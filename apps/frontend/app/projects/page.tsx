import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProjectsGrid } from '../../components/projects/ProjectsGrid';
import { FeaturedGithubProject } from '../../components/projects/FeaturedGithubProject';
import { ProjectFilters } from '../../components/projects/ProjectFilters';
import { Skeleton } from '../../components/ui/skeleton';
import { MetaData } from '@react-three/drei';

export const metadata: Metadata = {
  title: 'Selected work',
  description:
    'A curated selection of shipped products, creative experiments, and engineering case studies.',
};

export default function ProjectsPage() {
  return (
    <main className="px-6 max-w-7xl mx-auto md:px-10 lg:px-16 pb-24 space-y-16">
      <header className="pt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-display tracking-tight">
            Selected work
          </h1>
          <p className="mt-3 max-w-xl text-sm text-neutral-300">
            A curated selection of shipped products, creative experiments, and
            engineering case studies.
          </p>
        </div>
        <ProjectFilters />
      </header>

      <section className="space-y-10">
        <Suspense
          fallback={<Skeleton className="w-full h-72 rounded-3xl bg-muted/60" />}
        >
          <FeaturedGithubProject />
        </Suspense>
        <ProjectsGrid />
      </section>
    </main>
  );
}