import { create } from "zustand";

type DashboardTypes = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const useDashboardStore = create<DashboardTypes>((set) => ({
  isMenuOpen: false,
  openMenu: () =>
    set(() => ({
      isMenuOpen: true,
    })),

  closeMenu: () =>
    set(() => ({
      isMenuOpen: false,
    })),
}));
