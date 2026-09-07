"use client";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";
import { useRef, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import Calender from "./Calender";
import { format } from "date-fns";

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
  const [isOpen, setIsopen] = useState<boolean>(false);

  const calenderRef = useRef<HTMLDivElement>(null);

  // Close calender outside click
  useClickOutsideClose(calenderRef, () => setIsopen(false));

  return (
    <div ref={calenderRef} className="w-full relative">
      {/* Label */}
      {label && (
        <label className="block font-bold text-xs lg:text-sm mb-1">
          {label}
          {required && <span className="text-red-600 ms-1">*</span>}
        </label>
      )}

      {/* Select calender button */}
      <button
        onClick={() => setIsopen(!isOpen)}
        className={`relative w-full border ${error ? "border-red-500" : "border-gray-300"} rounded-md ps-10 pe-3 py-3 text-left ${value ? "black-text" : "text-gray-400"} text-xs lg:text-sm cursor-pointer`}
      >
        {value ? format(value, "dd MMMM yyyy") : placeholder}
        <span className="absolute top-1/2 -translate-y-1/2 left-3">
          <FiCalendar />
        </span>
      </button>

      {/* Calender */}
      {isOpen && (
        <div className="absolute inset-x-0 z-100">
          <Calender
            value={value}
            onChange={(date) => {
              onChange?.(date);
              setIsopen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
