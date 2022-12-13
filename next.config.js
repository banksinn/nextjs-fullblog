/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI,
    NEXT_PUBLIC_MONGODB_DB: process.env.NEXT_PUBLIC_MONGODB_DB,
  },
}

module.exports = nextConfig
