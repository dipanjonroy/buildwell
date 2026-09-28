"use client";

import Notification from "./Notification";
import Profile from "./Profile";

import { MdMenu } from "react-icons/md";
import { useDashboardStore } from "@/store/DashboardStore";
import Link from "next/link";

export default function Header() {
  const { openMenu } = useDashboardStore();

  return (
    <div className="w-full h-16 border-b border-gray-300 px-3 lg:px-6 py-3 white-bg">
      <div className="flex-center-between">
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={openMenu}
            className={`flex-center lg:hidden p-1.5 border border-gray-300 cursor-pointer`}
          >
            <MdMenu size={24} />
          </button>
          <Link href="/" className="tracking-tight text-sm bg-mauve-100 text-mauve-600 font-semibold px-4 py-1 rounded-full">Live site</Link>
        </div>

        <div className="flex items-center gap-4">
          <Notification />
          <Profile />
        </div>
      </div>
    </div>
  );
}
