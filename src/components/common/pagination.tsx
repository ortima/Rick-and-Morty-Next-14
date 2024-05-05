import React from "react";

interface Props {
  currentPage: number;
  totalPages: number | undefined;
  onNextPage: () => void;
  onPrevPage: () => void;
  nextPageNumber: string | undefined;
  prevPageNumber: string | undefined;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  nextPageNumber,
  prevPageNumber,
}) => {
  return (
    <div className="flex gap-10 justify-center text-base text-white mt-10">
      <button
        className={`p-5 hover:opacity-60 hover:scale-110 bg-white text-black rounded-2xl ${currentPage === 1 ? "hidden" : ""}`}
        disabled={currentPage === 1}
        onClick={onPrevPage}
      >
        {prevPageNumber}
      </button>
      <button disabled className=" p-5 rounded-2xl bg-orange-400">
        {currentPage}
      </button>
      <button
        className={`p-5 hover:opacity-60 hover:scale-110 bg-white text-black rounded-2xl ${currentPage === 42 ? "hidden" : ""}`}
        disabled={currentPage === totalPages}
        onClick={onNextPage}
      >
        {nextPageNumber}
      </button>
    </div>
  );
};

export default Pagination;
