/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "theachievers.com.np" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Legacy slug with spaces/capitals -> clean slug (TRD 5.1)
      {
        source: "/courses/Physics%20chemistry%20maths",
        destination: "/courses/physics-chemistry-maths",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
