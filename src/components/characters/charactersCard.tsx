import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Status from "./characterStatus";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
  <div className="flex flex-col gap-3.5 text-white bg-[#3c3e44] p-4 rounded-md md:p-6">
    <div className="w-full md:w-auto">
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        layout="responsive"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    <div>
      <h2 className="text-xl lg:text-2xl overflow-hidden overflow-ellipsis max-w-[250px]">
        <Link
          className="hover:text-orange-500"
          href={`/characters/${character.id}`}
        >
          {character.name}
        </Link>
      </h2>
      <span className="text-xs sm:text-base flex items-center">
        <Status status={character.status} />
        {character.status} - {character.species}
      </span>
      <div>
        Type:{" "}
        <span className="underline underline-offset-4 decoration-orange-700">
          {character.gender}
        </span>
      </div>
    </div>
    <div>
      <div className="flex flex-col">
        <span className="text-base md:text-[18px] text-[#9e9e9e]">
          Last known location:
        </span>
        <span className="text-white text-base lg:text-xl">
          <Link href="#" className="hover:text-orange-500">
            {character.location.name}
          </Link>
        </span>
      </div>
    </div>
  </div>
);

export default CharacterCard;
