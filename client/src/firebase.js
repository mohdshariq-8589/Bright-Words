// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-796f6.firebaseapp.com",
  projectId: "blog-app-796f6",
  storageBucket: "blog-app-796f6.firebasestorage.app",
  messagingSenderId: "149407425704",
  appId: "1:149407425704:web:a982325a067fe708d78e9d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
