import React, { ReactNode } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselSliderProps {
	children: ReactNode;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ children }) => {
	return (
		<Carousel>
			<CarouselContent>
				{React.Children.map(children, (child, index) => (
					<CarouselItem
						key={index}
						className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
					>
						{child}
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default CarouselSlider;
