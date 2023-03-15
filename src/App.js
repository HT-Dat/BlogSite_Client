import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import PageRoutes from "./routes/PageRoutes";
function App() {
  // eslint-disable-next-line
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="App">
      <PageRoutes loading={loading} />
    </div>
  );
}

export default App;
