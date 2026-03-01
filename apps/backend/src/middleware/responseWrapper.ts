import { Request, Response, NextFunction } from 'express';
  
  declare global {
    namespace Express {
      interface Response {
        success: (data?: unknown, meta?: Record<string, unknown>) => void;
        fail: (statusCode: number, message: string, details?: unknown) => void;
      }
    }
  }
  
  export const responseWrapper = (_req: Request, res: Response, next: NextFunction) => {
    res.success = (data?: unknown, meta?: Record<string, unknown>) => {
      res.json({ success: true, data, meta: meta || null });
    };
  
    res.fail = (statusCode: number, message: string, details?: unknown) => {
      res.status(statusCode).json({ success: false, error: { message, details } });
    };
  
    next();
  };
  