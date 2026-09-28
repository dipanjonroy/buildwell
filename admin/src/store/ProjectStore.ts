import { create } from "zustand";

export type ProjectCategoryProp =
  | "all"
  | "residential"
  | "commercial"
  | "renovation"
  | "roof repair";
export type ProjectStatusProp = "all" | "completed" | "progress" | "pending";
export type ProjectShortByProp = "newest" | "this year" | "last year";

type ProjectFilterType = {
  searchKeyword: string;
  category: ProjectCategoryProp;
  status: ProjectStatusProp;
  sortBy: ProjectShortByProp;
};

type ProjectStoreProp = {
  selectedProjectId: string;
  setSelectedProjectId: (id: string) => void;

  projectFilterOptions: ProjectFilterType;
  changeProjctFilterOption: <K extends keyof ProjectFilterType>(
    key: K,
    value: ProjectFilterType[K],
  ) => void;

  view: "grid" | "list";
  setView: (val: "grid" | "list") => void;
};

export const useProjectStore = create<ProjectStoreProp>((set) => ({
  selectedProjectId: "",
  setSelectedProjectId: (id) => set({ selectedProjectId: id }),

  projectFilterOptions: {
    searchKeyword: "",
    category: "all",
    status: "all",
    sortBy: "newest",
  },
  changeProjctFilterOption: (key, value) =>
    set((state) => ({
      projectFilterOptions: {
        ...state.projectFilterOptions,
        [key]: value,
      },
    })),

  view: "grid",

  setView: (val) =>
    set({
      view: val,
    }),
}));
