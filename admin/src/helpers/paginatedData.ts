export const usePaginatedData = <T>(
  currentPage: number,
  itemsPerPage: number,
  data: T[],
):T[] => {
  return data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
};
