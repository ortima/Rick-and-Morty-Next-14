import React from "react";
import { Character, GetCharactersQuery } from "@/__generated__/graphql";
import { CharacterCard } from "@/components/characters";
import SelectDropdown from "@/components/characters/select";
import Search from "@/components/common/search";
import graphqlClient from "@/lib/client";
import { GET_CHARACTERS } from "@/lib/graphql";
import { ApolloQueryResult } from "@apollo/client";
import Link from "next/link";

// TODO: added type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Characters = async (props: { searchParams: Promise<any> }) => {
	const searchParams = await props.searchParams;
	const search =
		typeof searchParams.search === "string" ? searchParams.search : undefined;

	const page =
		typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

	const status =
		typeof searchParams.status === "string" ? searchParams.status : "";

	const { data }: ApolloQueryResult<GetCharactersQuery> =
		await graphqlClient.query({
			query: GET_CHARACTERS,
			variables: { filter: { name: search, status: status }, page: page },
		});

	const characters = data.characters?.results || [];

	return (
		<div className="container">
			<div className="flex flex-col items-center gap-5 pb-8 text-base text-white sm:grid sm:grid-cols-4 sm:pb-16 sm:text-white md:text-2xl">
				<p className={characters.length > 0 ? "text-base" : "hidden"}>
					Shown: {characters?.length} of {data.characters?.info?.count}
				</p>
				<div className="col-span-3 flex justify-between max-md:gap-3">
					<Search search={search} status={status} pathname={"/characters"} />
					{/*<p className={characters.length > 0 ? "" : "hidden"}>*/}
					{/*  Total pages: {data.characters?.info?.pages}*/}
					{/*</p>*/}
					<SelectDropdown search={search} status={status} />
				</div>
			</div>
			{characters.length > 0 ? (
				<div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 md:gap-y-7 lg:grid-cols-4">
					{characters.map((character: Character | null) => (
						<CharacterCard character={character} key={character?.id} />
					))}
				</div>
			) : (
				<div className="text:base text-center text-white sm:text-2xl">
					Character: {search} with status: {status} not found :(
				</div>
			)}
			<div className="mt-10 flex justify-center gap-10 text-base">
				<Link
					className={`rounded-2xl bg-white p-5 text-black hover:scale-110 hover:opacity-60 ${
						data.characters?.info?.prev == null ? "hidden" : ""
					}`}
					href={{
						pathname: "/characters",
						query: {
							...(search ? { search } : {}),
							...(status ? { status } : {}),
							page: data.characters?.info?.prev,
						},
					}}
				>
					Prev
				</Link>
				<Link
					className={`rounded-2xl bg-white p-5 text-black hover:scale-110 hover:opacity-60 ${
						data.characters?.info?.next == null ? "hidden" : ""
					}`}
					href={{
						pathname: "/characters",
						query: {
							...(search ? { search } : {}),
							...(status ? { status } : {}),
							page: data.characters?.info?.next,
						},
					}}
				>
					Next
				</Link>
			</div>
		</div>
	);
};

export default Characters;
