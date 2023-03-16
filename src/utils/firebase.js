/* eslint-disable */
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrnG9TdKSTPi-d5hmLVHup65WKG3mLTYM",
  authDomain: "hotiendat-blog.firebaseapp.com",
  projectId: "hotiendat-blog",
  storageBucket: "hotiendat-blog.appspot.com",
  messagingSenderId: "1000144286668",
  appId: "1:1000144286668:web:9cf682a11de87cffda6369",
  measurementId: "G-5S40HYSXYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
};
