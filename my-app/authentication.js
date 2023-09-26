// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXjA5voRRbAQVRAqXYSXVewSoMf_m-JM",
  authDomain: "cvhs-game-dev-club.firebaseapp.com",
  projectId: "cvhs-game-dev-club",
  storageBucket: "cvhs-game-dev-club.appspot.com",
  messagingSenderId: "905909751027",
  appId: "1:905909751027:web:817968853aca8e123e7b86",
  measurementId: "G-PXRT39WQLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication instance
const auth = getAuth(app);

export default auth;