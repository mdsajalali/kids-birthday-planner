import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login
  const logIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign out
  const logOut = () => {
    setLoading(true);

    signOut(auth);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //   manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    logOut,
    logIn,
    loading,
    googleLogin,
    githubLogin,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
