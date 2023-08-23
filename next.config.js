const rehypePrettyCode = require('rehype-pretty-code');

const rehypePrettyCodeOptions = {
  theme: 'one-dark-pro',
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
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

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx$/,
      use: ['@svgr/webpack'],
    });

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
      { source: '/docs/v1', destination: '/docs/v1/getting-started' },
      { source: '/docs/v1/:path*', destination: '/docs/v1/:path*' },
      { source: '/docs/:path*', destination: '/docs/v2/:path*' },
      { source: '/a/:path*', destination: 'https://analytics.umami.is/:path*' },
    ];
  },
};

module.exports = withMDX(nextConfig);
