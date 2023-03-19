import { NavLink } from "react-router-dom";
import { MdOutlineArticle } from "react-icons/md";
import SidebarButton from "./blog-content-sidebar-button";
export default function BlogContentSidebar() {
  return (
    <aside className="fixed left-0 bg-black/95 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full py-4 overflow-y-auto">
        <ul className="space-y-2">
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
              icon={MdOutlineArticle}
              text="Stats"
            />
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content/comments"
              icon={MdOutlineArticle}
              text="Comments"
            />
          </li>
          <li>
            <div className="flex justify-center m-4">
              <div className="h-[1px] w-48 bg-white"></div>
            </div>
          </li>
          <li>
            <SidebarButton
              to="/blog/my-content/about-you"
              icon={MdOutlineArticle}
              text="About you"
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
