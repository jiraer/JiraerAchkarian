import '../styles/globals.css';
import { seo, getPersonJsonLd, getWebSiteJsonLd } from '../lib/seo';
import ClientShell from '../components/layout/ClientShell'; // Import the new wrapper

// Metadata must stay in a Server Component
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
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        
        {/* The ClientShell boundary handles the client-only rendering */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
