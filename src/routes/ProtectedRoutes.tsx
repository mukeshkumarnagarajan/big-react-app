import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const authContext = useAuth();

  if (authContext.isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }
};

export default ProtectedRoutes;
