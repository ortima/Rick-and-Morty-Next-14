import { CharacterAPI } from "@/api";
import { CharacterCard } from "@/components/characters";
import { Banner } from "@/components/common/banner";
import { getUniqueRandomIds } from "@/utils/getRandomIds";

export default async function Home() {
	const characters = await CharacterAPI.getCharactersByIds(
		getUniqueRandomIds(20, 826)
	);

	if (!characters) {
		return <p>Нет данных для отображения.</p>;
	}

	return (
		<>
			<Banner />

			<div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 md:gap-y-7 lg:grid-cols-4">
				{characters.map((character) => (
					<CharacterCard character={character} key={character.id} />
				))}
			</div>
		</>
	);
}
