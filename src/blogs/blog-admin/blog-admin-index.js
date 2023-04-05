import { Suspense } from "react";
import LoadingIndicator from "../../loading-indicator";
import BlogAdminSidebar from "./sidebar/blog-admin-sidebar";
import { Outlet } from "react-router-dom";
export default function BlogAdminIndex() {
  return (
    <>
      <div className="h-screen">
        <div className="pt-[68px] h-full">
          <BlogAdminSidebar />
          <div className="lg:pl-80 h-full">
            <Suspense fallback={<LoadingIndicator />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
