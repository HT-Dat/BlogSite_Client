import { IoSend } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { BsFillChatFill, BsFillBarChartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../../utils/auth/firebase-auth-context";
import { PostAPI } from "../../../apis/post-api";
export default function PostCard({ post, setTriggerReload }) {
  const DRAFT = 0;
  const PENDING = 1;
  const PUBLISHED = 2;

  const { userFromBackend } = useUserAuth();
  async function deletePost() {
    const response = await PostAPI.delete(post.id);
    setTriggerReload(true);
  }
  async function publishPostData() {
    const postObject = {
      id: post.id,
      statusId: userFromBackend.isAdmin ? PUBLISHED : PENDING,
    };
    const response = await PostAPI.savePost(postObject, post.id);
    setTriggerReload(true);
  }
  return (
    <div className="px-6 py-4 flex bg-white mb-2 hover:shadow-md rounded-md">
      <Link
        to={`edit/${post.id}`}
        className="w-20 h-20 border border-slate-200 rounded-md"
      >
        {post.thumbnailUrl ? (
          <img src={post.thumbnailUrl} className="object-cover h-full" />
        ) : (
          <div className="text-5xl font-serif font-bold h-full flex items-center justify-center text-gray-500">
            {post.title.charAt(0) || "U"}
          </div>
        )}
      </Link>
      <div className="flex items-center justify-between w-full">
        <Link to={`edit/${post.id}`} className="px-5">
          <div className="text-gray-500 pb-5 text-lg">
            {post.title || "(Untitled)"}
          </div>
          <div className="flex">
            <div className="text-yellow-500">
              {(() => {
                switch (post.statusId) {
                  case DRAFT:
                    return "Draft";
                  case PENDING:
                    return "Pending";
                  case PUBLISHED:
                    return "Published";
                }

                return date.toLocaleDateString("en-US", options);
              })()}
            </div>
            <span className="px-2"> • </span>
            <div className="text-gray-700">
              {(() => {
                var options = {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                };

                let date = new Date(post.updatedDate + "Z");
                return date.toLocaleDateString("en-US", options);
              })()}
            </div>
          </div>
        </Link>
        <div>
          <div className="flex justify-end pb-5 text-gray-500 cursor-pointer">
            <IoSend
              className="w-10 h-10 hover:bg-gray-200 p-2 rounded-lg"
              onClick={publishPostData}
            />
            <RiDeleteBin2Fill
              className="w-10 h-10 hover:bg-gray-200 p-2 rounded-lg"
              onClick={deletePost}
            />
            <Link to={`edit/${post.id}`}>
              <AiFillEye className="w-10 h-10 hover:bg-gray-200 p-2 rounded-lg" />
            </Link>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center">
              <p className="text-lg text-gray-700">0</p>
              <BsFillBarChartFill className="ml-1 text-gray-500" />
            </div>
            <div className="flex items-center px-3">
              <p className="text-lg text-gray-700">0</p>
              <BsFillChatFill className="ml-1 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
