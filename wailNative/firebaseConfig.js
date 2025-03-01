// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace with your own)
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "wail-6a233.firebaseapp.com",
  projectId: "wail-6a233",
  storageBucket: "wail-6a233.firebasestorage.app",
  messagingSenderId: "792758132661",
  appId: "1:792758132661:web:8c71e0fef40548cd2cc3fc",
  measurementId: "G-0MTTJJWGKD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
