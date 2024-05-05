import React from "react";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import graphqlClient from "@/lib/client";
import GET_INFO from "@/lib/graphql/info";

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
      <footer className="shrink-0 flex-grow-0 w-full min-h-[300px] bg-[#202329] flex justify-center">
        <div className="container flex flex-col py-6 items-center justify-around text-neutral-400 text-sm sm:text-xl">
          <ul className="flex gap-3.5 uppercase max-[425px]:grid">
            <li className="cursor-pointer hover:text-orange-500">
              Characters: {characters.info.count}
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              Episodes: {episodes.info.count}
            </li>
            <li className="cursor-pointer hover:text-orange-500">
              Locations: {locations.info.count}
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
            <span className="text-white underline underline-offset-4 cursor-pointer hover:text-orange-500 hover:no-underline">
              <Link target={"_blank"} href="https://github.com/ortima">
                ortima
              </Link>
            </span>
            &nbsp;2024
          </p>
        </div>
      </footer>
    );
  } catch (e) {
    console.error(e);
    return null;
  }
};
