import React from "react";
import { Character } from "@/types/character";
import Image from "next/legacy/image";
import Link from "next/link";
import Status from "./characterStatus";

export const CharacterCard: React.FC<{ character: Character }> = ({
	character
}) => (
	<div className="flex flex-col gap-3.5 rounded-md bg-[#3c3e44] p-4 text-white duration-200 ease-in-out hover:scale-105 md:p-6">
		<div className="w-full md:w-auto">
			<Image
				placeholder="blur"
				blurDataURL={character.image}
				src={character.image}
				alt={character.name}
				width={200}
				height={200}
				layout="responsive"
				objectFit="cover"
				className="rounded-md"
			/>
		</div>

		<div>
			<h2 className="max-w-[250px] overflow-hidden overflow-ellipsis text-xl lg:text-2xl">
				<Link
					className="hover:text-orange-500"
					href={`/characters/${character?.id}`}
				>
					{character?.name}
				</Link>
			</h2>

			<span className="flex items-center text-xs sm:text-base">
				<Status status={character?.status} />
				{character?.status} - {character?.species}
			</span>

			<div>
				Type:
				<span className="underline decoration-orange-700 underline-offset-4">
					{character?.gender}
				</span>
			</div>
		</div>

		<div>
			<div className="flex flex-col">
				<span className="text-base text-[#9e9e9e] md:text-[18px]">
					Last known location:
				</span>

				<span className="text-base text-white lg:text-xl">
					<Link href="#" className="hover:text-orange-500">
						{character?.location?.name}
					</Link>
				</span>
			</div>
		</div>
	</div>
);
