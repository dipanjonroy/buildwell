"use client";

import { GoArrowRight } from "react-icons/go";

type MainButtonProps = {
  btnName: string;
  variant?: string;
  onClick: () => void;
};

export default function PrimaryButton({
  btnName,
  variant,
  onClick,
}: MainButtonProps) {
  const btnClass =
    variant === "black"
      ? "black-bg white-text"
      : variant === "gray"
        ? "bg-gray-200 black-text"
        : "white-bg black-text";
  const iconClass =
    variant === "black" ? "white-bg black-text" : "black-bg white-text";
  return (
    <button
      type="button"
      className={`${btnClass} ps-6 pe-1.5 py-2 rounded-full inline-flex w-fit items-center gap-2 group cursor-pointer`}
      onClick={onClick}
    >
      {/* Text */}
      <span className="relative h-5 overflow-hidden leading-5 flex items-center">
        <span className="block text-sm lg:text-base font-medium leading-5 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {btnName}
        </span>

        <span className="absolute left-0 top-0 w-full text-sm lg:text-base font-medium leading-5 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          {btnName}
        </span>
      </span>

      {/* Icon */}
      <span
        className={`${iconClass} w-6 h-6 lg:w-8 lg:h-8 shrink-0 flex items-center justify-center rounded-full`}
      >
        <GoArrowRight className="text-sm lg:text-xl transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
      </span>
    </button>
  );
}
