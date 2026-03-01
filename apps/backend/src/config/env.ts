import { z } from 'zod';
  import dotenv from 'dotenv';
  
  dotenv.config();
  
  const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(4000),
    MONGODB_URI: z.string().url(),
    JWT_SECRET: z.string().min(16),
    JWT_EXPIRES_IN: z.string().default('1d'),
    ADMIN_EMAIL: z.string().email(),
    ADMIN_PASSWORD: z.string().min(8),
    CORS_ORIGIN: z.string(),
    GITHUB_USERNAME: z.string(),
    GITHUB_REPO: z.string().default('JiraerAchkarian'),
    GITHUB_TOKEN: z.string().optional(),
    GITHUB_CACHE_TTL_SECONDS: z.coerce.number().default(900),
    RATE_LIMIT_WINDOW_MS: z.coerce.number().default(60000),
    RATE_LIMIT_MAX: z.coerce.number().default(60),
    CONTACT_RATE_LIMIT_MAX: z.coerce.number().default(10)
  });
  
  export const env = envSchema.parse(process.env);
  