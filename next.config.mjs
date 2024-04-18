/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: '127.0.0.1',
        hostname: 'localhost',
        port: '1337'
        // pathname: '/uploads/'
      }
    ]
  }
};

export default nextConfig;
