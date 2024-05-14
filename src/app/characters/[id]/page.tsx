import graphqlClient from '@/lib/client'
import GET_CHARACTER from '@/lib/graphql/character'
import { CharacterDetail } from '@/components/characters'
import { notFound } from 'next/navigation'
import React from 'react'
import { Character } from '@/__generated__/graphql'
// import { Metadata } from "next";

type Props = {
  character?: Character
}

type Params = {
  id: string
}
// export async function generateMetaData({ params }: Props): Promise<Metadata> {
//   const id = params.id;
//   console.log("CONSOLE LOG:", id);
//   return { title: `Character ${id}` };
// }

async function getPageData({ params }: { params: Params }): Promise<Props> {
  try {
    // await generateMetaData({ params });
    const { id } = params
    const {
      data: { character },
    } = await graphqlClient.query<{ character: Character }>({
      query: GET_CHARACTER,
      variables: { id },
    })
    if (!character) {
      notFound()
    }
    return { character }
  } catch (e) {
    console.log(e)
    throw e
  }
}
const CharacterPage: React.FC<{ params: Params }> = async ({ params }) => {
  const { character } = await getPageData({ params })

  return (
    <div className="container">
      <CharacterDetail character={character} />
    </div>
  )
}
export default CharacterPage
