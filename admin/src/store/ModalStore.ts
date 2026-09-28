import { create } from "zustand";
import { ReactNode } from "react";

type ModalAlign = "center" | "right" | "left";

interface ModalStoreProp {
  isModalOpen: boolean;
  modalId: string;
  modal: ReactNode | null;
  align?: ModalAlign;

  openModal: (modalId: string, modal: ReactNode, align?: ModalAlign) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStoreProp>((set) => ({
  isModalOpen: false,
  modalId: "",
  modal: null,
  align: "center",

  openModal: (modalId: string, modal: ReactNode, align?: ModalAlign) =>
    set({
      isModalOpen: true,
      modalId,
      modal,
      align,
    }),
  closeModal: () =>
    set({
      isModalOpen: false,
      modalId: "",
      modal: null,
      align: "center",
    }),
}));
