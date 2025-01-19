import { ReactElement } from "react";
import { BannerLogo } from "@/components/icons";

interface IProps {
	title?: string;
	logo?: ReactElement;
}
export const Banner = ({
	title = "Rick and Morty API",
	logo = <BannerLogo />
}: IProps) => (
	<section className="relative mb-16 flex h-40 flex-col items-center justify-center">
		<h1 className="z-10 text-4xl font-black text-white sm:text-6xl md:text-7xl">
			{title}
		</h1>

		<div className="absolute flex items-center justify-center">
			<div className="overflow-hidden">{logo}</div>
		</div>
	</section>
);
