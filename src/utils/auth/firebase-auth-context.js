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
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      if (user) {
        // User is signed in or the token was refreshed
        const token = await user.getIdToken();
        localStorage.setItem("firebase_auth_token", token);
      } else {
        // User is signed out
        localStorage.removeItem("firebase_auth_token");
      }
    });
    // Clean up the observer when the component is unmounted

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const response = await UserAPI.register();
        setUserFromBackend(response);
      } else {
        // User is signed out
        setUserFromBackend(null);
      }
    });
    // Clean up the observer when the component is unmounted

    return () => {
      unsubscribe();
    };
  }, []);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUserFromFirebase(currentUser);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  return (
    <userAuthContext.Provider
      value={{
        userFromFirebase,
        userFromBackend,
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
