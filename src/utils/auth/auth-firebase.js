import {
  auth,
  googleProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "../firebase";
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
    const authUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(await auth.currentUser.getIdToken());
    const a = await customFetch.get("/api/auth/verify-access");
    console.log(a);
  } catch (err) {
    console.error(err);
  }
};
const logout = () => {
  signOut(auth);
};
export { signInWithGoogle, logInWithEmailAndPassword, logout };
