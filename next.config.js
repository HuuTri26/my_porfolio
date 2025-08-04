/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app', 'netlify.app'],
    loader: 'default',
    path: '/_next/image/',
  },
}

module.exports = nextConfig
