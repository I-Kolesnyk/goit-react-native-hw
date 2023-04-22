import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, browserSessionPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5DGJODm8FsymWUW7AQVED8SsZR9Zr7UM",
  authDomain: "mobile-app-df30e.firebaseapp.com",
  projectId: "mobile-app-df30e",
  storageBucket: "mobile-app-df30e.appspot.com",
  messagingSenderId: "1013391820690",
  appId: "1:1013391820690:web:e000c724ad9a6a05c0634b",
  measurementId: "G-M0QGNCGQVF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: undefined,
});
export const storage = getStorage(app);