import React from "react";
import graphqlClient from "@/lib/client";
import { GET_INFO } from "@/lib/graphql";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

type Info = {
	count: number;
};
interface CharacterData {
	info: Info;
}
interface EpisodeData {
	info: Info;
}
interface LocationData {
	info: Info;
}
interface QueryData {
	characters: CharacterData;
	episodes: EpisodeData;
	locations: LocationData;
}
export const FooterLayout: React.FC = async () => {
	try {
		const { data } = await graphqlClient.query<QueryData>({
			query: GET_INFO,
		});
		const { characters, episodes, locations } = data;

		return (
			<footer className="flex min-h-[300px] w-full shrink-0 flex-grow-0 justify-center bg-[#202329]">
				<div className="container flex flex-col items-center justify-around py-6 text-sm text-neutral-400 sm:text-xl">
					<ul className="flex gap-3.5 uppercase max-[425px]:grid">
						<li className="cursor-pointer hover:text-orange-500">
							<Link href={"/characters"}>
								Characters: {characters.info.count}
							</Link>
						</li>
						<li className="cursor-pointer hover:text-orange-500">
							<Link href={"/episodes"}>Episodes: {episodes.info.count}</Link>
						</li>

						<li className="cursor-pointer hover:text-orange-500">
							<Link href={"/locations"}>Locations: {locations.info.count}</Link>
						</li>
					</ul>
					<Link
						target={"_blank"}
						href="https://status.rickandmortyapi.com/"
						className="flex items-center uppercase"
					>
						<span className="hover:text-orange-500">Server status</span>
						<span className="text-[#6fff5b]">
							<GoDotFill />
						</span>
					</Link>
					<p>
						❮❯&nbsp;by&nbsp;
						<span className="cursor-pointer text-white underline underline-offset-4 hover:text-orange-500 hover:no-underline">
							<Link target={"_blank"} href="https://github.com/ortima">
								ortima
							</Link>
						</span>
						&nbsp; {new Date().getFullYear()}
					</p>
				</div>
			</footer>
		);
	} catch (e) {
		console.error(e);
		return null;
	}
};
