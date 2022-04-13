import { initializeApp } from "firebase/app";
​​import {
​​  GoogleAuthProvider,
​​  getAuth,
​​  signInWithPopup,
​​  signInWithEmailAndPassword,
​​  createUserWithEmailAndPassword,
​​  sendPasswordResetEmail,
​​  signOut,
​​} from "firebase/auth";
​​import {
​​  getFirestore,
​​  query,
​​  getDocs,
​​  collection,
​​  where,
​​  addDoc,
​​} from "firebase/firestore";

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
const app = ​​initializeApp(firebaseConfig);
​​const auth = getAuth(app);
​​const db = getFirestore(app);