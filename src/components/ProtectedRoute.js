import { Navigate } from "react-router-dom";
import { checkLoginState } from "../utils/auth/checkLoginState";

export const ProtectedRoute = ({ element }) => {
  const isLogged = checkLoginState();
  return isLogged ? element : <Navigate to="/login" />;
};
