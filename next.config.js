const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.m.dana.id',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
