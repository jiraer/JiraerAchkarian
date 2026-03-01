import { Request, Response, NextFunction } from 'express';
  import { ZodError } from 'zod';
  import { ApiError } from '../utils/ApiError';
  import { logger } from '../config/logger';
  
  export const errorHandler = (
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    let statusCode = 500;
    let message = 'Internal server error';
    let details: unknown = undefined;
  
    if (err instanceof ApiError) {
      statusCode = err.statusCode;
      message = err.message;
      details = err.details;
    } else if (err instanceof ZodError) {
      statusCode = 400;
      message = 'Validation failed';
      details = err.flatten();
    }
  
    logger.error({ err, statusCode }, 'Request failed');
  
    res.status(statusCode).json({
      success: false,
      error: { message, details }
    });
  };
  