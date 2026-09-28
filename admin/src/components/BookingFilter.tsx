"use client";

import { FiFilter } from "react-icons/fi";
import { projectTypes } from "@/libs/projectTypes";
import Select, { OptionType } from "./ui/Select";
import SelectCalender from "./ui/SelectCalender";
import { useBookingStore } from "@/store/BookingStore";
import { BookingStatus } from "@/libs/booking";

const StatusDropdown: OptionType<BookingStatus | "all">[] = [
  {
    label: "All Statuses",
    value: "all",
  },
  {
    label: "Confirmed",
    value: "confirmed",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Rescheduled",
    value: "rescheduled",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

const ServiceDropdown = [
  {
    label: "All Services",
    value: "all",
  },
  ...projectTypes,
];

export default function BookingFilter() {
  const { bookingFilterOptions, changeFilterOption, clearFilter } =
    useBookingStore();

  return (
    <div className="w-full h-fit p-6 white-bg border border-gray-300 rounded-xl">
      <div className="flex-center-between mb-4">
        <div className="flex items-center gap-3">
          <FiFilter aria-hidden />
          <h4 className="font-bold text-lg">Filters</h4>
        </div>
        <button
          onClick={clearFilter}
          className="font-semibold text-xs cursor-pointer"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-3">
        <Select
          options={StatusDropdown}
          value={bookingFilterOptions.status}
          onChange={(value) => changeFilterOption("status", value)}
        />
        <Select
          options={ServiceDropdown}
          value={bookingFilterOptions.projectType}
          onChange={(value) => changeFilterOption("projectType", value)}
        />
        <SelectCalender
          placeholder="Select Date"
          value={bookingFilterOptions.date}
          onChange={(value) => changeFilterOption("date", value)}
        />
      </div>
    </div>
  );
}
