import { create } from "zustand";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export type TFilter = "all" | "completed" | "incomplete";

export type TodoStore = {
  filter: TFilter;
  setFilter: (filter: TFilter) => void;
};

export const useStore = create<TodoStore>((set) => ({
  filter: "all",
  setFilter: (filter) => set({ filter }),
}));
