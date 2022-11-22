// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyConsXDk58Nn5lQFwAGKDq7cGzgS8Zahg8",
  authDomain: "adoptme-a8128.firebaseapp.com",
  projectId: "adoptme-a8128",
  storageBucket: "adoptme-a8128.appspot.com",
  messagingSenderId: "639146606425",
  appId: "1:639146606425:web:af6444798ff6f899d21648",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
