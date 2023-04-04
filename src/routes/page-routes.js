import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "../login";
import LoadingIndicator from "../loading-indicator";
// import Home from "../home";
// import BlogHome from "../blogs/blog-home";
import { UserAuthContextProvider } from "../utils/auth/firebase-auth-context";
import ProtectedRoute from "./protected-route";
import SpecialRoute from "./special-route";
import HomeNavbar from "../navbar/home-navbar";
// import BlogAdminIndex from "../blogs/blog-admin/blog-admin-index";
// import BlogAdminPosts from "../blogs/blog-admin/posts/blog-admin-posts";
// import BlogAdminHome from "../blogs/blog-admin/blog-admin-home";
// import BlogAdminAboutYou from "../blogs/blog-admin/blog-admin-about-you";
// import BlogAdminComments from "../blogs/blog-admin/blog-admin-comments";
// import BlogAdminStats from "../blogs/blog-admin/blog-admin-stats";
// import BlogAdminEditPost from "../blogs/blog-admin/posts/blog-admin-edit-post";
const Login = lazy(() => import("../login"));

const Home = lazy(() => import("../home"));
const BlogHome = lazy(() => import("../blogs/blog-home"));
const BlogAdminIndex = lazy(() =>
  import("../blogs/blog-admin/blog-admin-index")
);
const BlogAdminPosts = lazy(() =>
  import("../blogs/blog-admin/posts/blog-admin-posts")
);
const BlogAdminHome = lazy(() => import("../blogs/blog-admin/blog-admin-home"));
const BlogAdminAboutYou = lazy(() =>
  import("../blogs/blog-admin/blog-admin-about-you")
);
const BlogAdminComments = lazy(() =>
  import("../blogs/blog-admin/blog-admin-comments")
);
const BlogAdminStats = lazy(() =>
  import("../blogs/blog-admin/blog-admin-stats")
);
const BlogAdminEditPost = lazy(() =>
  import("../blogs/blog-admin/posts/blog-admin-edit-post")
);
const PostPage = lazy(() => import("../blogs/post-page"));
function PageRoutes({ loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <>
      <BrowserRouter>
        <UserAuthContextProvider>
          <HomeNavbar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingIndicator />}>
                  <Home />
                </Suspense>
              }
            />
            <Route path="blog">
              <Route
                index
                element={
                  <Suspense fallback={<LoadingIndicator />}>
                    <BlogHome />
                  </Suspense>
                }
              />
              <Route
                path=":postPermalink"
                element={
                  <Suspense fallback={<LoadingIndicator />}>
                    <PostPage />
                  </Suspense>
                }
              />
              <Route
                path="login"
                element={
                  <Suspense fallback={<LoadingIndicator />}>
                    <SpecialRoute>
                      <Login />
                    </SpecialRoute>
                  </Suspense>
                }
              />

              <Route
                path="my-content"
                element={
                  <Suspense fallback={<LoadingIndicator />}>
                    <ProtectedRoute>
                      <BlogAdminIndex />
                    </ProtectedRoute>
                  </Suspense>
                }
              >
                <Route
                  index
                  element={
                    <Suspense fallback={<LoadingIndicator />}>
                      <BlogAdminHome />
                    </Suspense>
                  }
                />
                <Route
                  index
                  path="posts"
                  element={
                    <Suspense fallback={<LoadingIndicator />}>
                      <BlogAdminPosts />
                    </Suspense>
                  }
                />

                <Route
                  path="posts/edit/:postId"
                  element={
                    <Suspense fallback={<LoadingIndicator />}>
                      <BlogAdminEditPost />
                    </Suspense>
                  }
                />
                <Route
                  path="comments"
                  element={
                    <Suspense fallback={<LoadingIndicator />}>
                      <BlogAdminComments />
                    </Suspense>
                  }
                />
                <Route
                  path="stats"
                  element={
                    <Suspense fallback={<LoadingIndicator />}>
                      <BlogAdminStats />
                    </Suspense>
                  }
                />
                <Route
                  path="about-you"
                  element={
                    <Suspense fallback={<LoadingIndicator />}>
                      <BlogAdminAboutYou />
                    </Suspense>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}
export default PageRoutes;
