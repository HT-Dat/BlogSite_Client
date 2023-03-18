import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../routes/firebase-auth-context";
const SpecialRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (user) {
    console.log("first");
    return <Navigate to="/blog" />;
  }
  return children;
};

export default SpecialRoute;
