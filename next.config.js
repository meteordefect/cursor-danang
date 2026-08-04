/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static export for Cloudflare Pages (build → out/)
	output: 'export',
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'images.lumacdn.com',
			},
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
			},
			{
				protocol: 'https',
				hostname: 'abs.twimg.com',
			},
		],
	},
};

module.exports = nextConfig;
