/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {appDir: true},
  reactStrictMode: false,
  future: {webpack5: true},
}

module.exports = nextConfig
