"use client";

import React, { useEffect, useState } from "react";
import { Episode, GetEpisodesQuery } from "@/__generated__/graphql";
import Pagination from "@/components/common/pagination";
import { CharactersList, EpisodeInfo } from "@/components/episodes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import GET_EPISODES from "@/lib/graphql/episodes";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import {
	notFound,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { IoIosArrowDropright } from "react-icons/io";

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
			<div className="container flex justify-between border-2 p-6 text-white">
				<div className="flex flex-col gap-5">
					{new Array(10).fill("").map((_, index) => (
						<Skeleton key={index} className="h-[30px] w-[300px] rounded-full" />
					))}
				</div>
				<Skeleton className="h-[300px] w-3/5">&nbsp;</Skeleton>
				<div className="flex-grow-1 pl-3"></div>
			</div>
		);
	if (error) return <div>Error: {error.message}</div>;

	const episodes: (Episode | null)[] = data?.episodes?.results || [];

	const info = data?.episodes?.info;

	return (
		<>
			<div className="container flex rounded-2xl border-2 p-6 text-white">
				<ScrollArea className="h-[800px] w-[300px] flex-none">
					{episodes.map((episode) => (
						<div
							className="flex items-center justify-between px-4 py-4"
							key={episode?.id}
						>
							<EpisodeInfo
								episode={episode!}
								setSelectedEpisode={setSelectedEpisode}
								setHighlightedEpisodeId={setHighlightedEpisodeId}
								highlightedEpisodeId={highlightedEpisodeId}
							/>
							<Link
								className="hover:scale-105 hover:text-orange-400"
								href={`/episodes/${episode?.id}`}
							>
								<IoIosArrowDropright size={30} />
							</Link>
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
