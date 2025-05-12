// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8dnYOFXA5WQixDw96UzgZt-SQAtRa8J0",
  authDomain: "dev-market-c47d3.firebaseapp.com",
  projectId: "dev-market-c47d3",
  storageBucket: "dev-market-c47d3.firebasestorage.app",
  messagingSenderId: "710743835195",
  appId: "1:710743835195:web:853280f52a773e79a8d21e",
  measurementId: "G-BE3SV90WNJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
