import React from "react";
import Image from "next/image";
import Status from "./characterStatus";

interface CharacterCardProps {
  character: Character;
}

export const CharacterDetail: React.FC<CharacterCardProps> = ({
  character,
}) => (
  <div className="flex flex-row gap-5">
    <div className="w-full md:w-auto">
      <Image
        src={character.image}
        alt={character.name}
        width={450}
        height={300}
        // layout="responsive"
        // objectFit="cover"
        // className="rounded-md"
      />
    </div>
    <div className="flex flex-col">
      <div className="text-white">
        <h2 className="text-xl lg:text-4xl">{character.name}</h2>
        <span className="text-xs sm:text-base flex items-center">
          <Status status={character.status} />
          {character.status} - {character.species}
        </span>
      </div>
      <div>Type: {character.type == "" ? "unknown" : character.type}</div>
      <div>Gender: {character.gender}</div>
      <div>
        Origin location:{character.origin.type} -- {character.origin.name} --{" "}
        {character.origin.dimension}
      </div>
      <div>
        Episodes:{character.episode.length}
        {character.episode.map((s) => (
          <div key={s.id} className="flex gap-3">
            <div>Name of episode:{s.name}</div>
            <div>Number of episode:{s.episode}</div>
            <div>Date of episode:{s.air_date}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CharacterDetail;
