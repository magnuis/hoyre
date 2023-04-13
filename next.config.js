/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  images: {
    domains: ['cdn.sanity.io', 'hoyre.no', 'gfx.nrk.no', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
