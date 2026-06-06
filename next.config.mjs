/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    MONGO_DB_URI: process.env.MONGO_DB_URI,
  },
};

export default nextConfig;
