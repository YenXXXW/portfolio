/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['play-lh.googleusercontent.com' , "bgr.com" ,"cdn.mos.cms.futurecdn.net"],
  },
}

module.exports = nextConfig
