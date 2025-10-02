import type { MetadataRoute } from 'next';

const ROOT = 'https://oravo.is';
const URLS = [
  '',
  '/docs',
  '/docs/cloud',
  '/docs/api',
  '/docs/reports',
  '/docs/guides',
  '/pricing',
  '/blog',
  '/features',
  '/creators',
  '/marketers',
  '/agencies',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return URLS.map(url => ({ url: `${ROOT}${url}`, lastModified }));
}
