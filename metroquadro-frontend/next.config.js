/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: { appDir: true },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },

    env: {
        NETLIFY_NEXT_PLUGIN_SKIP: true,
      },

}

module.exports = nextConfig
