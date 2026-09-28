"use client";

import { bookings } from "@/libs/booking";
import { useBookingStore } from "@/store/BookingStore";
import ItemNotFound from "./ItemNotFound";
import { FaPhone } from "react-icons/fa6";
import {
  LuUserCog,
  LuCalendar,
  LuPin,
  LuDollarSign,
  LuMessageSquareText,
} from "react-icons/lu";
import Link from "next/link";

export default function BookingDetails() {
  const { selectedBookingId } = useBookingStore();

  const booking = bookings.find((item) => item.id === selectedBookingId);

  if (!booking) return <ItemNotFound text="No booking found." />;

  const statusStyles = {
    confirmed: "bg-emerald-50 text-emerald-600",
    pending: "bg-blue-50 text-blue-600",
    rescheduled: "bg-orange-50 text-orange-600",
    rejected: "bg-red-50 text-red-600",
  };

  const formattedDate = new Date(booking?.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  

  const handleStatusAction = (status: string) => {
    // alert.warning({
    //   heading: "Are you sure!",
    //   text: `Are you sure to ${status} the booking?`,
    //   submitBtnName: "Confirm",
    //   submitFn: statusAction[status] ?? closeAlert,
    // });
  };

  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <div className="border-b border-gray-300 pb-3">
        <h4 className="font-bold text-lg">Booking Details</h4>
      </div>

      {/* Booking details */}
      <div className="mt-4 space-y-5 pb-6 border-b border-gray-300">
        {/* Booking status */}
        <div className="sm:w-30 lg:w-40 flex">
          <span
            className={`capitalize text-xs font-semibold px-4 py-1 rounded-full ${
              statusStyles[booking.status]
            }`}
          >
            {booking.status}
          </span>
        </div>

        {/* Name contact */}
        <div className="mt-4 border-l-3 ps-4 space-y-0.5">
          <h5 className="text-base font-semibold">{booking.name}</h5>
          <p className="text-xs text-gray-400 flex items-center gap-2">
            <FaPhone />
            <Link
              href={`tel:${booking.phone}`}
              className="hover:text-black transition-colors"
            >
              {booking.phone}
            </Link>
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-2">
            <Link
              href={`mailto:${booking.email}`}
              className="hover:text-black transition-colors"
            >
              {booking.email}
            </Link>
          </p>
        </div>

        {/* Details */}
        <div className="helper-bg rounded-xl p-4 space-y-4">
          <div className="flex items-center gap-3">
            <span className="size-10 flex-center bg-gray-200 rounded-full">
              <LuUserCog />
            </span>

            <div>
              <h5 className="font-semibold text-sm capitalize">
                {booking.projectType.replaceAll("-", " ")}
              </h5>
              <p className="text-xs font-medium text-gray-400 leading-4">
                Project Type
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="size-10 flex-center bg-gray-200 rounded-full">
              <LuDollarSign />
            </span>

            <div>
              <h5 className="font-semibold text-sm capitalize">
                {booking.budget}
              </h5>
              <p className="text-xs font-medium text-gray-400 leading-4">
                Budget
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="size-10 flex-center bg-gray-200 rounded-full">
              <LuCalendar />
            </span>

            <div>
              <h5 className="font-semibold text-sm capitalize">{`${formattedDate} . ${booking.time}`}</h5>
              <p className="text-xs font-medium text-gray-400 leading-4">
                Date & Time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="size-10 flex-center bg-gray-200 rounded-full">
              <LuPin />
            </span>

            <div>
              <h5 className="font-semibold text-sm capitalize">
                {booking.location}
              </h5>
              <p className="text-xs font-medium text-gray-400 leading-4">
                Location
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="size-10 flex-center bg-gray-200 rounded-full">
              <LuMessageSquareText />
            </span>

            <div>
              <h5 className="font-semibold text-sm capitalize">
                {booking.bookingMethod}
              </h5>
              <p className="text-xs font-medium text-gray-400 leading-4">
                Meething Method
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full mt-4">
        <h4 className="font-bold text-sm">Actions</h4>

        {/* statuses */}
        <div className="flex gap-3 flex-wrap mt-3">
          <button
            type="button"
            disabled={booking.status === "confirmed"}
            className={`text-xs px-3 py-2 rounded-md font-medium cursor-pointer text-green-500 disabled:cursor-auto ${booking.status === "confirmed" ? "bg-green-100 " : "bg-green-50"}`}
            onClick={() => handleStatusAction("confirm")}
          >
            Confirm
          </button>
          <button
            disabled={booking.status === "rescheduled"}
            className={`text-xs px-3 py-2 rounded-md font-medium cursor-pointer text-orange-500 disabled:cursor-auto ${booking.status === "rescheduled" ? "bg-orange-100 " : "bg-orange-50"}`}
            onClick={() => handleStatusAction("reschedule")}
          >
            Reschedule
          </button>
          <button
            disabled={booking.status === "rejected"}
            className={`text-xs px-3 py-2 rounded-md font-medium cursor-pointer text-red-500 disabled:cursor-auto ${booking.status === "rejected" ? "bg-red-100 " : "bg-red-50"}`}
            onClick={() => handleStatusAction("reject")}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
