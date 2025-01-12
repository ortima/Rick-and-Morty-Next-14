import React from "react";
import { Episode } from "@/__generated__/graphql";
import Link from "next/link";

export const CharactersList: React.FC<{
	characters: Episode["characters"];
}> = ({ characters }) => (
	<div className="flex flex-col gap-5">
		<h2>List of characters:</h2>
		<div className="flex flex-wrap gap-3">
			{characters.map((character) => (
				<Link
					className="rounded-2xl bg-gray-500 p-2 hover:scale-105 hover:bg-orange-500"
					href={`/characters/${character?.id}`}
					key={character?.id}
				>
					{character?.name}
				</Link>
			))}
		</div>
	</div>
);

export default CharactersList;
