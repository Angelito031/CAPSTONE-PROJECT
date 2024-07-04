import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,
  setUser: (user) => set({ user }),
  setIsAuth: (isAuth) => set({ isAuth }),
  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const response = await axios.post("/api/login", credentials);
      set({ user: response.data.user, isAuth: true });
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      set({ isLoading: false });
    }
  },
  logout: async () => {
    set({ isLoading: true });
    try {
      await axios.post("/api/logout");
      set({ user: null, isAuth: false });
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

const useJobStore = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),
  fetchJobs: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("/api/jobs");
      set({ jobs: response.data });
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

const useUserStore = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  fetchUsers: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("/api/users");
      set({ users: response.data });
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

const useLoadingStore = create((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export { useAuthStore, useJobStore, useUserStore, useLoadingStore };
