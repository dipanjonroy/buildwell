import Link from "next/link";
import ViewAllBtn from "./ViewAllBtn";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function UpcomingBookingsCard() {
  const statusStyles = {
    confirmed: "bg-emerald-50 text-emerald-600",
    pending: "bg-blue-50 text-blue-600",
    rescheduled: "bg-orange-50 text-orange-600",
    rejected: "bg-red-50 text-red-600",
  };
  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <div className="flex-center-between mb-4">
        <h4 className="font-bold text-lg">Upcoming Bookings</h4>
        <ViewAllBtn btnName="View all" url="/dashboard/bookings" />
      </div>

      <div className="">
        {Array.from({ length: 5 }).map((_, idx) => {
          const lastItem = idx === 4;
          return (
            <div
              key={idx}
              className={`${lastItem ? "" : "border-b border-gray-200"} py-1.5`}
            >
              <div className="flex items-center gap-3">
                {/* Date */}
                <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl tracking-tights size-12 h-17 shrink-0">
                  <span className="uppercase text-xs text-gray-500 font-medium">
                    sep
                  </span>
                  <span className="font-bold">16</span>
                  <span className="text-xs text-gray-500 font-medium capitalize">
                    wed
                  </span>
                </div>

                {/* Calender Icon */}
                <div className="sm:size-12 md:size-8 xl:size-12 shink-0 flex items-center justify-center text-xl">
                  <FiCalendar aria-hidden />
                </div>

                {/* Booking Information */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500">09:00 AM</p>
                  <p className="text-sm font-bold capitalize">Sarah Wilson</p>
                  <p className="text-xs text-gray-500 capitalize">
                    kitchen renovation
                  </p>
                </div>

                {/* Status */}
                <div className="sm:w-30 lg:w-auto">
                  <span
                    className={`capitalize text-xs font-semibold px-4 py-1 rounded-full ${statusStyles["confirmed"]}`}
                  >
                    Confirmed
                  </span>
                </div>

                {/* Button */}
                <Link
                  href="/"
                  className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  aria-label="View booking button"
                >
                  <FiArrowRight aria-hidden />
                </Link>

                {/* Action Button */}
                <button
                  className="hidden lg:flex items-center justify-center cursor-pointer  w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  aria-label="Booking action button"
                >
                  <HiOutlineDotsVertical aria-hidden />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
