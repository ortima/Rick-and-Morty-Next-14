import GET_EPISODE from '@/lib/graphql/episode'
import graphqlClient from '@/lib/client'
import { notFound } from 'next/navigation'
import React from 'react'
import { CharacterCard } from '@/components/characters'
import { GetEpisodeQuery } from '@/__generated__/graphql'
import CarouselSlider from '@/components/common/carousel'

type Params = {
  id: string
}

const getPageData = async ({ params }: { params: Params }) => {
  try {
    const { id } = params
    const { data } = await graphqlClient.query<GetEpisodeQuery>({
      query: GET_EPISODE,
      variables: { id },
    })
    if (!data) {
      notFound()
    }
    return { data }
  } catch (e) {
    console.log(e)
    throw e
  }
}

const Episode: React.FC<{ params: Params }> = async ({ params }) => {
  const episode = await getPageData({ params })

  const characterCards = episode.data.episode?.characters.map((character) => (
    <CharacterCard key={character?.id} character={character} />
  ));

  return (
    <div className="container">
      <div className='text-white mb-10 grid gap-4'>
        <h2 className='text-2xl md:text-4xl lg:text-6xl'>{episode.data.episode?.id}. {episode.data.episode?.name}</h2>
        <p>Episode: {episode.data.episode?.episode}</p>
        <div>{episode.data.episode?.air_date}</div>
        <div>Number of characters: {episode.data.episode?.characters.length}</div>
      </div>

      <div className='px-[2rem]'>
        <CarouselSlider>
          {characterCards}
        </CarouselSlider>
      </div>
    </div>
  )
}

export default Episode
