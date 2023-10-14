/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER: process.env.BACKEND_HOST + process.env.API_V1,
    }
}

module.exports = nextConfig
