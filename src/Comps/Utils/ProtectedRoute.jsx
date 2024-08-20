import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";

const ProtectedRoute = () => {
  const { isAuthenticated, checkAuth } = useContext(AuthContext);
  const location = useLocation();

  // checkAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
