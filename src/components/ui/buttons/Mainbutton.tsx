import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

type MainButtonProps = {
  btnName: string;
  url: string;
  variant?: "black" | "white";
};

export default function Mainbutton({ btnName, url, variant }: MainButtonProps) {
  const btnClass =
    variant === "black" ? "black-bg white-text" : "white-bg black-text";
  const iconClass =
    variant === "black" ? "white-bg black-text" : "black-bg white-text";
  return (
    <Link
      href={url}
      className={`${btnClass} ps-6 pe-1.5 py-1.5 rounded-full inline-flex w-fit items-center gap-2 group`}
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
      <span className={`${iconClass} w-6 h-6 flex-center rounded-full`}>
        {
          <GoArrowRight className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
        }
      </span>
    </Link>
  );
}
