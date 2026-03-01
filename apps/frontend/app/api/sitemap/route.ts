import { NextResponse } from 'next/server';
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio-domain.com';
  
  export async function GET() {
    const routes = ['', '/projects', '/lab'];
    const body = routes
      .map(
        (route) =>
          `<url><loc>${baseUrl}${route}</loc><changefreq>weekly</changefreq><priority>${
            route === '' ? '1.0' : '0.7'
          }</priority></url>`
      )
      .join('');
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${body}
  </urlset>`;
  
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  }
  