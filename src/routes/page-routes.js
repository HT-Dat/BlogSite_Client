import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";
import LoadingIndicator from "../loading-indicator";
import Home from "../home";
import BlogHome from "../blogs/blog-home";
function PageRoutes({ loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog">
          <Route index element={<BlogHome />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default PageRoutes;
