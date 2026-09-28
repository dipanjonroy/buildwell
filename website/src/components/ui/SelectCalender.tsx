"use client";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";
import { useRef, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { format } from "date-fns";
import Calender from "./Calender";

type SelectCalenderTypes = {
  label?: string;
  required?: boolean;
  placeholder: string;
  value: Date | null;
  error?: boolean;
  onChange: (date: Date) => void;
};

export default function SelectCalender({
  label,
  required,
  placeholder,
  value,
  error,
  onChange,
}: SelectCalenderTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false);

  const calenderRef = useRef<HTMLDivElement>(null);

  // Close calendar outside click
  useClickOutsideClose(calenderRef, () => setIsOpen(false));

  const handleOpen = () => {
    if (!isOpen) {
      const rect = calenderRef.current?.getBoundingClientRect();

      if (rect) {
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        // Calendar needs roughly 350px of space
        const calendarHeight = 350;

        setOpenUp(
          spaceBelow < calendarHeight && spaceAbove > spaceBelow
        );
      }
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={calenderRef} className="w-full relative">
      {/* Label */}
      {label && (
        <label className="block font-bold text-xs lg:text-sm mb-1">
          {label}
          {required && (
            <span className="text-red-600 ms-1">*</span>
          )}
        </label>
      )}

      {/* Select calendar button */}
      <button
        type="button"
        onClick={handleOpen}
        className={`relative w-full border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md ps-10 pe-3 py-3 text-left ${
          value ? "black-text" : "text-gray-400"
        } text-xs lg:text-sm cursor-pointer`}
      >
        {value ? format(value, "dd MMMM yyyy") : placeholder}

        <span className="absolute top-1/2 -translate-y-1/2 left-3">
          <FiCalendar />
        </span>
      </button>

      {/* Calendar */}
      {isOpen && (
        <div
          className={`absolute inset-x-0 z-100 ${
            openUp
              ? "bottom-full mb-1"
              : "top-full mt-1"
          }`}
        >
          <Calender
            value={value}
            onChange={(date) => {
              onChange(date);
              setIsOpen(false);
            }}
            weekClass="black-bg white-text rounded-tr-xl rounded-tl-xl text-sm p-2"
            dayClass="border border-gray-200 rounded-b-xl"
          />
        </div>
      )}
    </div>
  );
}