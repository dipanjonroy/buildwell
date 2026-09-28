import { projectsData } from "@/libs/projectData";
import { useMemo } from "react";
import useDebounce from "./useDebounce";
import { useProjectStore } from "@/store/ProjectStore";

export default function useProjectFilter() {
  const { searchKeyword, category, status } = useProjectStore(
    (state) => state.projectFilterOptions,
  );

  const sourceData = projectsData;
  const keyword = useDebounce(searchKeyword);

  const filteredData = useMemo(() => {
    const isFiltered = keyword || category !== "all" || status !== "all";

    if (!isFiltered) return sourceData;

    return sourceData.filter((item) => {
      // Search Keyword
      const searchableItems = [item.title, item.location, item.clientName]
        .join(" ")
        .toLowerCase();
      const matchKeyword = !keyword
        ? true
        : searchableItems.includes(keyword.toLowerCase());

      // Filter by category
      const matchCategory =
        category === "all" || !category
          ? true
          : item.category.toLowerCase() === category.toLowerCase();

      // Filter by status
      const matchStatus =
        status === "all" || !status
          ? true
          : item.status.toLowerCase() === status.toLowerCase();

      return matchKeyword && matchCategory && matchStatus;
    });
  }, [sourceData, keyword, category, status]);

  return filteredData;
}
