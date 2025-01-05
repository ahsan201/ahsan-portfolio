// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrBMQXRrNjrCbSUDGPFP_9M3sGN4V4_wk",
  authDomain: "ahsan-portfolio-f2dcc.firebaseapp.com",
  projectId: "ahsan-portfolio-f2dcc",
  storageBucket: "ahsan-portfolio-f2dcc.firebasestorage.app",
  messagingSenderId: "846697572674",
  appId: "1:846697572674:web:3e31c69f82e0e88eb040db",
  measurementId: "G-4XSJQ0F7FN",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
