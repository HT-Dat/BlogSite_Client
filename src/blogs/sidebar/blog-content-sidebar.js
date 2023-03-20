import { NavLink } from "react-router-dom";
import { MdOutlineArticle, MdOutlineChat } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi2";
import { VscSettingsGear } from "react-icons/vsc";
import { AiOutlineMessage } from "react-icons/ai";
import SidebarButton from "./blog-content-sidebar-button";
import { useUserAuth } from "../../utils/auth/firebase-auth-context";
export default function BlogContentSidebar() {
  const { userFromFirebase } = useUserAuth();
  console.log(userFromFirebase.photoURL);
  return (
    <aside className="fixed left-0 bg-black/95 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full py-4 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <div className="flex justify-around px-16 pt-10 pb-10 text-white">
              <div>
                <p className="font-medium text-lg">
                  {userFromFirebase.displayName}
                </p>
                <p className="text-yellow-300">Welcome back!</p>
              </div>
              <div>
                <img
                  src={userFromFirebase.photoURL || userFromFirebase}
                  className="h-12 w-12 bg-white rounded-lg border-2"
                  referrerPolicy="no-referrer"
                ></img>
              </div>
            </div>
          </li>
          <li>
            <div className="flex justify-center m-8">
              <div className="h-[1px] w-48 bg-white"></div>
            </div>
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content"
              icon={MdOutlineArticle}
              text="Home"
            />
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content/stats"
              icon={HiOutlineChartBar}
              text="Stats"
            />
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content/comments"
              icon={AiOutlineMessage}
              text="Comments"
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
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
