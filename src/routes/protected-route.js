import { Navigate } from "react-router-dom";
import { useUserAuth } from "../utils/auth/firebase-auth-context";
const ProtectedRoute = ({ children }) => {
  const { userFromFirebase } = useUserAuth();

  // console.log("Check user in Private: ", userFromFirebase);
  if (!userFromFirebase) {
    return <Navigate to="/blog" />;
  }
  return children;
};

export default ProtectedRoute;
