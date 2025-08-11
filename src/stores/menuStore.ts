import { create } from "zustand";

interface MenuStore {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
	open: false,
	setOpen: (open) => set({ open }),
}));
