import { Router } from 'express';
  import { getProjects, createProject } from '../controllers/projectController';
  import { requireAuth, requireAdmin } from '../middleware/auth';
  
  const router = Router();
  
  router.get('/', getProjects);
  router.post('/', requireAuth, requireAdmin, createProject);
  
  export default router;
  