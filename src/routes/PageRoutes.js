import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import LoadingIndicator from "../LoadingIndicator";
function PageRoutes({ loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default PageRoutes;
