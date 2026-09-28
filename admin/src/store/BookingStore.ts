import { BookingStatus } from "@/libs/booking";
import { create } from "zustand";

type BookingFilter = {
  searchKeyword: string;
  status: BookingStatus | "all";
  projectType: string;
  date: Date | null;
  sortBy: string;
};

type BookingStoreType = {
  selectedBookingId: string;
  setSelectedBookingId: (id: string) => void;

  bookingFilterOptions: BookingFilter;
  changeFilterOption: <K extends keyof BookingFilter>(
    key: K,
    value: BookingFilter[K],
  ) => void;
  clearFilter: () => void;
};

export const useBookingStore = create<BookingStoreType>((set) => ({
  selectedBookingId: "",
  setSelectedBookingId: (id) => set({ selectedBookingId: id }),
  bookingFilterOptions: {
    searchKeyword: "",
    status: "all",
    projectType: "all",
    date: null,
    sortBy: "newest",
  },
  changeFilterOption: (key, value) =>
    set((state) => ({
      bookingFilterOptions: {
        ...state.bookingFilterOptions,
        [key]: value,
      },
    })),
  clearFilter: () =>
    set((state) => ({
      bookingFilterOptions: {
        ...state.bookingFilterOptions,
        status: "all",
        projectType: "all",
        date: null,
      },
    })),
}));
