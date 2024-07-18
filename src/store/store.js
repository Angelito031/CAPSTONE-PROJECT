import { create } from "zustand";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db }  from "../firebase/firebase.js"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,
  currentUser: null,
  setUser: (user) => set({ user }),
  setIsAuth: (isAuth) => set({ isAuth }),
  setCurrentUser: (currentUser) => set({ currentUser }),
  login: async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const userRef = doc(db, "users", userCredential.user.uid);
      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();

      set({ user: userData, isAuth: true,  currentUser: auth.currentUser.uid });
    } catch (error) {
      console.error("Login failed", error.message, error.code);
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null, isAuth: false,  currentUser: null });
    } catch (error) {
      console.error("Logout failed", error.message, error.code);
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
  isFetching: false,
  setUsers: (users) => set({ users }),
  fetchUsers: async () => {
    set({ isFetching: true });
    try {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map(doc => doc.data()).filter(user => user.role !== 'SADMIN' && user.role !== 'ADMIN');

      console.log(usersList);
      set({ users: usersList, isFetching: false });
    } catch (error) {
      console.error("Failed to fetch users", error.message, error.code);
      set({ isFetching: false });
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
