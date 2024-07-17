import { create } from "zustand";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db }  from "../firebase/firebase.js"
import { doc, getDoc, setDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,
  setUser: (user) => set({ user }),
  setIsAuth: (isAuth) => set({ isAuth }),
  login: async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const userRef = doc(db, "users", userCredential.user.uid);
      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();

      set({ user: userData, isAuth: true });
    } catch (error) {
      console.error("Login failed", error.message);
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null, isAuth: false });
    } catch (error) {
      console.error("Logout failed", error);
    }
  },
  register: async (userDetails) => {
    console.log(userDetails);
    const { email, password, firstname, lastname } = userDetails;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
  
      console.log("User created with UID:", userId);
  
      await setDoc(doc(db, "users", userId), {
        firstname,
        lastname,
        email,
        role: "STUDENT",
        uid: userId,
        resume: {}
      });
  
      await setDoc(doc(db, "usersChats", userId), {
        chats: []
      });
  
    } catch (error) {
      console.error("Registration failed", error.message, error.code);
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

const useSearchStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (search) => set({ searchQuery: search }),
  search: async (query) => {
    try {
      const response = await axios.get(
        `/api/jobs?search=${encodeURIComponent(query)}`,
      );
      set({ jobs: response.data });
    } catch (error) {
      console.error("Failed to search jobs", error);
    }
  },
}));

export { useAuthStore, useJobStore, useUserStore, useSearchStore };
