import { create } from "zustand";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth, db }  from "../firebase/firebase.js"
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";

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
      if(auth.currentUser.emailVerified){
        set({ user: userData, isAuth: true,  currentUser: auth.currentUser.uid });
      }else{
        alert("Please verify your email first");
      }
      
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
      await sendEmailVerification(auth.currentUser);
      const userId = userCredential.user.uid;
  
      await setDoc(doc(db, "users", userId), {
        firstname,
        lastname,
        email,
        department: "College of Engineering and Technology",
        role: "STUDENT",
        uid: userId,
        resume: {}
      });
  
      await setDoc(doc(db, "usersChats", userId), {
        chats: []
      });
      alert("Email Verification has been sent to your email address");
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

      set({ users: usersList, isFetching: false });
    } catch (error) {
      console.error("Failed to fetch users", error.message, error.code);
      set({ isFetching: false });
    }
  },
  updateUser: async (userDetails) => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
    // Update user details in Firestore
    await updateDoc(userRef, { ...userDetails });

  } catch (error) {
    console.error("Failed to update user", error.message, error.code);
    // Handle specific error cases if needed
    if (error.code === "auth/requires-recent-login") {
      console.error("The user needs to re-authenticate before this operation can be executed.");
    }
  }
  },
  updateResume: async (resume) => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      // Update user details in Firestore
      await updateDoc(userRef, { resume });
    } catch (error) {
      console.error("Failed to update user", error.message, error.code);
      // Handle specific error cases if needed
      if (error.code === "auth/requires-recent-login") {
        console.error("The user needs to re-authenticate before this operation can be executed.");
      }
    }
  }
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
