import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'agency-site',
    title: 'Agency Landing Page',
    description: 'Modern marketing website with motion and 3D effects.',
    techStack: ['Next.js', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://www.claudesaba.com/',
    featured: false,
    category: 'Frontend', // match filter label
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Informational business site for exports and nursery.',
    techStack: ['Next.js', 'Tailwind'],
    liveUrl: 'https://www.greenexportgroup.com/',
    featured: false,
    category: 'Frontend', // match filter label
  },
];