/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env:{
    stripe_public_key : process.env.Stripe_Public_Key
  }
}

module.exports = nextConfig
