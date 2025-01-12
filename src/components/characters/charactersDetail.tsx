import React from "react";
import { Character } from "@/__generated__/graphql";
import Image from "next/image";
import Status from "./characterStatus";

interface CharacterCardProps {
	character?: Character;
}

export const CharacterDetail: React.FC<CharacterCardProps> = ({
	character,
}) => {
	return character ? (
		<div className="sm:gap-15 flex flex-col gap-10 sm:flex sm:flex-col">
			<div className="flex flex-col gap-10 sm:flex sm:flex-row sm:gap-10">
				<aside className="w-full sm:w-[450px]">
					<Image
						src={character.image ?? ""}
						alt={character.name ?? ""}
						className="rounded-md"
						width={450}
						height={300}
						layout="responsive"
						objectFit="cover"
					/>
				</aside>
				<div className="flex flex-col justify-between text-base text-white max-sm:gap-5 md:text-[20px]">
					<h2 className="text-4xl font-bold md:text-5xl">{character.name}</h2>
					<div className="flex items-center">
						<Status status={character.status ?? ""} />
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
						<span className="text-orange-500">
							{character.origin?.type} -- {character.origin?.name}
						</span>
					</div>
					<div>
						Dimension:&nbsp;
						<span className="text-orange-500">
							{" "}
							{character.origin?.dimension}
						</span>
					</div>
					<div className="">
						Episodes:&nbsp;
						<span className="text-orange-500">{character.episode?.length}</span>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap gap-3 border-t-4 pt-10 text-white">
				{character.episode?.map((s) => (
					<div key={s?.id} className="rounded-2xl bg-gray-500 p-2">
						{s?.name}: <span className="text-orange-400">{s?.episode} </span>(
						{s?.air_date})
					</div>
				))}
			</div>
		</div>
	) : null;
};
export default CharacterDetail;
