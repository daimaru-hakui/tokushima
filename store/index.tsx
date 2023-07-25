import { create } from "zustand";

type DrawerStore = {
  isDrawer: boolean;
  setIsDrawer: (payload: boolean) => void;
};

export const useDrawerStore = create<DrawerStore>((set) => ({
  isDrawer: true,
  setIsDrawer: (payload) => set(({ isDrawer: payload })),
}));

type SidebarStore = {
  isSidebar: boolean;
  setIsSidebar: (payload: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebar: false,
  setIsSidebar: (payload) => set(({ isSidebar: payload })),
}));
