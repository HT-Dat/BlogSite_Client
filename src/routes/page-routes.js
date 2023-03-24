import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";
import LoadingIndicator from "../loading-indicator";
import Home from "../home";
import BlogHome from "../blogs/blog-home";
import { UserAuthContextProvider } from "../utils/auth/firebase-auth-context";
import ProtectedRoute from "./protected-route";
import SpecialRoute from "./special-route";
import HomeNavbar from "../navbar/home-navbar";
import BlogAdminIndex from "../blogs/blog-admin/blog-admin-index";
import BlogAdminPosts from "../blogs/blog-admin/posts/blog-admin-posts";
import BlogAdminHome from "../blogs/blog-admin/blog-admin-home";
import BlogAdminAboutYou from "../blogs/blog-admin/blog-admin-about-you";
import BlogAdminComments from "../blogs/blog-admin/blog-admin-comments";
import BlogAdminStats from "../blogs/blog-admin/blog-admin-stats";
import BlogAdminEditPost from "../blogs/blog-admin/posts/blog-admin-edit-post";
function PageRoutes({ loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <>
      <BrowserRouter>
        <UserAuthContextProvider>
          <HomeNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog">
              <Route index element={<BlogHome />} />
              <Route
                path="login"
                element={
                  <SpecialRoute>
                    <Login />
                  </SpecialRoute>
                }
              />
              <Route
                path="register"
                element={
                  <SpecialRoute>
                    <Login />
                  </SpecialRoute>
                }
              />
              <Route
                path="my-content"
                element={
                  <ProtectedRoute>
                    <BlogAdminIndex />
                  </ProtectedRoute>
                }
              >
                <Route index element={<BlogAdminHome />} />
                <Route path="posts" element={<BlogAdminPosts />}>
                  {/* <Route index /> */}
                  <Route path="edit/:postId" element={<BlogAdminEditPost />} />
                </Route>

                <Route path="comments" element={<BlogAdminComments />} />
                <Route path="stats" element={<BlogAdminStats />} />
                <Route path="about-you" element={<BlogAdminAboutYou />} />
              </Route>
            </Route>
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}
export default PageRoutes;
