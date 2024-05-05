import React from "react";
import Image from "next/image";
import Status from "./characterStatus";

interface CharacterCardProps {
  character: Character;
}

export const CharacterDetail: React.FC<CharacterCardProps> = ({
  character,
}) => (
  <div className="sm:flex sm:flex-col sm:gap-15 flex flex-col gap-10">
    <div className="sm:flex sm:flex-row sm:gap-10 flex flex-col gap-10">
      <aside className="sm:w-[450px] w-full">
        <Image
          src={character.image}
          alt={character.name}
          className="rounded-md"
          width={450}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </aside>
      <div className="flex flex-col justify-between text-white text-base md:text-[20px] max-sm:gap-5">
        <h2 className="text-4xl md:text-5xl font-bold">{character.name}</h2>
        <div className="flex items-center">
          <Status status={character.status} />
          {character.status}
        </div>
        <div>
          Species:&nbsp;
          <span className="text-orange-500">{character.species}</span>
        </div>
        <div>
          Type:&nbsp;
          <span className="text-orange-500">
            {character.type == "" ? "unknown" : character.type}
          </span>
        </div>
        <div>
          Gender:&nbsp;
          <span className="text-orange-500">{character.gender}</span>
        </div>
        <div>
          Origin location:&nbsp;
          <span className="text-orange-500">
            {character.origin.type} -- {character.origin.name}
          </span>
        </div>
        <div>
          Dimension:&nbsp;
          <span className="text-orange-500"> {character.origin.dimension}</span>
        </div>
        <div className="">
          Episodes:&nbsp;
          <span className="text-orange-500">{character.episode.length}</span>
        </div>
      </div>
    </div>
    <div className="flex gap-3 flex-wrap text-white border-t-4 pt-10">
      {character.episode.map((s) => (
        <div key={s.id} className="p-2 bg-gray-500 rounded-2xl">
          {s.name}: <span className="text-orange-400">{s.episode} </span>(
          {s.air_date})
        </div>
      ))}
    </div>
  </div>
);

export default CharacterDetail;
