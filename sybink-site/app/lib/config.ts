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