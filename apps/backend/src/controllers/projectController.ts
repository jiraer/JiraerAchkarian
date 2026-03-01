import { Request, Response } from 'express';
  import { asyncHandler } from '../utils/asyncHandler';
  import { projectSchema } from '../validation/projectValidation';
  import { Project } from '../models/Project';
  import { listProjects } from '../services/projectService';
  import { ApiError } from '../utils/ApiError';
  
  export const getProjects = asyncHandler(async (req: Request, res: Response) => {
    const tech = typeof req.query.tech === 'string' ? req.query.tech : undefined;
    const projects = await listProjects(tech);
    res.success(projects);
  });
  
  export const createProject = asyncHandler(async (req: Request, res: Response) => {
    const parsed = projectSchema.parse(req.body);
    const existing = await Project.findOne({ slug: parsed.slug });
    if (existing) {
      throw new ApiError(400, 'Project with this slug already exists');
    }
    const project = await Project.create(parsed);
    res.success(project);
  });
  