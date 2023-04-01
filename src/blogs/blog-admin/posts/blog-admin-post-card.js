import { IoSend } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { BsFillChatFill, BsFillBarChartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function PostCard({ post }) {
  return (
    <Link
      to={`edit/${post.id}`}
      className="px-6 py-4 flex bg-white mb-2 hover:shadow-md rounded-md"
    >
      <div className="w-20 h-20 border border-slate-200"></div>
      <div className="flex items-center justify-between w-full">
        <div className="px-5">
          <div className="text-gray-500 pb-5 text-lg">
            {post.title || "(Untitled)"}
          </div>
          <div className="flex">
            <div className="text-yellow-500">
              {(() => {
                switch (post.statusId) {
                  case 0:
                    return "Draft";
                  case 1:
                    return "Pending";
                  case 2:
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
        </div>
        <div>
          <div className="flex justify-end pb-5 text-gray-500">
            <IoSend className="w-10 h-10 hover:bg-gray-200 p-2 rounded-lg" />
            <RiDeleteBin2Fill className="w-10 h-10 hover:bg-gray-200 p-2 rounded-lg" />
            <AiFillEye className="w-10 h-10 hover:bg-gray-200 p-2 rounded-lg" />
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
    </Link>
  );
}
