"use client";

import { useState } from "react";
import type { IconType } from "react-icons";

type TextareaType = {
  label?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  icon?: IconType;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
};

export default function Textarea({
  label,
  name,
  required,
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
}: TextareaType) {
  const [localValue, setLocalValue] = useState(value);

  return (
    <div className="w-full flex flex-col gap-1">
      {label ? (
        <label htmlFor={name} className="font-bold text-xs lg:text-sm">
          {label}
          {required && <span className="text-red-600 ms-1">*</span>}
        </label>
      ) : null}

      <div className="relative">
        <textarea
          id={name}
          rows={8}
          name={name}
          value={localValue}
          onChange={(e) => {
            setLocalValue(e.target.value);
          }}
          onBlur={() => {
            onChange(localValue);
          }}
          placeholder={placeholder}
          className={`w-full border focus:outline-none ${error ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"} rounded-md ${Icon ? "ps-10 pe-3" : "px-3"} py-3 black-text text-xs lg:text-sm resize-none overflow-hidden`}
        ></textarea>

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
