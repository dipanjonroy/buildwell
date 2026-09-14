import { create } from "zustand";

type DashboardTypes = {
  openMenu: boolean;
  toggleMenu: () => void;
};

export const useDashboardStore = create<DashboardTypes>((set) => ({
  openMenu: true,
  toggleMenu: () =>
    set((state) => ({
      openMenu: !state.openMenu,
    })),
}));
