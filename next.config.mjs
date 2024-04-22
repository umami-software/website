import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import path from 'path';

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'github-light',
  keepBackground: false,
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
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
  experimental: {
    mdxRs: false,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: false,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    config.resolve.alias['public'] = path.resolve('./public');

    return config;
  },
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
      { source: '/analytics', destination: '/' },
      { source: '/website-analytics', destination: '/' },
      { source: '/open-source-website-analytics', destination: '/' },
      { source: '/privacy-analytics', destination: '/' },
      { source: '/linkedin', destination: '/' },
      { source: '/reddit', destination: '/' },
      { source: '/apollo', destination: '/' },
      { source: '/apollo-ga', destination: '/google-analytics' },
      { source: '/docs/api', destination: '/docs/api/intro' },
      { source: '/docs/api/:path*', destination: '/docs/api/:path*' },
      { source: '/docs/cloud', destination: '/docs/cloud/intro' },
      { source: '/docs/cloud/:path*', destination: '/docs/cloud/:path*' },
      { source: '/docs/guides', destination: '/docs/guides/intro' },
      { source: '/docs/guides/:path*', destination: '/docs/guides/:path*' },
      { source: '/docs/v1', destination: '/docs/v1/getting-started' },
      { source: '/docs/v1/:path*', destination: '/docs/v1/:path*' },
      { source: '/docs/:path*', destination: '/docs/v2/:path*' },
      { source: '/a/:path*', destination: 'https://analytics.umami.is/:path*' },
    ];
  },
};

export default withMDX(nextConfig);
