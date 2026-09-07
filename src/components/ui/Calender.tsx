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

type CalenderType = {
  value?: Date | null;
  onChange?: (date: Date) => void;
};

export default function Calender({ value, onChange }: CalenderType) {
  const [currentMonth, setCurrentMonth] = useState<Date>(value || new Date());
  const selectedDate = value;

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calenderStart = startOfWeek(monthStart, {
    weekStartsOn: 1,
  });
  const calenderEnd = endOfWeek(monthEnd, {
    weekStartsOn: 1,
  });

  const days = eachDayOfInterval({
    start: calenderStart,
    end: calenderEnd,
  });

  const handleDateClick = (date:Date)=>{
    onChange?.(date)
  }

  return (
    <div className="w-full max-w-sm white-bg border border-gray-200 rounded-md shadow-lg p-3">
      {/* Header */}
      <div className="flex-center-between mb-3">
        <button onClick={prevMonth} className="cursor-pointer">
          <FiChevronLeft className="text-xl black-text" />
        </button>

        <h2 className="text-base font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>

        <button onClick={nextMonth} className="cursor-pointer">
          <FiChevronRight className="text-xl black-text" />
        </button>
      </div>

      {/* Weeks */}
      <div className="grid grid-cols-7 black-bg border rounded-tl-lg rounded-tr-lg black-border white-text text-sm py-1">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="flex-center">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 border border-gray-200 rounded-bl-lg rounded-br-lg">
        {days.map((date) => {
          const outsideMonth = !isSameMonth(date, currentMonth);
          const selected = selectedDate && isSameDay(date, selectedDate);
          const today = isToday(date);

          return (
            <button
              key={date.toISOString()}
              disabled={outsideMonth}
              onClick={()=>handleDateClick(date)}
              className={`p-1 text-sm flex-center w-8 h-8 ${outsideMonth ? "text-gray-300" : today ? "black-text border black-border rounded-md" : selected ? "black-bg white-text rounded-md" : "cursor-pointer text-gray-500 hover:black-text hover:font-bold"}`}
            >
              {format(date, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
