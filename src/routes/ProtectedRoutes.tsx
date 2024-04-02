import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuth = false;
  

  if (isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }
};

export default ProtectedRoutes;
