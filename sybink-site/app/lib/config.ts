import nextConfig from '@/next.config.js';

/**
 * Get the full asset path with basePath prefix
 * @param assetPath - The asset path (e.g., '/assets/sentinel/banner.png')
 * @returns The full path with basePath prefix
 */
export const getAssetPath = (assetPath: string): string => {
  const basePath = nextConfig.basePath || '';
  return `${basePath}${assetPath}`;
};

export const BASE_PATH = nextConfig.basePath || '';


export const getHref = (url: string): string => {
  if (!url || url === '#') return url; // leave empty/hash links alone
  if (url.startsWith(BASE_PATH)) return url; // already prefixed
  if (url.startsWith('#')) return `${BASE_PATH}/${url}`; // hash link
  return `${BASE_PATH}${url.startsWith('/') ? '' : '/'}${url}`; // normal path
};