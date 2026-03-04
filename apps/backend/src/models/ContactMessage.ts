import { Schema, model } from 'mongoose';
  
export interface IContactMessage {
  name: string;
  email: string;
  message: string;
  company?: string;
  budgetRange?: string;
  source?: string;
  honeypot?: string;
  userAgent?: string;
  ipHash?: string;

  createdAt: Date;     
  updatedAt: Date; 
}
  
  const contactMessageSchema = new Schema<IContactMessage>(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      message: { type: String, required: true, trim: true },
      company: { type: String, trim: true },
      budgetRange: { type: String, trim: true },
      source: { type: String, trim: true },
      honeypot: { type: String },
      userAgent: { type: String },
      ipHash: { type: String }
    },
    { timestamps: true }
  );
  
  export const ContactMessage = model<IContactMessage>('ContactMessage', contactMessageSchema);
  