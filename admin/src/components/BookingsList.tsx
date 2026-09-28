"use client";

import { FiSearch } from "react-icons/fi";
import Input from "./ui/Input";
import { useEffect, useState } from "react";
import Select from "./ui/Select";
import BookingCard from "./BookingCard";
import Pagination from "./Pagination";
import { usePaginatedData } from "@/helpers/paginatedData";
import { useBookingStore } from "@/store/BookingStore";
import useBookingFilter from "@/hooks/useBookingFilter";
import ItemNotFound from "./ItemNotFound";

const SHORT_OPTIONS = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Last 7 days",
    value: "last-7-days",
  },
  {
    label: "Last 15 days",
    value: "last-15-days",
  },
  {
    label: "Last 30 days",
    value: "last-30-days",
  },
];

export default function BookingsList() {
  const {
    selectedBookingId,
    setSelectedBookingId,
    bookingFilterOptions,
    changeFilterOption,
  } = useBookingStore();

  const filteredData = useBookingFilter();

  const [sortBy, setSortBy] = useState<string>(SHORT_OPTIONS[0].value);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = usePaginatedData(
    currentPage,
    itemsPerPage,
    filteredData,
  );

  const firstBookingId = paginatedData[0]?.id;

  useEffect(() => {
    if (firstBookingId) {
      setSelectedBookingId(firstBookingId);
    }
  }, [firstBookingId, setSelectedBookingId]);

  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <div className="flex gap-4">
        <div className="min-w-0 flex-1">
          <Input
            type="text"
            placeholder="Search by client name, service or phone"
            icon={FiSearch}
            value={bookingFilterOptions.searchKeyword}
            onChange={(value) => changeFilterOption("searchKeyword", value)}
          />
        </div>
        <div className="w-full max-w-50">
          <Select
            options={SHORT_OPTIONS}
            value={sortBy}
            onChange={(val) => setSortBy(val)}
            supportText="Sort by:"
          />
        </div>
      </div>

      {/* List */}
      <div className="my-4">
        {paginatedData.map((booking, index) => {
          const isSelected = selectedBookingId === booking.id;
          const selectedIndex = paginatedData.findIndex(
            (item) => item.id === selectedBookingId,
          );
          const isPreviousItem = index === selectedIndex - 1;
          return (
            <BookingCard
              key={booking.id}
              booking={booking}
              isSelected={isSelected}
              isPreviousItem={isPreviousItem}
            />
          );
        })}
      </div>

      {
        !paginatedData.length && <ItemNotFound text="No bookings available."/>
      }

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
