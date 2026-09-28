"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type PaginationType = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (val: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationType) {
  return (
    <div className="flex gap-4">
      {/* Previous btn*/}
      <button
        aria-label="Previous button"
        type="button"
        className="size-8 flex-center rounded border border-gray-200 cursor-pointer disabled:bg-gray-200"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`size-8 flex-center rounded ${currentPage === idx + 1 ? "black-bg white-text" : "border border-gray-200"} cursor-pointer text-sm`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Next btn */}
      <button
        aria-label="Previous button"
        type="button"
        className="size-8 flex-center rounded border border-gray-200 cursor-pointer disabled:bg-gray-200"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
