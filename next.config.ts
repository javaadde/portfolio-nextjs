import type { NextConfig } from "next";
import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const pwa = withPWA({
  dest: "public",
  register: isProd,
  skipWaiting: isProd,
  disable: !isProd, // disables SW in dev
});

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default pwa(nextConfig);
