import React from "react";
import { GetLocationsQuery } from "@/__generated__/graphql";
import Search from "@/components/common/search";
import graphqlClient from "@/lib/client";
import { GET_LOCATIONS } from "@/lib/graphql";
import { ApolloQueryResult } from "@apollo/client";
import Link from "next/link";

// TODO: add type later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Locations = async (props: { searchParams: Promise<any> }) => {
	const searchParams = await props.searchParams;
	const search =
		typeof searchParams.search === "string" ? searchParams.search : undefined;

	const page =
		typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

	const { data }: ApolloQueryResult<GetLocationsQuery> =
		await graphqlClient.query({
			query: GET_LOCATIONS,
			variables: { filter: { name: search }, page: page },
		});

	const locations = data.locations?.results || [];

	return (
		<section className="container flex flex-col items-center gap-10 sm:flex sm:flex-col sm:items-center sm:gap-20">
			<div className="items-center justify-between sm:flex">
				<div
					className={`mr-4 text-white ${locations.length > 0 ? "" : "hidden"}`}
				>
					Shown {locations.length} of {data.locations?.info?.count}
				</div>
				<div className="flex items-center">
					<div className="mx-auto">
						<Search search={search} pathname={"/locations"} />
					</div>
				</div>
			</div>
			{locations.length > 0 ? (
				<div className="grid grid-cols-2 gap-5 sm:flex sm:flex-wrap sm:gap-5">
					{locations.map((location) => (
						<div className="rounded-md bg-gray-200 p-3" key={location?.id}>
							<div>
								{location?.id}. {location?.name}
							</div>
							<div>{location?.dimension}</div>
						</div>
					))}
				</div>
			) : (
				<div className="text:base text-center text-white sm:text-2xl">
					Location: {search} not found :(
				</div>
			)}
			<div className="mt-10 flex justify-center gap-10 text-base">
				<Link
					className={`rounded-2xl bg-white p-5 text-black hover:scale-110 hover:opacity-60 ${
						data.locations?.info?.prev == null ? "hidden" : ""
					}`}
					href={{
						pathname: "/locations",
						query: {
							...(search ? { search } : {}),
							page: data.locations?.info?.prev,
						},
					}}
				>
					Prev
				</Link>
				<Link
					className={`rounded-2xl bg-white p-5 text-black hover:scale-110 hover:opacity-60 ${
						data.locations?.info?.next == null ? "hidden" : ""
					}`}
					href={{
						pathname: "/locations",
						query: {
							...(search ? { search } : {}),
							page: data.locations?.info?.next,
						},
					}}
				>
					Next
				</Link>
			</div>
		</section>
	);
};

export default Locations;
