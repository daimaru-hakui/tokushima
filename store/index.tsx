import { create } from "zustand";

type DrawerStore = {
  isDrawer: boolean;
  setIsDrawer: (payload: boolean) => void;
};

export const useDrawerStore = create<DrawerStore>((set) => ({
  isDrawer: true,
  setIsDrawer: (payload) => set(({ isDrawer: payload })),
}));
