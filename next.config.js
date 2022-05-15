/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);

    config.module.rules.push({
      loader: "@svgr/webpack",
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                override: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};

module.exports = nextConfig;
