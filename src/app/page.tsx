import React from "react";
import graphqlClient from "@/lib/client";
import GET_CHARACTERS from "@/lib/graphql/characters";
import { CharacterCard } from "@/components/characters/charactersCard";
import Banner from "@/components/common/banner";

const RootPage = async () => {
  try {
    const {
      data: {
        characters: {
          info: { pages },
        },
      },
    } = await graphqlClient.query({ query: GET_CHARACTERS });
    const randomPage = Math.floor(Math.random() * pages) + 1;

    const {
      data: {
        characters: { results },
      },
    } = await graphqlClient.query({
      query: GET_CHARACTERS,
      variables: { page: randomPage },
    });

    return (
      <>
        <Banner title={"Rick and Morty API"} />
        <main className="bg-[#272b33] py-16">
          <section className="container">
            <ul className="grid gap-3.5 md:gap-y-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {results.slice(1, 9).map((character: Character) => (
                <CharacterCard character={character} key={character.id} />
              ))}
            </ul>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching characters:", error);
    return (
      <div>
        <p>Error fetching characters.</p>
      </div>
    );
  }
};

export default RootPage;
