/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'
const isProd = process.env.NODE_ENV === 'github'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/sybink' : '',
  assetPrefix: isProd ? '/sybink/' : '',
  trailingSlash: isProd ? true : false,
  images: { unoptimized: true },
}

module.exports = nextConfig