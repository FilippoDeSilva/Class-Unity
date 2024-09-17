/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/photos/**', // Adjust as needed
        },
      ],
    },
    env: {
      NEXT_PUBLIC_STREAM_API: process.env.NEXT_PUBLIC_STREAM_API,
    },
    // Add other configurations if needed
  };
  
  export default nextConfig;
  