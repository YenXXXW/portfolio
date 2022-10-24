/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['play-lh.googleusercontent.com' , "files.realpython.com" ,"cdn.mos.cms.futurecdn.net"],
  },
}

module.exports = nextConfig
