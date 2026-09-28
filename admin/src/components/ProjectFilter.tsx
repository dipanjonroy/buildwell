"use client";

import { FiGrid, FiList, FiSearch } from "react-icons/fi";
import Input from "./ui/Input";
import Select, { OptionType } from "./ui/Select";
import {
  ProjectCategoryProp,
  ProjectShortByProp,
  ProjectStatusProp,
  useProjectStore,
} from "@/store/ProjectStore";
import { useEffect } from "react";

const CATEGORY_OPTIONS: OptionType<ProjectCategoryProp>[] = [
  { label: "All Category", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Renovation", value: "renovation" },
  { label: "Roof Repair", value: "roof repair" },
];

const STATUS_OPTIONS: OptionType<ProjectStatusProp>[] = [
  { label: "All Status", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "In Progress", value: "progress" },
  { label: "Pending", value: "pending" },
];

const SORT_BY_OPTIONS: OptionType<ProjectShortByProp>[] = [
  { label: "Newest", value: "newest" },
  { label: "This year", value: "this year" },
  { label: "Last year", value: "last year" },
];

export default function ProjectFilter() {
  const { projectFilterOptions, changeProjctFilterOption, view, setView } =
    useProjectStore();

  useEffect(() => {
    const savedView = localStorage.getItem("view");
    if (savedView === "grid" || savedView === "list") {
      setView(savedView);
    }
  }, [setView]);

  const setGrid = () => {
    setView("grid");
    localStorage.setItem("view", "grid");
  };

  const setList = () => {
    setView("list");
    localStorage.setItem("view", "list");
  };

  const viewBtn = (active: boolean) =>
    `size-11 shrink-0 flex-center rounded-lg cursor-pointer transition-colors ${
      active ? "black-bg white-text" : "border border-gray-300"
    }`;

  return (
    <div className="white-bg border border-gray-300 p-3 sm:p-4 rounded-xl">
      <div className="flex flex-wrap xl:flex-nowrap items-center gap-3">
        {/* Search: grows to fill the row */}
        <div className="order-1 flex-1 min-w-0 xl:min-w-64">
          <Input
            type="text"
            name="search"
            placeholder="Search by project name, client and location"
            icon={FiSearch}
            value={projectFilterOptions.searchKeyword}
            onChange={(value) =>
              changeProjctFilterOption("searchKeyword", value)
            }
          />
        </div>

        {/* View toggle: beside search on small screens, at the end on xl */}
        <div className="order-2 xl:order-3 flex items-center gap-2 shrink-0">
          <button
            type="button"
            className={viewBtn(view === "grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            onClick={setGrid}
          >
            <FiGrid aria-hidden />
          </button>
          <button
            type="button"
            className={viewBtn(view === "list")}
            aria-label="List view"
            aria-pressed={view === "list"}
            onClick={setList}
          >
            <FiList aria-hidden />
          </button>
        </div>

        {/* Selects: own full-width row below xl, inline at xl */}
        <div className="order-3 xl:order-2 basis-full xl:basis-auto grid grid-cols-2 sm:grid-cols-3 xl:flex gap-3">
          <div className="w-full xl:w-40">
            <Select
              options={CATEGORY_OPTIONS}
              value={projectFilterOptions.category}
              onChange={(value) => changeProjctFilterOption("category", value)}
            />
          </div>

          <div className="w-full xl:w-40">
            <Select
              options={STATUS_OPTIONS}
              value={projectFilterOptions.status}
              onChange={(value) => changeProjctFilterOption("status", value)}
            />
          </div>

          {/* Sort has the longest label, so it spans both columns on mobile */}
          <div className="col-span-2 sm:col-span-1 w-full xl:w-48">
            <Select
              options={SORT_BY_OPTIONS}
              value={projectFilterOptions.sortBy}
              onChange={(value) => changeProjctFilterOption("sortBy", value)}
              supportText="Sort by:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}