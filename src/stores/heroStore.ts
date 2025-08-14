import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type HeroStore = {
  hasVisited: boolean;
  setHasVisited: (hasVisited: boolean) => void;
};

export const useHeroStore = create<HeroStore>()(
  persist(
    (set, get) => ({
      hasVisited: false,
      setHasVisited: (hasVisited: boolean) => set({ hasVisited }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
