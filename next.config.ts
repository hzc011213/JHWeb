import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import path from 'node:path';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
