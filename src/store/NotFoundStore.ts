import { create } from "zustand";

type NotFoundProps = {
  isNotFound: boolean;
  setNotFound: (type:boolean) => void;
};

export const useNotFoundStore = create<NotFoundProps>((set) => ({
  isNotFound: false,
  setNotFound: (type:boolean) => set({ isNotFound: type }),
}));
