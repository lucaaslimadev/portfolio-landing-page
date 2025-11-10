/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 60
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ],
    localPatterns: [
      {
        pathname: "/profile.*",
        search: ""
      }
    ],
    qualities: [75, 90, 95]
  }
};

export default nextConfig;

