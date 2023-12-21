import { create } from "zustand";

const useStore = create((set) => ({
  // for desktop
  hoveredKey: null,
  handleHover: (key) => set({ hoveredKey: key }),
  handleLeave: () => set({ hoveredKey: null }),
}));

export default useStore;
