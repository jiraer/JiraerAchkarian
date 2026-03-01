import { Schema, model } from 'mongoose';
  
  export interface IProject {
    title: string;
    slug: string;
    description: string;
    techStack: string[];
    featured: boolean;
    githubUrl?: string;
    liveUrl?: string;
    sortOrder: number;
  }
  
  const projectSchema = new Schema<IProject>(
    {
      title: { type: String, required: true },
      slug: { type: String, required: true, unique: true, index: true },
      description: { type: String, required: true },
      techStack: [{ type: String, required: true }],
      featured: { type: Boolean, default: false },
      githubUrl: { type: String },
      liveUrl: { type: String },
      sortOrder: { type: Number, default: 0 }
    },
    { timestamps: true }
  );
  
  export const Project = model<IProject>('Project', projectSchema);
  