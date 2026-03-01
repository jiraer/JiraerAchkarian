import { Schema, model } from 'mongoose';
  
  export type UserRole = 'admin';
  
  export interface IUser {
    email: string;
    passwordHash: string;
    role: UserRole;
  }
  
  const userSchema = new Schema<IUser>(
    {
      email: { type: String, unique: true, required: true, index: true },
      passwordHash: { type: String, required: true },
      role: { type: String, enum: ['admin'], default: 'admin' }
    },
    { timestamps: true }
  );
  
  export const User = model<IUser>('User', userSchema);
  