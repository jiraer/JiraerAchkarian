// apps/frontend/app/layout.tsx
import '../styles/globals.css';
import { seo, getPersonJsonLd, getWebSiteJsonLd } from '../lib/seo';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}