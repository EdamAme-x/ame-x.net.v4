
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "api.microlink.io"
			},
			{
				hostname: "pbs.twimg.com"
			}
		]
	}
};

export default nextConfig;
