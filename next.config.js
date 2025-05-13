/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
    serverActions: {
    bodySizeLimit: '5mb', // Increase to your required limit, e.g., '5mb', '10mb'
  },
};

module.exports = nextConfig;
