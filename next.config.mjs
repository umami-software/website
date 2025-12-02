import createMDX from '@next/mdx';
import { withAxiom } from 'next-axiom';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const headers = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers,
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/docs', destination: 'https://docs.umami.is/docs' },
      { source: '/docs/:path*', destination: 'https://docs.umami.is/docs/:path*' },
      { source: '/api/search', destination: 'https://docs.umami.is/api/search' },
      { source: '/a/script.js', destination: 'https://cloud.umami.is/script.js' },
      { source: '/discord', destination: 'https://discord.gg/4dz4zcXYrQ' },
      { source: '/analytics', destination: '/lp/analytics' },
      { source: '/website-analytics', destination: '/lp/website-analytics' },
      {
        source: '/open-source-website-analytics',
        destination: '/lp/open-source-website-analytics',
      },
      { source: '/privacy-analytics', destination: '/lp/privacy-analytics' },
      { source: '/linkedin', destination: '/lp/linkedin' },
      { source: '/reddit', destination: '/lp/reddit' },
      { source: '/apollo', destination: '/lp/apollo' },
      { source: '/apollo-ga', destination: '/lp/google-analytics' },
    ];
  },
};

export default withAxiom(withMDX(nextConfig));
