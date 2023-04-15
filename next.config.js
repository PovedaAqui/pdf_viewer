/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps'),
            to: 'cmaps/',
            from: path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'standard_fonts'),
            to: 'standard_fonts/'
          },
        ],
      })
    );
    return config;
  },
};