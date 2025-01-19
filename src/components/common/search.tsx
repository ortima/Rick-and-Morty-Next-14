"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Search = ({
	search,
	pathname,
	status
}: {
	search?: string;
	pathname: string;
	status?: string;
}) => {
	const router = useRouter();
	const [text, setText] = useState(search);
	const [query] = useDebounce(text, 500);

	const initialRender = useRef(true);

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		if (!query) {
			router.push(pathname);
		} else {
			const statusParam = status ? `&status=${status}` : "";

			router.push(`${pathname}?name=${query}${statusParam}`);
		}
	}, [query, router]);

	return (
		<div className="w-[400px] max-sm:w-[80%]">
			<input
				className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				value={text || ""}
				onChange={(e) => setText(e.target.value)}
				type="search"
				placeholder="Search location"
			/>
		</div>
	);
};

export default Search;
