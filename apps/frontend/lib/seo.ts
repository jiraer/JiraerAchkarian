import type { Metadata } from 'next';

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio-domain.com';

export const seo: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jiraer Achkarian – Full-Stack Developer',
    template: '%s | Jiraer Achkarian',
  },
  description:
    'full-stack developer and product designer crafting premium, animated digital experiences.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Jiraer Achkarian – Full-Stack Developer',
    description:
      'full-stack developer and product designer crafting premium, animated digital experiences.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jiraer Achkarian' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiraer Achkarian – Full-Stack Developer',
    description:
      'full-stack developer and product designer crafting premium, animated digital experiences.',
  },
};

/** JSON-LD for Person + WebSite (inject in layout or home) */
export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jiraer Achkarian',
    jobTitle: 'Full-Stack Developer',
    description:
      'full-stack developer and product designer crafting premium, animated digital experiences.',
    url: baseUrl,
  };
}

export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jiraer Achkarian',
    url: baseUrl,
    description: seo.description,
  };
}
  