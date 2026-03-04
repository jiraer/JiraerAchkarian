/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export", // <-- remove or comment out
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: "..." },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          {
            key: "Feature-Policy",
            value: "geolocation 'self'; microphone 'none'; camera 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
