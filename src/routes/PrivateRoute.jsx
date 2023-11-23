import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <p className="text-center my-10 text-2xl">Loading...</p>;
  }

  if (user) {
    return children;
  }
  // state come to location and location 7 number line console log then details locations property
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
