import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "rickandmortyapi.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	eslint: {
		dirs: ["src"],
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
