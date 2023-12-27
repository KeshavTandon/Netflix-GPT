// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4MrtxFpFjim6omsGC1UPIIKJ5ykszpAo",
  authDomain: "netflixgpt-ff28d.firebaseapp.com",
  projectId: "netflixgpt-ff28d",
  storageBucket: "netflixgpt-ff28d.appspot.com",
  messagingSenderId: "393121642045",
  appId: "1:393121642045:web:a69db070d3527f0b16dc54",
  measurementId: "G-3KCG848TKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 