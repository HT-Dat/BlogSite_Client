import HomeNavbar from "../home-navbar";
import BigTitle from "./big-title";
function BlogHome() {
  return (
    <>
      <HomeNavbar />
      <div className="mx-auto max-w-screen-lg">
        <BigTitle />
      </div>
    </>
  );
}
export default BlogHome;
