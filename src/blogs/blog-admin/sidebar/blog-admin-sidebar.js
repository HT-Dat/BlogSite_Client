import { MdOutlineArticle, MdOutlineChat } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi2";
import { VscSettingsGear } from "react-icons/vsc";
import { AiOutlineMessage, AiOutlineAntDesign } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import SidebarButton from "./blog-admin-sidebar-button";
import { useUserAuth } from "../../../utils/auth/firebase-auth-context";
import { PostAPI } from "../../../apis/post-api";
import { useNavigate } from "react-router-dom";

export default function BlogAdminSidebar() {
  const { userFromFirebase } = useUserAuth();
  const navigate = useNavigate();
  async function handleNewPost() {
    const createdPost = await PostAPI.newPost();
    navigate(`/blog/my-content/posts/edit/${createdPost.id}`);
  }
  return (
    <aside className="fixed left-0 bg-black/95 w-80 h-screen transition-transform -translate-x-full lg:translate-x-0 z-50">
      <div className="h-full py-4 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <div className="flex justify-around px-16 pt-10 pb-5 text-white">
              <div className="">
                <p className="font-medium text-lg max-w-[130px]">
                  {userFromFirebase.displayName}
                </p>
                <p className="text-yellow-300">Welcome back!</p>
              </div>
              <div className="min-w-fit">
                <img
                  src={userFromFirebase.photoURL || userFromFirebase}
                  className="h-12 w-12 bg-white rounded-lg border-2"
                  referrerPolicy="no-referrer"
                ></img>
              </div>
            </div>
          </li>
          <li>
            <button
              className="flex items-center py-3 text-white rounded-lg hover:bg-black/100 transition-all ease-in duration-150 w-full"
              onClick={handleNewPost}
            >
              <div className="w-1 h-10 rounded-r-sm"></div>
              <div className="p-2 ml-14 rounded-lg ">
                <BsPlusLg className="w-6 h-6" />
              </div>
              <span className="ml-4 text-lg ">New post</span>
            </button>
          </li>
          <li>
            <div className="flex justify-center m-8">
              <div className="h-[1px] w-48 bg-white"></div>
            </div>
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content"
              icon={AiOutlineAntDesign}
              text="Home"
              isOnlyEnd={true}
            />
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content/posts"
              icon={MdOutlineArticle}
              text="Post"
              isOnlyEnd={false}
            />
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content/stats"
              icon={HiOutlineChartBar}
              text="Stats"
              isOnlyEnd={false}
            />
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content/comments"
              icon={AiOutlineMessage}
              text="Comments"
              isOnlyEnd={false}
            />
          </li>
          <li>
            <div className="flex justify-center m-8">
              <div className="h-[1px] w-48 bg-white"></div>
            </div>
          </li>
          <li className="h-full">
            <SidebarButton
              to="/blog/my-content/about-you"
              icon={VscSettingsGear}
              text="About you"
              isOnlyEnd={false}
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
