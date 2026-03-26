import { create } from 'zustand'

const useLoaderFullScreenStore = create((set) => ({
    isLoading: false,
    actionList: [],
    setIsLoading: (value) => set({ isLoading: value }),
    show: (action) => set((state) => ({ actionList: [...state.actionList, action], isLoading: true })),
    hide: (action) => set((state) => ({ actionList: state.actionList.filter((a) => a !== action), isLoading: state.actionList.length > 1 }))
}));

export default useLoaderFullScreenStore;