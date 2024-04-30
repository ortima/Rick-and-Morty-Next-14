import graphqlClient from "@/lib/client";
import GET_CHARACTER from "@/lib/graphql/character";
import { CharacterDetail } from "@/components/characters";

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const {
      data: { character },
    } = await graphqlClient.query({
      query: GET_CHARACTER,
      variables: { id },
    });
    return (
      <div className="container">
        <CharacterDetail character={character} />;
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default CharacterPage;
