"use client";

import { CharacterAPI } from "@/api";
import { CharacterCard } from "@/components/characters";

export const CharactersList = async () => {
	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

	await delay(2000);

	const characters = await CharacterAPI.getCharactersByIds([6, 12]);

	if (!characters || characters.length === 0) {
		return <p>Нет данных для отображения.</p>;
	}

	return (
		<ul className="grid grid-cols-2 gap-3.5 md:grid-cols-3 md:gap-y-7 lg:grid-cols-4">
			{characters.map((character) => (
				<CharacterCard character={character} key={character.id} />
			))}
		</ul>
	);
};
