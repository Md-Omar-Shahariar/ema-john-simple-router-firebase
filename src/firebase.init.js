// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6BZ8HTVL_xz10_WTDuUpiFYjzzVDG8z0",
  authDomain: "ema-john-firebase-56b69.firebaseapp.com",
  projectId: "ema-john-firebase-56b69",
  storageBucket: "ema-john-firebase-56b69.appspot.com",
  messagingSenderId: "747124296495",
  appId: "1:747124296495:web:0c63f90c2555083bf02fda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
