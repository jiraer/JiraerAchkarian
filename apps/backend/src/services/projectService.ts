import { Project } from '../models/Project';
  
  export const listProjects = async (tech?: string) => {
    const query: Record<string, unknown> = {};
    if (tech) query.techStack = tech;
    const projects = await Project.find(query).sort({ featured: -1, sortOrder: 1 });
    return projects;
  };
  