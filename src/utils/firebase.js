// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBxA-vpktMtwJY5OPKDmuMkDpbxQbLSYI",
  authDomain: "netflixgpt-92219.firebaseapp.com",
  projectId: "netflixgpt-92219",
  storageBucket: "netflixgpt-92219.appspot.com",
  messagingSenderId: "913307132364",
  appId: "1:913307132364:web:9542b8782f7c8ed59f3d69",
  measurementId: "G-MKB0EC23VT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
