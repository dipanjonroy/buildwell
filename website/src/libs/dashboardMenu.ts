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
    url: "/dashboard",
  },

  {
    icon: LuCalendarDays,
    label: "Bookings",
    url: "/dashboard/bookings",
  },

  {
    icon: LuFolderKanban,
    label: "Projects",
    url: "/dashboard/projects",
  },

  {
    icon: LuMessageSquareQuote,
    label: "Testimonials",
    url: "/dashboard/testimonials",
  },

  {
    icon: LuUsers,
    label: "Teams",
    url: "/dashboard/teams",
  },
  {
    icon: LuFileText,
    label: "Quotes",
    url: "/dashboard/quotes",
  },
];
