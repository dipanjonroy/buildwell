"use client";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";
import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FiChevronDown } from "react-icons/fi";

type OptionType<T>= {
  label: string;
  value: T;
};

type SelectProps <T>= {
  label?: string;
  required?: boolean;
  icon?: IconType;
  placeholder: string;
  options: OptionType<T>[];
  value: T;
  error?:boolean;
  onChange: (value:T)=>void;
};

export default function Select<T>({
  label,
  required,
  placeholder,
  icon: Icon,
  options,
  value,
  error,
  onChange
}: SelectProps<T>) {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option)=> option.value === value);

  // Close dropdown when clicking outside
  useClickOutsideClose(selectRef, ()=>setIsopen(false));

  // Handle Select function
  const handleSelect = (option: OptionType<T>) => {
    onChange?.(option.value)
    setIsopen(false);
  };

  return (
    <div ref={selectRef} className="relative w-full">
      {/* Label */}
      {label && (
        <label className="block font-bold text-xs lg:text-sm mb-1">
          {label}
          {required && <span className="text-red-600 ms-1">*</span>}
        </label>
      )}

      {/* Select Button */}
      <button
        onClick={() => setIsopen(!isOpen)}
        className={`relative w-full border ${error ? "border-red-500" :"border-gray-300"} rounded-md ${Icon ? "ps-10 pe-3" : "px-3"} py-3 black-text text-xs lg:text-sm flex-center-between cursor-pointer`}
      >
        <span className={`${selectedOption ? "back-text" : "text-gray-400"}`}>{selectedOption?.label || placeholder}</span>
        <span className={`text-base transition-transform duration-200 ${isOpen ? "-rotate-180" : ""}`}>
          <FiChevronDown />
        </span>

        {/* Icon */}
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon />
          </span>
        )}
      </button>

      {/* Selected Options */}
      {isOpen && (
        <div className="absolute inset-x-0 white-bg border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
          <div className="w-full max-h-60 overflow-y-auto">
            {options.map((option, index) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left text-xs lg:text-sm block p-3 cursor-pointer transition ${isSelected ? "black-bg white-text" : "hover:black-bg hover:white-text"}`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
