"use client";

import { dashboardMenus } from "@/libs/dashboardMenu";
import Logo from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDashboardStore } from "@/store/DashboardStore";
import { RiCloseLine } from "react-icons/ri";

export default function Navigation() {
  const pathname = usePathname();
  const { isMenuOpen, closeMenu } = useDashboardStore();
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-dvh w-60 black-bg transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="w-full h-full p-4">
        <div className="w-full flex items-center justify-between lg:justify-center">
          <Logo variant="white" className="w-15 h-12 lg:w-22 lg:h-14" sizes="88px" />
          <button
            onClick={closeMenu}
            className="lg:hidden w-8 h-8 rounded-md bg-[#2F2F2F] flex-center white-text"
          >
            <RiCloseLine />
          </button>
        </div>

        <div className="mt-8">
          {dashboardMenus.map((menu) => {
            const Icon = menu.icon;
            const isActive = pathname === menu.url;
            return (
              <Link
                href={menu.url}
                key={menu.url}
                className={`block px-5 py-3 rounded-md ${isActive ? "helper-bg black-text" : "white-text"}`}
                onClick={closeMenu}
              >
                <span className="flex items-center gap-4">
                  <span>
                    <Icon size={20} />
                  </span>
                  <span className="text-sm">{menu.label}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
