import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import PageRoutes from "./routes/PageRoutes";
import "./App.css";

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
