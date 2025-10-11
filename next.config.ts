import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.paypalobjects.com',
			},
		],
		// maybe older domains: ['www.paypalobjects.com'],
	},
};

export default nextConfig;
