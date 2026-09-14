"use client";

import { dashboardMenus } from "@/libs/dashboardMenu";
import { useDashboardStore } from "@/store/DashboardStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { openMenu } = useDashboardStore();
  const pathName = usePathname();
  return (
    <div
      className={`${openMenu ? "w-80" : "w-18"} h-full shrink-0 black-bg overflow-x-hidden overflow-y-auto transition-[width] duration-300`}
    >
      <div className="w-full">
        {dashboardMenus.map((menu, idx) => {
          const Icon = menu.icon;
          const isActive = pathName === menu.url;

          return (
            <Link key={idx} href={menu.url}>
              <div
                className={`px-6 py-4 flex items-center gap-4 ${isActive ? "bg-[#1f1f1f]" : "hover:bg-[#1f1f1f]"} transition-colors`}
              >
                <Icon className="white-text text-xl shrink-0" />
                {openMenu && (
                  <span className="white-text text-sm whitespace-nowrap">
                    {menu.label}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
