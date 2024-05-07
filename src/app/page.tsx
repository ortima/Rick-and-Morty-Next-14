import React from "react";
import graphqlClient from "@/lib/client";
import GET_CHARACTERS from "@/lib/graphql/characters";
import { CharacterCard } from "@/components/characters";
import Banner from "@/components/common/banner";
import { GetCharactersQuery } from "@/__generated__";
import { ApolloQueryResult } from "@apollo/client";

const RootPage: React.FC = async () => {
  try {
    const randomPage = Math.floor(Math.random() * 42) + 1;

    const { data }: ApolloQueryResult<GetCharactersQuery> =
      await graphqlClient.query({
        query: GET_CHARACTERS,
        variables: { page: randomPage },
      });
    return (
      <>
        <Banner title={"Rick and Morty API"} />
        <section className="container">
          <ul className="grid gap-3.5 md:gap-y-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.characters?.results
              ?.slice(1, 9)
              .map(
                (character) =>
                  character && (
                    <CharacterCard character={character} key={character.id} />
                  ),
              )}
          </ul>
        </section>
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
