import bcrypt from 'bcryptjs';
  import jwt from 'jsonwebtoken';
  import { User } from '../models/User';
  import { env } from '../config/env';
  
  export const ensureAdminSeeded = async () => {
    const existing = await User.findOne({ email: env.ADMIN_EMAIL });
    if (existing) return;
  
    const passwordHash = await bcrypt.hash(env.ADMIN_PASSWORD, 12);
    await User.create({
      email: env.ADMIN_EMAIL,
      passwordHash,
      role: 'admin'
    });
  };
  
  export const login = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) return null;
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return null;
  
    const token = jwt.sign({ sub: user.id, role: user.role }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN
    });
  
    return { token };
  };
  