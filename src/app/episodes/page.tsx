"use client";
import { useQuery } from "@apollo/client";
import GET_EPISODES from "@/lib/graphql/episodes";
import { Episode, GetEpisodesQuery } from "@/__generated__/graphql";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/common/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { CharactersList, EpisodeInfo } from "@/components/episodes";
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const Episodes: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [page, setPage] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [highlightedEpisodeId, setHighlightedEpisodeId] = useState<
    string | null
  >("1");

  const { loading, error, data, refetch } = useQuery<GetEpisodesQuery>(
    GET_EPISODES,
    {
      variables: { page: page },
    },
  );

  useEffect(() => {
    const pageQueryParam = Number(params.get("page"));

    if (!isNaN(pageQueryParam) && pageQueryParam > 0 && pageQueryParam < 4) {
      setPage(pageQueryParam);
    } else if (pathname == "/episodes") {
      router.push("/episodes?page=1", { scroll: false });
    } else {
      notFound();
    }
  }, [params, pathname, router]);

  useEffect(() => {
    const url = `${pathname}/?page=${page}`;
    router.push(url, { scroll: false });
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  useEffect(() => {
    if (!loading && data?.episodes?.results) {
      setSelectedEpisode(data.episodes.results[0]);
    }
  }, [loading, data]);

  if (loading)
    return (
      <div className="container p-6 text-white border-2 flex justify-between">
        <div className=" flex flex-col gap-5">
          {new Array(10).fill("").map((_, index) => (
            <Skeleton key={index} className="w-[300px] h-[30px] rounded-full" />
          ))}
        </div>
        <Skeleton className="w-3/5 h-[300px]">&nbsp;</Skeleton>
        <div className="flex-grow-1 pl-3"></div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  const episodes: (Episode | null)[] = data?.episodes?.results || [];

  const info = data?.episodes?.info;

  return (
    <>
      <div className="container p-6 text-white border-2 rounded-2xl flex">
        <ScrollArea className="h-[800px] w-[300px] flex-none">
          {episodes.map((episode) => (
            <div className="py-4 px-4" key={episode?.id}>
              <EpisodeInfo
                episode={episode!}
                setSelectedEpisode={setSelectedEpisode}
                setHighlightedEpisodeId={setHighlightedEpisodeId}
                highlightedEpisodeId={highlightedEpisodeId}
              />
            </div>
          ))}
        </ScrollArea>
        <div className="flex-grow-1 pl-3">
          {selectedEpisode && (
            <CharactersList characters={selectedEpisode?.characters || []} />
          )}
        </div>
      </div>
      <Pagination
        currentPage={info?.prev ? info.prev + 1 : 1}
        totalPages={info?.pages}
        nextPageNumber={info?.next}
        prevPageNumber={info?.prev}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </>
  );
};

export default Episodes;
