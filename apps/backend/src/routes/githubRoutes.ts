import { Router } from 'express';
  import { getFeaturedGithub } from '../controllers/githubController';
  
  const router = Router();
  
  // Public, read-only
  router.get('/featured', getFeaturedGithub);
  
  export default router;
  