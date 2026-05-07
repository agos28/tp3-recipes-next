/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**', // Wildcard allows all images under this path
      },
    ],
  },
};

export default nextConfig;
