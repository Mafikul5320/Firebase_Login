// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxiKC1yuXUslXGi1TptsWefWaRkiDvfxc",
  authDomain: "fir-project-460c4.firebaseapp.com",
  projectId: "fir-project-460c4",
  storageBucket: "fir-project-460c4.firebasestorage.app",
  messagingSenderId: "41143432393",
  appId: "1:41143432393:web:e166f3c33a7a2b9aba4918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)