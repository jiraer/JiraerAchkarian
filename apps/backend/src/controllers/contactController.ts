import { Request, Response } from 'express';
  import { asyncHandler } from '../utils/asyncHandler';
  import { contactSchema } from '../validation/contactValidation';
  import { createContactMessage } from '../services/contactService';
  import { ApiError } from '../utils/ApiError';
  
  export const createContact = asyncHandler(async (req: Request, res: Response) => {
    const parsed = contactSchema.parse(req.body);
  
    if (parsed.honeypot && parsed.honeypot.trim().length > 0) {
      throw new ApiError(400, 'Spam detected');
    }
  
    const ip =
      (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ||
      req.ip ||
      undefined;
  
    const meta = {
      userAgent: req.headers['user-agent'],
      ip
    };
  
    const result = await createContactMessage({
      ...parsed,
      userAgent: meta.userAgent,
      ip: meta.ip
    });
  
    res.success({ id: result.id, createdAt: result.createdAt });
  });
  