import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: {
        isAuthenticated: true
    },

    setUser: (user) => set({ user : user }),
}));

export default useUserStore;