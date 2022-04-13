// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);
