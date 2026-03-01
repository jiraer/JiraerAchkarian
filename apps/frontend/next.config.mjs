/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
