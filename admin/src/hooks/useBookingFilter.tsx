import { bookings } from "@/libs/booking";
import useDebounce from "./useDebounce";
import { useBookingStore } from "@/store/BookingStore";
import { isSameDay, parseISO } from "date-fns";
import { useMemo } from "react";

export default function useBookingFilter() {
  const { searchKeyword, status, projectType, date } = useBookingStore(
    (state) => state.bookingFilterOptions,
  );
  const sourceData = bookings;
  const keyword = useDebounce(searchKeyword);

  const filteredData = useMemo(() => {
    const isFiltered =
      keyword ||
      (status && status !== "all") ||
      (projectType && projectType !== "all") ||
      (date && date !== null);

    if (!isFiltered) return sourceData;

    return sourceData.filter((item) => {
      // Search Keywords
      const searchableItems = [item.name, item.email, item.location, item.phone]
        .join(" ")
        .toLowerCase();

      const matchKeyword = !keyword
        ? true
        : searchableItems.includes(keyword.toLowerCase());

      // Booking status
      const matchStatus =
        status === "all" || !status
          ? true
          : item.status.toLowerCase() === status.toLowerCase();

      // Booking project type
      const matchProjectType =
        projectType === "all" || !projectType
          ? true
          : item.projectType.toLowerCase() === projectType.toLowerCase();

      // Booking date
      const matchDate = !date ? true : isSameDay(parseISO(item.date), date);

      return matchKeyword && matchStatus && matchProjectType && matchDate;
    });
  },[status, projectType, date,sourceData,keyword]);

  return filteredData;
}
