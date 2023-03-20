import BigTitle from "./big-title";
import { useUserAuth } from "../utils/auth/firebase-auth-context";
function BlogHome() {
  const { userFromFirebase } = useUserAuth();
  return (
    <>
      <div className="mx-auto max-w-screen-lg mt-16">
        <BigTitle />
      </div>
    </>
  );
}
export default BlogHome;
