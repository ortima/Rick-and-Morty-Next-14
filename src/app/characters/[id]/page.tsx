import { CharacterAPI } from "@/api";
import { CharacterDetail } from "@/components/characters";
import { notFound } from "next/navigation";

export default async function CharacterPage({
	params
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	if (!id || isNaN(Number(id))) {
		notFound();
	}

	const character = await CharacterAPI.getCharacterById(Number(id));

	console.log("@@@", character);

	if (!character) {
		notFound();
	}

	const episodes = await Promise.all(
		(character.episode || []).map((episodeUrl) =>
			fetch(episodeUrl).then((res) => res.json())
		)
	);

	return <CharacterDetail episodes={episodes} character={character} />;
}
