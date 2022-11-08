import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../firebase/init";
const auth = getAuth(app);

const Auth = createContext();
export const useAuth = () => useContext(Auth);
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    });
    return () => unSubscriber();
  }, []);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };
  return (
    <Auth.Provider value={{ isLoading, user, googleLogin, logOut }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
