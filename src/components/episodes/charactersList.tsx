import React from 'react'
import Link from 'next/link'
import { Episode } from '@/__generated__/graphql'

export const CharactersList: React.FC<{
  characters: Episode['characters']
}> = ({ characters }) => (
  <div className="flex flex-col gap-5">
    <h2>List of characters:</h2>
    <div className="flex gap-3 flex-wrap ">
      {characters.map((character) => (
        <Link
          className="p-2 bg-gray-500 rounded-2xl hover:bg-orange-500 hover:scale-105"
          href={`/characters/${character?.id}`}
          key={character?.id}
        >
          {character?.name}
        </Link>
      ))}
    </div>
  </div>
)

export default CharactersList
