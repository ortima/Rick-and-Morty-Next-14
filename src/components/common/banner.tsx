import React from "react";
import { BannerLogo } from "@/components/icons";

interface BannerProps {
	title: string;
}
const Banner: React.FC<BannerProps> = ({ title }) => {
	return (
		<section className="relative mb-16 flex h-40 flex-col items-center justify-center">
			<h1 className="z-10 text-4xl font-black text-white sm:text-6xl md:text-7xl">
				{title}
			</h1>
			<div className="absolute flex items-center justify-center">
				<div className="overflow-hidden">
					<BannerLogo />
				</div>
			</div>
		</section>
	);
};

export default Banner;
