import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  auth,
  signInWithPopup,
  googleProvider,
} from "./firebase";
import customFetch from "../axios";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [userFromFirebase, setUserFromFirebase] = useState();
  const [userFromBackend, setUserFromBackend] = useState();
  async function logIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }
  async function logInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
    let response = await customFetch.post("/api/auth/register");
    setUserFromBackend(response.data);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserFromFirebase(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ userFromFirebase, logIn, signUp, logOut, logInWithGoogle }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
