import { z } from 'zod';
  
  export const contactSchema = z.object({
    name: z.string().min(2).max(80),
    email: z.string().email(),
    message: z.string().min(20).max(2000),
    company: z.string().max(120).optional(),
    budgetRange: z.string().max(60).optional(),
    source: z.string().max(80).optional(),
    honeypot: z.string().optional()
  });
  