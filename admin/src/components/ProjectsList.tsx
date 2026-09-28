"use client";

import { usePaginatedData } from "@/helpers/paginatedData";
import useProjectFilter from "@/hooks/useProjectFilter";
import { useProjectStore } from "@/store/ProjectStore";
import {  useState } from "react";
import ProjectGridCard from "./ProjectGridCard";
import ItemNotFound from "./ItemNotFound";
import Pagination from "./Pagination";
import ProjectListCard from "./ProjectListCard";

export default function ProjectsList() {
  const { view} = useProjectStore();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredData = useProjectFilter();

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = usePaginatedData(
    currentPage,
    itemsPerPage,
    filteredData,
  );

  const viewStyle =
    view === "grid"
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
      : "space-y-2";


  return (
    <div className="w-full space-y-10">
      <div className={`w-full ${viewStyle}`}>
        {paginatedData.map((project) => {
          const Card = view === "grid" ? ProjectGridCard : ProjectListCard;

          return <Card key={project.id} project={project} />;
        })}
      </div>

      {!paginatedData.length && <ItemNotFound text="No projects available." />}

      {/* Pagination */}
      {paginatedData.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <span className="text-sm text-gray-400">{`Showing ${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, filteredData.length)} of ${filteredData.length} bookings`}</span>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
