import { Request, Response, NextFunction } from 'express';
  
  const sanitizeString = (value: unknown): unknown => {
    if (typeof value !== 'string') return value;
    return value.replace(/<script.*?>.*?<\/script>/gi, '').trim();
  };
  
  const deepSanitize = (obj: any): any => {
    if (Array.isArray(obj)) return obj.map(deepSanitize);
    if (obj && typeof obj === 'object') {
      const out: any = {};
      Object.keys(obj).forEach((key) => {
        out[key] = deepSanitize(obj[key]);
      });
      return out;
    }
    return sanitizeString(obj);
  };
  
  export const sanitize = (req: Request, _res: Response, next: NextFunction) => {
    if (req.body) req.body = deepSanitize(req.body);
    if (req.query) req.query = deepSanitize(req.query);
    next();
  };
  