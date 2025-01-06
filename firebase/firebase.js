import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app (only if no app is already initialized)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
