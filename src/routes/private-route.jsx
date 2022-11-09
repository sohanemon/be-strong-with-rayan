import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-provider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading) return <h1>loading</h1>;
  if (user?.uid) return children;

  return <Navigate to={"/login"} state={pathname} replace></Navigate>;
};

export default PrivateRoute;
