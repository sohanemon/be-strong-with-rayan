import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth-provider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { pathname } = useLocation();
  if (isLoading) return <h1 className='text-9xl'>loading</h1>;
  if (user?.email) return children;
  return <Navigate to={"/login"} state={pathname} replace></Navigate>;
};

export default PrivateRoute;
