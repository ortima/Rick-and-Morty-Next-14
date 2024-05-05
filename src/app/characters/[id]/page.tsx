import graphqlClient from "@/lib/client";
import GET_CHARACTER from "@/lib/graphql/character";
import { CharacterDetail } from "@/components/characters";
import { notFound } from "next/navigation";
// import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};
// export async function generateMetaData({ params }: Props): Promise<Metadata> {
//   const id = params.id;
//   console.log("CONSOLE LOG:", id);
//   return { title: `Character ${id}` };
// }

async function getPageData({ params }: Props) {
  try {
    // await generateMetaData({ params });
    const { id } = params;
    const {
      data: { character },
    } = await graphqlClient.query<{ character: Character }>({
      query: GET_CHARACTER,
      variables: { id },
    });
    return { character };
  } catch (e) {
    return notFound();
  }
}
const CharacterPage = async ({ params }: Props) => {
  const { character } = await getPageData({ params });

  return (
    <div className="container">
      <CharacterDetail character={character} />
    </div>
  );
};
export default CharacterPage;
