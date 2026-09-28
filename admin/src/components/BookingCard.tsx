import { Booking } from "@/libs/booking";
import { useBookingStore } from "@/store/BookingStore";
import { FiCalendar } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

type BookingCardType = {
  booking: Booking;
  lastItem?: boolean;
  isSelected?: boolean;
  isPreviousItem?: boolean;
  onClick?: (id: string) => void;
};

const statusStyles = {
  confirmed: "bg-emerald-50 text-emerald-600",
  pending: "bg-blue-50 text-blue-600",
  rescheduled: "bg-orange-50 text-orange-600",
  rejected: "bg-red-50 text-red-600",
};

export default function BookingCard({
  booking,
  lastItem,
  isSelected,
  isPreviousItem,
}: BookingCardType) {
  // Date format
  const formattedDate = new Date(booking.date);

  const month = formattedDate.toLocaleDateString("en-US", { month: "short" });
  const day = formattedDate.toLocaleDateString("en-US", { day: "numeric" });
  const weekDay = formattedDate.toLocaleDateString("en-US", {
    weekday: "short",
  });

  // Format projectType
  const formattedProjectType = booking.projectType.replaceAll("-", " ");

  const { setSelectedBookingId } = useBookingStore();

  return (
    <div
      className={`relative w-full overflow-hidden py-1.5 ${isSelected ? "bg-slate-100 rounded-lg border-l-4 border-l-black border border-gray-200" : lastItem ? "" : isPreviousItem ? "border-b-0" : "border-b border-gray-200"}`}
    >
      {/* Main clickable area */}
      <button
        type="button"
        className="absolute inset-0 w-full cursor-pointer rounded-xl"
        aria-label={`View booking for ${booking.name}`}
        onClick={() => {
          setSelectedBookingId(booking.id);
        }}
      />

      {/* Card content */}
      <div className="relative w-full flex items-center gap-3 pointer-events-none">
        {/* Date */}
        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl tracking-tight size-12 h-17 shrink-0">
          <span className="uppercase text-xs text-gray-500 font-medium">
            {month}
          </span>

          <span className="font-bold">{day}</span>

          <span className="text-xs text-gray-500 font-medium capitalize">
            {weekDay}
          </span>
        </div>

        {/* Calendar Icon */}
        <div className="sm:size-12 md:size-8 2xl:size-18 shrink-0 flex items-center justify-center text-xl">
          <FiCalendar aria-hidden="true" />
        </div>

        {/* Booking Information */}
        <div className="min-w-0 flex-1">
          <p className="text-xs text-gray-500">{booking.time}</p>

          <p className="text-sm font-bold capitalize">{booking.name}</p>

          <p className="text-xs text-gray-500 capitalize">
            {formattedProjectType}
          </p>
        </div>

        {/* Status */}
        <div className="sm:w-26 2xl:w-40 flex">
          <span
            className={`capitalize text-xs font-semibold px-4 py-1 rounded-full ${
              statusStyles[booking.status]
            }`}
          >
            {booking.status}
          </span>
        </div>

        {/* Action */}
        <button
          type="button"
          className="pointer-events-auto hidden lg:flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-300 z-10"
          aria-label="Booking actions"
          onClick={() => {
            // open dropdown
          }}
        >
          <HiOutlineDotsVertical aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
