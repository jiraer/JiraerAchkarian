import { z } from 'zod';
  
  export const projectSchema = z.object({
    title: z.string().min(3).max(120),
    slug: z.string().min(3).max(120),
    description: z.string().min(10).max(4000),
    techStack: z.array(z.string().min(1)).min(1),
    featured: z.boolean().default(false),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    sortOrder: z.number().int().min(0).default(0)
  });
  