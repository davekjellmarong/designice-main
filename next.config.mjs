/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: false,
  },
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/no/tjenester',
        destination: '/services'
      },
      {
        source: '/no/referanseprosjekter',
        destination: '/projects'
      },
      {
        source: '/tjenester/:slug',
        destination: '/services/:slug'
      },
      {
        source: '/referanseprosjekter/:slug',
        destination: '/projects/:slug'
      },
    ]
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}

export default config
