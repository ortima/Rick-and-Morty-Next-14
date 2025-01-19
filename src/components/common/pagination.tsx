import React from "react";

interface IProps {
	currentPage: number;
	totalPages: number | undefined | null;
	nextPageNumber: number | undefined | null;
	prevPageNumber: number | undefined | null;
	onNextPage?: () => void;
	onPrevPage?: () => void;
}

const Pagination: React.FC<IProps> = ({
	currentPage,
	totalPages,
	onNextPage,
	onPrevPage,
	nextPageNumber,
	prevPageNumber
}) => {
	return (
		<div className="mt-10 flex justify-center gap-10 text-base text-white">
			<button
				className={`rounded-2xl bg-white p-5 text-black hover:scale-110 hover:opacity-60 ${prevPageNumber === null ? "hidden" : ""}`}
				disabled={currentPage === 1}
				onClick={onPrevPage}
			>
				{prevPageNumber || ""}
			</button>
			<button disabled className="rounded-2xl bg-orange-400 p-5">
				{currentPage}
			</button>
			<button
				className={`rounded-2xl bg-white p-5 text-black hover:scale-110 hover:opacity-60 ${nextPageNumber === null ? "hidden" : ""}`}
				disabled={currentPage === totalPages}
				onClick={onNextPage}
			>
				{nextPageNumber || ""}
			</button>
		</div>
	);
};

export default Pagination;
