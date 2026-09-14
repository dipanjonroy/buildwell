"use client";

import { useDashboardStore } from "@/store/DashboardStore";
import Image from "next/image";
import { RiMenuFold4Fill } from "react-icons/ri";
import { RiMenuFold3Fill } from "react-icons/ri";

export default function Header() {
  const { openMenu, toggleMenu } = useDashboardStore();
  return (
    <header className="w-full h-15 black-bg px-5 border-b-2 border-gray-300">
      <div className="w-full h-full flex-center-between">
        <div className="w-80 flex-center-between">
          <div className="w-14 h-14 relative">
            <Image
              src="/buildwell-logo-white.png"
              alt="BuildWell White Logo"
              fill
              sizes="48px"
              loading="eager"
              className="object-contain"
            />
          </div>

          <button className="cursor-pointer white-text" onClick={toggleMenu}>
            {openMenu ? (
              <RiMenuFold3Fill size={30} />
            ) : (
              <RiMenuFold4Fill size={30} />
            )}
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full relative bg-gray-200"></div>
          <div>
            <h5 className="heading font-bold tracking-tight text-sm white-text">
              Dipanjon
            </h5>
            <p className="text-gray-300 text-xs tracking-tight leading-none">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
