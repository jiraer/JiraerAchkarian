import '../styles/globals.css';
import { seo, getPersonJsonLd, getWebSiteJsonLd } from '../lib/seo';
import ClientShell from '../components/layout/ClientShell';

export const metadata = seo;
export const viewport = {
  themeColor: '#0E0E10',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = getPersonJsonLd();
  const websiteJsonLd = getWebSiteJsonLd();

  return (
    <html lang="en">
      <body className="font-sans relative min-h-screen flex flex-col">
        {/* SEO structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Client-side shell */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}