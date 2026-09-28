import { create } from "zustand";

export type ToastProp = {
  id: number;
  type: "success" | "error" | "warning";
  msg: string;
};

type ToastStoreProp = {
  toasts: ToastProp[];
  addToast: (toast: ToastProp) => void;
  removeToast: (id: number) => void;
};

export const useToastStore = create<ToastStoreProp>((set) => ({
  toasts: [],
  addToast: (toast: ToastProp) =>
    set((state) => ({
      toasts: [...state.toasts, toast],
    })),
  removeToast: (id: number) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
