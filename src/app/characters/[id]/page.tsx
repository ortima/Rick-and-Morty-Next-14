import graphqlClient from "@/lib/client";
import GET_CHARACTER from "@/lib/graphql/character";
import { CharacterDetail } from "@/components/characters";

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const {
      data: { character },
    } = await graphqlClient.query<{ character: Character }>({
      query: GET_CHARACTER,
      variables: { id },
    });
    return (
      <div className="container">
        <CharacterDetail character={character} />
      </div>
    );
  } catch (e) {
    console.log(e);
  }
};

export default CharacterPage;
