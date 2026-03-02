import type { MetadataRoute } from 'next';
export const dynamic = "force-static"; // Ensures that the sitemap is statically generated

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jiraer-achkarian.pages.dev/'; // Ensure your base URL is correct, ideally from environment variables

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/lab`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Add more routes as needed here
  ];
}