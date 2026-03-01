import { NextResponse } from 'next/server';
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio-domain.com';
  
  export async function GET() {
    const body = `User-agent: *
  Allow: /
  
  Sitemap: ${baseUrl}/api/sitemap
  `;
  
    return new NextResponse(body, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  