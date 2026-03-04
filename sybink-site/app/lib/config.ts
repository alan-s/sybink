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


export const withBasePath = (path: string) => {
  const basePath = '/sybink'; // match next.config.js
  // handle root, hashes, and avoid double slashes
  if (!path || path === '#') return path;
  if (path.startsWith('#')) return `${basePath}/${path}`;
  if (path.startsWith(basePath)) return path; // already prefixed
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};