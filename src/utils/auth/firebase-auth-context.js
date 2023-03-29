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
import { useAuthState } from "react-firebase-hooks/auth";

import { UserAPI } from "../../apis/user-api";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [userFromBackend, setUserFromBackend] = useState();
  const [user, loading, error] = useAuthState(auth);
  const userFromFirebase = user;
  async function logIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }
  async function logInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
    let response = await UserAPI.register();
    setUserFromBackend(response);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    localStorage.clear();
    return signOut(auth);
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUserFromFirebase(currentUser);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    async function setTokenToLocalStorage() {
      const token = await user.getIdToken();
      if (user) {
        localStorage.setItem("userToken", token);
      }
    }
    setTokenToLocalStorage();
  }, [user]);
  return (
    <userAuthContext.Provider
      value={{
        userFromFirebase,
        logIn,
        signUp,
        logOut,
        logInWithGoogle,
        loading,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
