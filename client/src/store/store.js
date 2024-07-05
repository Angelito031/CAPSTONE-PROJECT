import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,
  serverMessage: "",
  setUser: (user) => set({ user }),
  setIsAuth: (isAuth) => set({ isAuth }),
  setServerMessage: (serverMessage) => set({ serverMessage }),
  login: async (credentials) => {
    try {
      const response = await axios.post("/api/login", credentials);

      set({
        user: response.data.user,
        serverMessage: response.data.message,
        isAuth: true,
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  },
  logout: async () => {
    try {
      await axios.post("/api/logout");
      set({ user: null, isAuth: false });
    } catch (error) {
      console.error("Logout failed", error);
    }
  },
  register: async (userData) => {
    try {
      const response = await axios.post("/api/register", userData);
      set({ user: response.data.user, serverMessage: response.data.message });
    } catch (error) {
      console.error("Registration failed", error);
    }
  },
}));

const useJobStore = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),
  fetchJobs: async () => {
    try {
      const response = await axios.get("/api/jobs");
      set({ jobs: response.data });
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    }
  },
}));

const useUserStore = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  fetchUsers: async () => {
    try {
      const response = await axios.get("/api/users");
      set({ users: response.data });
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  },
}));

export { useAuthStore, useJobStore, useUserStore };
