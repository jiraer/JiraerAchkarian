import { Request, Response, NextFunction } from 'express';
  import jwt from 'jsonwebtoken';
  import { env } from '../config/env';
  import { ApiError } from '../utils/ApiError';
  
  export type JwtPayload = {
    sub: string;
    role: 'admin';
  };
  
  declare global {
    namespace Express {
      interface Request {
        user?: JwtPayload;
      }
    }
  }
  
  export const requireAuth = (req: Request, _res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
      throw new ApiError(401, 'Missing or invalid authorization header');
    }
    const token = header.split(' ')[1];
    try {
      const payload = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
      req.user = payload;
      next();
    } catch {
      throw new ApiError(401, 'Invalid or expired token');
    }
  };
  
  export const requireAdmin = (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== 'admin') {
      throw new ApiError(403, 'Admin access required');
    }
    next();
  };
  