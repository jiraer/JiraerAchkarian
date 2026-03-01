import express from 'express';
  import helmet from 'helmet';
  import cors from 'cors';
  import mongoSanitize from 'express-mongo-sanitize';
  import xss from 'xss-clean';
  import { env } from './config/env';
  import { corsOptions } from './config/cors';
  import { rateLimiter, contactRateLimiter } from './middleware/rateLimiter';
  import { securityHeaders } from './middleware/security';
  import { notFoundHandler } from './middleware/notFoundHandler';
  import { errorHandler } from './middleware/errorHandler';
  import { sanitize } from './middleware/sanitize';
  import { responseWrapper } from './middleware/responseWrapper';
  import { requestLogger } from './middleware/requestLogger';
  import apiRoutes from './routes';
  
  const app = express();
  
  app.set('trust proxy', 1);
  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(rateLimiter);
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(mongoSanitize());
  app.use(xss() as unknown as express.RequestHandler);
  app.use(sanitize);
  app.use(responseWrapper);
  app.use(securityHeaders);
  app.use(requestLogger);
  
  app.use('/api', apiRoutes);
  app.use('/api/contact', contactRateLimiter);
  
  app.use(notFoundHandler);
  app.use(errorHandler);
  
  export default app;
  