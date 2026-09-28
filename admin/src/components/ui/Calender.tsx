"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  startOfWeek,
  format,
  subMonths,
  addMonths,
  isSameMonth,
  isSameDay,
  isToday,
  endOfWeek,
} from "date-fns";
import { useState } from "react";
import { Booking } from "@/libs/booking";

type CalenderType = {
  value?: Date | null;
  onChange?: (date: Date) => void;
  bookings?: Booking[];
  dayClass?:string;
  weekClass?:string;
};

export default function Calender({
  value,
  onChange,
  bookings = [],
  dayClass,
  weekClass,
}: CalenderType) {
  const [currentMonth, setCurrentMonth] = useState<Date>(
    value || new Date(),
  );

  const selectedDate = value;

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, {
    weekStartsOn: 1,
  });

  const calendarEnd = endOfWeek(monthEnd, {
    weekStartsOn: 1,
  });

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const handleDateClick = (date: Date) => {
    onChange?.(date);
  };

  return (
    <div className="w-full white-bg border border-gray-200 rounded-md p-3">
      {/* Header */}
      <div className="flex-center-between mb-3">
        <button onClick={prevMonth} className="cursor-pointer">
          <FiChevronLeft className="text-xl black-text" />
        </button>

        <h2 className="text-sm font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>

        <button onClick={nextMonth} className="cursor-pointer">
          <FiChevronRight className="text-xl black-text" />
        </button>
      </div>

      {/* Weeks */}
      <div className={`grid grid-cols-7 ${weekClass}`}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="flex-center">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className={`grid grid-cols-7 items-center ${dayClass}`}>
        {days.map((date) => {
          const outsideMonth = !isSameMonth(date, currentMonth);
          const selected =
            selectedDate && isSameDay(date, selectedDate);
          const today = isToday(date);

          const dayBooking = bookings.filter((booking) =>
            isSameDay(new Date(booking.date), date),
          );

          return (
            <button
              key={date.toISOString()}
              disabled={outsideMonth}
              onClick={() => handleDateClick(date)}
              className={`relative text-sm flex-center size-10 lg:size-6 2xl:size-10 ${
                outsideMonth
                  ? "text-gray-300"
                  : today
                    ? "black-text border black-border rounded-full"
                    : selected
                      ? "black-bg white-text rounded-md"
                      : "cursor-pointer text-gray-500 hover:black-text hover:font-bold"
              }`}
            >
              <span>{format(date, "d")}</span>

              {/* Booking activity */}
              {!outsideMonth && dayBooking.length > 0 && (
                <div className="absolute -bottom-1.5 flex gap-1">
                  {dayBooking.slice(0, 3).map((booking) => (
                    <span
                      key={booking.id}
                      className={`w-1.5 h-1.5 rounded-full ${
                        booking.status === "confirmed"
                          ? "bg-emerald-500"
                          : booking.status === "pending"
                            ? "bg-blue-500"
                            : booking.status === "rejected"
                              ? "bg-red-500"
                              : "bg-orange-500"
                      }`}
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}