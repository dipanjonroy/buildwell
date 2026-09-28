import { IconType } from "react-icons";
import {
  LuLayoutDashboard,
  LuCalendarDays,
  LuFolderKanban,
  LuMessageSquareQuote,
  LuUsers,
  LuFileText,
} from "react-icons/lu";

export type SubMenuType = {
  label: string;
  url: string;
};

export type DashboardMenuType = {
  icon: IconType;
  label: string;
  url: string;
  submenus?: SubMenuType[];
};

export const dashboardMenus: DashboardMenuType[] = [
  {
    icon: LuLayoutDashboard,
    label: "Dashboard",
    url: "/",
  },

  {
    icon: LuCalendarDays,
    label: "Bookings",
    url: "/bookings",
  },

  {
    icon: LuFolderKanban,
    label: "Projects",
    url: "/projects",
  },

  {
    icon: LuMessageSquareQuote,
    label: "Testimonials",
    url: "/testimonials",
  },

  {
    icon: LuUsers,
    label: "Teams",
    url: "/teams",
  },
  {
    icon: LuFileText,
    label: "Quotes",
    url: "/quotes",
  },
];
