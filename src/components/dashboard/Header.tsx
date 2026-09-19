"use client";

import { dashboardMenus } from "@/libs/dashboardMenu";
import { usePathname } from "next/navigation";
import Notification from "./Notification";
import Profile from "./Profile";

import { MdMenu } from "react-icons/md";
import { useDashboardStore } from "@/store/DashboardStore";

export default function Header() {
  const pathName = usePathname();
  const { openMenu } = useDashboardStore();

  const activePage = dashboardMenus.find((menu) => menu.url === pathName);

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
          <h3 className="heading font-bold tracking-tight text-xl">
            {activePage?.label}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <Notification />
          <Profile />
        </div>
      </div>
    </div>
  );
}
