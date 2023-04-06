import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/auth/firebase";
import PageRoutes from "./routes/page-routes";
function App() {
  const [user, loading, error] = useAuthState(auth);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div className="App">
      <PageRoutes loading={loading} />
    </div>
  );
}

export default App;
