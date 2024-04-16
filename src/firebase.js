// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instagram-clone-f8494.firebaseapp.com",
  projectId: "instagram-clone-f8494",
  storageBucket: "instagram-clone-f8494.appspot.com",
  messagingSenderId: "232772535033",
  appId: "1:232772535033:web:828d603d3df9c8a4d11828"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);