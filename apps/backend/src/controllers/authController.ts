import { Request, Response } from 'express';
  import { asyncHandler } from '../utils/asyncHandler';
  import { authSchema } from '../validation/authValidation';
  import { login } from '../services/authService';
  import { ApiError } from '../utils/ApiError';
  
  export const adminLogin = asyncHandler(async (req: Request, res: Response) => {
    const parsed = authSchema.parse(req.body);
    const result = await login(parsed.email, parsed.password);
    if (!result) {
      throw new ApiError(401, 'Invalid credentials');
    }
    res.success(result);
  });
  