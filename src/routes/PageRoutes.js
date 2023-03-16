import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import LoadingIndicator from "../LoadingIndicator";
import Home from "../home";
function PageRoutes({ loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog">
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default PageRoutes;
