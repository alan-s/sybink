/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/sybink',
  assetPrefix: '/sybink/',
  trailingSlash: true
}

module.exports = nextConfig