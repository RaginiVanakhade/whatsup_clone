
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT-7Voi1530xJxkv9EkBhzP0tCsSTeu8s",
  authDomain: "wp-clone-72209.firebaseapp.com",
  projectId: "wp-clone-72209",
  storageBucket: "wp-clone-72209.firebasestorage.app",
  messagingSenderId: "160561232378",
  appId: "1:160561232378:web:a2bf8b19690bc9e1d2cc43",
  measurementId: "G-HJVT51ZQD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);