"use client";
import { useState, useEffect } from "react";
import { CharacterCard } from "@/components/characters";
import { PacmanLoader } from "react-spinners";
import graphqlClient from "@/lib/client";
import GET_CHARACTERS from "@/lib/graphql/characters";
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
  const [loading, setLoading] = useState<boolean>(false); // Добавлено состояние загрузки
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    setLoading(true); // Устанавливаем состояние загрузки в true при начале загрузки данных
    graphqlClient
      .query({ query: GET_CHARACTERS, variables: { page: currentPage } })
      .then((response) => {
        const { info, results } = response.data.characters;
        setInfo(info);
        setCharacters(results);
        setLoading(false); // Устанавливаем состояние загрузки в false после загрузки данных
      })
      .catch((error) => {
        console.error("Error fetching", error);
        setLoading(false); // Устанавливаем состояние загрузки в false в случае ошибки загрузки данных
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
          Shown: {loading ? "Loading..." : characters?.length} of {info?.count}{" "}
        </p>
        <p>Current page: {currentPage}</p>
        <p>Total pages: {info && info.pages}</p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <PacmanLoader color="rgba(231, 107, 28, 1)" size={50} />
        </div>
      ) : (
        <ul className="grid gap-3.5 md:gap-y-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters &&
            characters.map((character: Character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
        </ul>
      )}
      {loading ? (
        <div></div>
      ) : (
        <Pagination
          currentPage={currentPage}
          totalPages={info?.pages}
          nextPageNumber={info?.next}
          prevPageNumber={info?.prev}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      )}
    </div>
  );
};

export default Characters;
