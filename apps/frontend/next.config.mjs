/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },

  // Add HTTP headers for security
  async headers() {
    return [
      {
        // Apply these headers to all pages
        source: "/(.*)", // applies to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://avatars.githubusercontent.com; object-src 'none'; base-uri 'none'; form-action 'self';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents browsers from interpreting files as a different MIME type
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents clickjacking by disallowing the page to be embedded in a frame
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Enables the browser’s built-in XSS filtering (disabled by default in most modern browsers)
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // Enforces HTTPS, even for subdomains
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade", // Ensures referrer information is not sent when navigating from HTTPS to HTTP
          },
          {
            key: "Feature-Policy",
            value: "geolocation 'self'; microphone 'none'; camera 'none';", // Controls access to browser features
          },
        ],
      },
    ];
  },
};

export default nextConfig;
