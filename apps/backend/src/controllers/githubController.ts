import { Request, Response } from 'express';
  import { asyncHandler } from '../utils/asyncHandler';
  import { getFeaturedGithubProject } from '../services/githubService';
  
  export const getFeaturedGithub = asyncHandler(async (_req: Request, res: Response) => {
    const data = await getFeaturedGithubProject();
    res.success(data);
  });
  