export type Project = {
    title: string;
    slug: string;
    description: string;
    techStack: string[];
    featured: boolean;
    githubUrl?: string;
    liveUrl?: string;
    category?: string
  };
  
  export type FeaturedGithubProject = {
    name: string;
    description: string | null;
    stars: number;
    lastUpdated: string;
    htmlUrl: string;
    readmePreview: string;
      category?: string

  };
  