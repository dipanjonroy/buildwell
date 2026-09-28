import { create } from "zustand";

export type AlertType = "success" | "warning";

export type AlertInfoType = {
  id: number | null;
  type: AlertType;
  heading: string;
  text: string;
  submitBtnName: string;
  submitFn: () => void;
};

type AlertStore = {
  isAlertOpen: boolean;
  alertInfo: AlertInfoType | null;
  openAlert: (alertInfo: AlertInfoType) => void;
  closeAlert: () => void;
  clearAlert: () => void;
};

export const useAlertStore = create<AlertStore>((set) => ({
  isAlertOpen: false,
  alertInfo: null,

  openAlert: (alertInfo: AlertInfoType) =>
    set({
      isAlertOpen: true,
      alertInfo,
    }),

  closeAlert: () =>
    set({
      isAlertOpen: false,
    }),

  clearAlert: () =>
    set({
      alertInfo: null,
    }),
}));
