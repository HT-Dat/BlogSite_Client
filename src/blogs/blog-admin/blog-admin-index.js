import BlogContentSidebar from "./sidebar/blog-admin-sidebar";
export default function BlogAdminIndex() {
  return (
    <>
      <div className="pt-[68px] bg-gray-100">
        <BlogContentSidebar />
        <div className="pl-80 h-[2000px]"></div>
      </div>
    </>
  );
}
