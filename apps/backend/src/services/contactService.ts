import crypto from 'crypto';
  import { ContactMessage } from '../models/ContactMessage';
  
  export const createContactMessage = async (data: {
    name: string;
    email: string;
    message: string;
    company?: string;
    budgetRange?: string;
    source?: string;
    honeypot?: string;
    userAgent?: string;
    ip?: string;
  }) => {
    const ipHash = data.ip
      ? crypto.createHash('sha256').update(data.ip).digest('hex')
      : undefined;
  
    const doc = await ContactMessage.create({
      name: data.name,
      email: data.email,
      message: data.message,
      company: data.company,
      budgetRange: data.budgetRange,
      source: data.source,
      honeypot: data.honeypot,
      userAgent: data.userAgent,
      ipHash
    });
  
    return { id: doc.id, createdAt: doc.createdAt };
  };
  