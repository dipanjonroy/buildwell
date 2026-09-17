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
        <h4 className="font-bold tracking-tight text-xl">Upcoming Bookings</h4>
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
              <div className="grid grid-cols-[62px_32px_1fr_auto_32px_20px] items-center gap-10">
                {/* Date */}
                <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl tracking-tight w-16 h-20">
                  <span className="uppercase text-xs text-gray-500 font-medium">
                    sep
                  </span>
                  <span className="font-bold text-xl">16</span>
                  <span className="text-xs text-gray-500 font-medium capitalize">
                    wed
                  </span>
                </div>

                {/* Calender Icon */}
                <FiCalendar size={22} />

                {/* Booking Information */}
                <div className="min-w-0 tracking-tight flex flex-col">
                  <span className="text-xs text-gray-500">09:00 AM</span>
                  <span className="text-base font-bold capitalize">
                    Sarah Wilson
                  </span>
                  <span className="text-xs text-gray-500 capitalize">
                    kitchen renovation
                  </span>
                </div>

                {/* Status */}
                <span
                  className={`capitalize text-xs font-semibold px-4 py-1 rounded-full ${statusStyles["confirmed"]}`}
                >
                  Confirmed
                </span>

                {/* Button */}
                <Link
                  href="/"
                  className="flex-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  <FiArrowRight />
                </Link>

                {/* Action Button */}
                <button className="cursor-pointer flex-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                  <HiOutlineDotsVertical />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
