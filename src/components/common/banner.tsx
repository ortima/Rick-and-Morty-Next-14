import React from "react";
import { BannerLogo } from "@/components/icons";

interface BannerProps {
  title: string;
}
const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <section className="flex flex-col justify-center items-center h-40 relative mb-16">
      <h1 className="z-10 text-white font-black text-4xl md:text-7xl sm:text-6xl">
        {title}
      </h1>
      <div className="absolute flex justify-center items-center">
        <div className="overflow-hidden">
          <BannerLogo />
        </div>
      </div>
    </section>
  );
};

export default Banner;
