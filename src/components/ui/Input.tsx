"use client";

import type { IconType } from "react-icons";

type InputType = {
  label?: string;
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  icon?: IconType;
  required?: boolean;
  error?:boolean;
  onChange: (value: string) => void;
};

export default function Input({
  label,
  name,
  type,
  value,
  placeholder,
  icon: Icon,
  required,
  error,
  onChange,
}: InputType) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label ? (
        <label htmlFor={name} className="font-bold text-xs lg:text-sm">
          {label}
          {required && <span className="text-red-600 ms-1">*</span>}
        </label>
      ) : null}

      <div className="relative">
        <input
          id={name}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          className={`w-full border focus:outline-none ${error ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"} rounded-md ${Icon ? "ps-10 pe-3" : "px-3"} py-3 black-text text-xs lg:text-sm `}
        />

        {/* Icon */}
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon />
          </span>
        )}
      </div>
    </div>
  );
}
