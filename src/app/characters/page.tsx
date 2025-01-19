import { CharacterAPI } from "@/api";
import { CharacterCard } from "@/components/characters";
import SelectDropdown from "@/components/characters/select";
import Search from "@/components/common/search";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from "@/components/ui/pagination";
import { Character, Info, Status } from "@/types/character";
import { redirect } from "next/navigation";

type SearchParams = {
	name: string;
	status: string;
	page: string;
};

interface IProps {
	searchParams: Promise<SearchParams>;
}

export default async function CharactersPage({ searchParams }: IProps) {
	const { name, status, page } = await searchParams;

	// Параметры по умолчанию, если page не передан
	const currentPage = page ? parseInt(page) : 1;

	// Получаем список персонажей с серверного API
	const charactersResponse = await CharacterAPI.getCharactersByFilters({
		name: typeof name === "string" ? name : undefined,
		status:
			typeof status === "string" && status in Status
				? (status as keyof typeof Status)
				: undefined,
		page: String(currentPage)
	});

	if (!charactersResponse || !charactersResponse.results?.length) {
		return (
			<div className="text:base text-center text-white sm:text-2xl">
				Character{name ? `: ${name}` : ""}{" "}
				{status ? ` with status: ${status}` : ""} not found :(
			</div>
		);
	}

	const { info, results: characters } = charactersResponse;

	if (currentPage > info.pages || currentPage < 1) {
		redirect("/characters?page=1");
	}

	return (
		<>
			<div className="flex flex-col items-center gap-5 pb-8 text-base text-white sm:grid sm:grid-cols-4 sm:pb-16 sm:text-white md:text-2xl">
				<p className={characters.length > 0 ? "text-base" : "hidden"}>
					Shown: {characters?.length} of {info.count}
				</p>
				<div className="col-span-3 flex justify-between max-md:gap-3">
					<Search search={name} status={status} pathname={"/characters"} />

					<p className={characters.length > 0 ? "" : "hidden"}>
						Total pages: {info.pages}
					</p>

					<SelectDropdown search={name} status={status} />
				</div>
			</div>

			<CardList characters={characters} name={name} status={status} />

			<PaginationCharacters info={info} currentPage={currentPage} />
		</>
	);
}

const CardList = ({
	characters,
	name,
	status
}: {
	characters: Character[];
	name: string;
	status: string;
}) => (
	<>
		{characters.length > 0 ? (
			<div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 md:gap-y-7 lg:grid-cols-4">
				{characters.map((character) => (
					<CharacterCard character={character} key={character?.id} />
				))}
			</div>
		) : (
			<div className="text:base text-center text-white sm:text-2xl">
				Character: {name} with status: {status} not found :(
			</div>
		)}
	</>
);

const PaginationCharacters = ({
	info,
	currentPage
}: {
	info: Info;
	currentPage: number;
}) => {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href={info.prev ? `/characters?page=${info.prev}` : "#"}
						className={
							currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
						}
					>
						Prev
					</PaginationPrevious>
				</PaginationItem>

				<PaginationItem>
					<PaginationLink href="#" aria-current="page">
						{currentPage}
					</PaginationLink>
				</PaginationItem>

				{/* Total pages */}
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>

				{/* Next button */}
				<PaginationItem>
					<PaginationNext
						href={info.next ? `/characters?page=${info.next}` : "#"}
						className={info.next ? undefined : "pointer-events-none opacity-50"}
					>
						Next
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
