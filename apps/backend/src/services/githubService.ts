import axios from 'axios';
  import NodeCache from 'node-cache';
  import { env } from '../config/env';
  
  const cache = new NodeCache({ stdTTL: env.GITHUB_CACHE_TTL_SECONDS });
  
  type RepoResponse = {
    name: string;
    description: string | null;
    stargazers_count: number;
    updated_at: string;
    html_url: string;
  };
  
  type ReadmeResponse = {
    content: string;
    encoding: string;
  };
  
  export const getFeaturedGithubProject = async () => {
    const cacheKey = 'github:featured';
  
    const cached = cache.get(cacheKey);
    if (cached) return cached;
  
    const headers: Record<string, string> = {
      'User-Agent': 'portfolio-backend'
    };
    if (env.GITHUB_TOKEN) headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
  
    const repoUrl = `https://api.github.com/repos/${env.GITHUB_USERNAME}/${env.GITHUB_REPO}`;
    const readmeUrl = `${repoUrl}/readme`;
  
    const [repoRes, readmeRes] = await Promise.all([
      axios.get<RepoResponse>(repoUrl, { headers }),
      axios.get<ReadmeResponse>(readmeUrl, { headers })
    ]);
  
    const readmeContent = Buffer.from(
      readmeRes.data.content,
      readmeRes.data.encoding as BufferEncoding
    ).toString('utf8');
  
    const firstSection = readmeContent.split(/^##\s+/m)[0].trim();
  
    const payload = {
      name: repoRes.data.name,
      description: repoRes.data.description,
      stars: repoRes.data.stargazers_count,
      lastUpdated: repoRes.data.updated_at,
      htmlUrl: repoRes.data.html_url,
      readmePreview: firstSection
    };
  
    cache.set(cacheKey, payload);
    return payload;
  };
  