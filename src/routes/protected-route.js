import { Navigate } from "react-router-dom";
import { useUserAuth } from "../utils/auth/firebase-auth-context";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/blog" />;
  }
  return children;
};

export default ProtectedRoute;
