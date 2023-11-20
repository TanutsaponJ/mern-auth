// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-55d95.firebaseapp.com",
  projectId: "mern-auth-55d95",
  storageBucket: "mern-auth-55d95.appspot.com",
  messagingSenderId: "400807436105",
  appId: "1:400807436105:web:84411b90db2608db5f4498",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
