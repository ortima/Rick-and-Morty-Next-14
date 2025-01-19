import React from "react";
import { Character } from "@/types/character";
import { Episode } from "@/types/episode";
import Image from "next/image";
import Status from "./characterStatus";

interface CharacterCardProps {
	character: Character;
	episodes: Episode[];
}

export const CharacterDetail: React.FC<CharacterCardProps> = ({
	character,
	episodes
}) => (
	<div className="sm:gap-15 flex flex-col gap-10 sm:flex sm:flex-col">
		<div className="flex flex-col gap-10 sm:flex sm:flex-row sm:gap-10">
			<aside className="w-full sm:w-[450px]">
				<Image
					src={character.image}
					alt={character.name}
					className="rounded-md"
					width={450}
					height={300}
					priority={true}
				/>
			</aside>

			<div className="flex flex-col justify-between text-base text-white max-sm:gap-5 md:text-[20px]">
				<h2 className="text-4xl font-bold md:text-5xl">{character.name}</h2>

				<div className="flex items-center">
					<Status status={character.status} />
					{character.status}
				</div>

				<div>
					Species:&nbsp;
					<span className="text-orange-500">{character.species}</span>
				</div>

				<div>
					Type:&nbsp;
					<span className="text-orange-500">
						{character.type == "" ? "unknown" : character.type}
					</span>
				</div>

				<div>
					Gender:&nbsp;
					<span className="text-orange-500">{character.gender}</span>
				</div>

				<div>
					Origin location:&nbsp;
					<span className="text-orange-500">{character.origin.name}</span>
				</div>

				{/*  TODO: добавить линку */}
				<div>
					Last known location:&nbsp;
					<span className="text-orange-500">{character.location.name}</span>
				</div>

				<div>
					Episodes:&nbsp;
					<span className="text-orange-500">{character.episode?.length}</span>
				</div>
			</div>
		</div>

		<div className="flex flex-wrap gap-3 border-t-4 pt-10 text-white">
			{episodes?.map((episode) => (
				<div key={episode.id} className="rounded-2xl bg-gray-500 p-2">
					{episode.name}:
					<span className="text-orange-400">{episode.episode} </span>(
					{episode.air_date})
				</div>
			))}
		</div>
	</div>
);
