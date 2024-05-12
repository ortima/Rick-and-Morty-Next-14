import graphqlClient from "@/lib/client";
import GET_CHARACTERS from "@/lib/graphql/characters";
import { CharacterCard } from "@/components/characters";
import { Character, GetCharactersQuery } from "@/__generated__/";
import { ApolloQueryResult } from "@apollo/client";
import Search from "@/components/common/search";
import React from "react";
import Link from "next/link";
import SelectDropdown from "@/components/characters/select";

const Characters = async ({ searchParams }: { searchParams: any }) => {
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
      <div className="sm:grid sm:grid-cols-4 md:text-2xl  sm:text-white sm:pb-16 flex flex-col text-white items-center pb-8 gap-5 text-base">
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
        <div className="grid gap-3.5 md:gap-y-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character: Character | null) => (
            <CharacterCard character={character} key={character?.id} />
          ))}
        </div>
      ) : (
        <div className="text-white text-center sm:text-2xl text:base">
          Character: {search} with status: {status} not found :(
        </div>
      )}
      <div className="flex gap-10 justify-center text-base  mt-10">
        <Link
          className={`p-5 hover:opacity-60 hover:scale-110 bg-white text-black rounded-2xl ${data.characters?.info?.prev == null ? "hidden" : ""}`}
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
          className={`p-5 hover:opacity-60 hover:scale-110 bg-white text-black rounded-2xl ${data.characters?.info?.next == null ? "hidden" : ""}`}
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
