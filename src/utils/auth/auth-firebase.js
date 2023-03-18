import {
  auth,
  googleProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "./firebase";
import customFetch from "../axios";

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const a = await customFetch.get("/api/auth/verify-access");
    alert(a.data.status);
  } catch (err) {
    console.error(err);
  }
};
const logout = () => {
  signOut(auth);
};
export { signInWithGoogle, logInWithEmailAndPassword, logout };
