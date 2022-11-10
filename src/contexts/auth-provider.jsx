import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
      setIsLoading(false);
      if (user?.uid) {
        setUser(user);
        axios
          .post(
            `${process.env.REACT_APP_server}/jwt`,
            {},
            {
              headers: {
                authorization: user.email,
              },
            }
          )
          .then((res) =>
            localStorage.setItem(
              "be-strong-token",
              JSON.stringify({ token: res.data })
            )
          );
      }
    });
    return () => unSubscriber();
  }, []);

  const googleLogin = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const signUp = async (data) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, data.email, data.password).then(
      () => {
        updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: data.photoURL,
        });
      }
    );
  };
  const signIn = (data) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };
  return (
    <Auth.Provider
      value={{ isLoading, user, googleLogin, signUp, signIn, logOut }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
