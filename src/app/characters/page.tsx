"use client";
import graphqlClient from "@/lib/client";
import GET_CHARACTERS from "@/lib/graphql/characters";
import { CharacterCard } from "@/components/characters";
import React, { useEffect, useState } from "react";
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Pagination from "@/components/common/pagination";
import { Character, Info } from "@/__generated__/";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [info, setInfo] = useState<Info | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    graphqlClient
      .query({ query: GET_CHARACTERS, variables: { page: currentPage } })
      .then((response) => {
        const { info, results } = response.data.characters;
        setInfo(info);
        setCharacters(results);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, [currentPage]);

  useEffect(() => {
    const pageQueryParam = Number(params.get("page"));

    if (!isNaN(pageQueryParam) && pageQueryParam > 0 && pageQueryParam < 43) {
      setCurrentPage(pageQueryParam);
    } else if (pathname == "/characters") {
      router.push("/characters?page=1");
    } else {
      notFound();
    }
  }, [params, pathname, router]);

  useEffect(() => {
    const url = `${pathname}/?page=${currentPage}`;
    router.push(url);
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <div className="sm:flex sm:flex-row md:text-2xl sm:justify-between sm:text-white sm:pb-16 flex flex-col text-white items-center pb-8 gap-5 text-base">
        <p>
          Shown: {characters?.length} of {info?.count}{" "}
        </p>
        <p>Current page: {currentPage}</p>
        <p>Total pages: {info && info.pages}</p>
      </div>
      <ul className="grid gap-3.5 md:gap-y-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters &&
          characters.map((character: Character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={info?.pages}
        nextPageNumber={info?.next}
        prevPageNumber={info?.prev}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default Characters;
