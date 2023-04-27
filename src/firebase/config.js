import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, browserSessionPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhL13sM5C1TEDO3tJhkSvb7bB8uDyy6q4",
  authDomain: "blog-77224.firebaseapp.com",
  databaseURL: "https://blog-77224-default-rtdb.firebaseio.com",
  projectId: "blog-77224",
  storageBucket: "blog-77224.appspot.com",
  messagingSenderId: "697067615075",
  appId: "1:697067615075:web:262e64d2bb1be5bbdcd956",
  measurementId: "G-RRCHP468V0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: undefined,
});
export const storage = getStorage(app);