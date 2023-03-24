import BlogContentSidebar from "./sidebar/blog-admin-sidebar";
import { Outlet } from "react-router-dom";
export default function BlogAdminIndex() {
  return (
    <>
      <div className="h-screen">
        <div className="pt-[68px] h-full">
          <BlogContentSidebar />
          <div className="pl-80 h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
