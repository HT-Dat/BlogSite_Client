import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import LoadingIndicator from "../LoadingIndicator";
import Home from "../Home";
function PageRoutes({ loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default PageRoutes;
