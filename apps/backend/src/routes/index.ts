import { Router } from 'express';
  import contactRoutes from './contactRoutes';
  import projectRoutes from './projectRoutes';
  import authRoutes from './authRoutes';
  import githubRoutes from './githubRoutes';
  
  const router = Router();
  
  router.use('/contact', contactRoutes);
  router.use('/projects', projectRoutes);
  router.use('/auth', authRoutes);
  router.use('/integrations/github', githubRoutes);
  
  export default router;
  