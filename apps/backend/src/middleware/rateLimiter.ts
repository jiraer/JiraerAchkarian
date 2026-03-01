import rateLimit from 'express-rate-limit';
  import { env } from '../config/env';
  
  export const rateLimiter = rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    max: env.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests, please try again later.'
  });
  
  export const contactRateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: env.CONTACT_RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
      const ip = (req.headers['x-forwarded-for'] as string) || req.ip || 'unknown';
      const email = (req.body?.email as string | undefined) || 'no-email';
      return `${ip}-${email}`;
    }
  });
  