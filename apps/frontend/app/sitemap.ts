import type { MetadataRoute } from 'next';

// Force static generation
export const dynamic = 'force-static';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jiraer-achkarian.pages.dev/';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}lab`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add more pages here if needed
  ];
}