import { createContext, useContext } from "react";
const Auth = createContext();
export const useAuth = () => useContext(Auth);
const AuthProvider = ({ children }) => {
  return <Auth.Provider value={{ name: "emon" }}>{children}</Auth.Provider>;
};

export default AuthProvider;
