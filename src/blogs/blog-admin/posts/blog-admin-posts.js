import { useEffect, useState } from "react";
import { PostAPI } from "../../../apis/post-api";
import PostCard from "./blog-admin-post-card";
import NoPostsImage from "../../../assets/pencilpotscissorsdesk.png";

export default function BlogAdminPosts() {
  const [posts, setPosts] = useState([]);
  const [triggerReloadPostList, setTriggerReloadPostList] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await PostAPI.getListAdmin();
      setPosts(response);
    }

    if (triggerReloadPostList) {
      getPosts();
      setTriggerReloadPostList(false);
    }
  }, [triggerReloadPostList]);
  return (
    <div className="bg-slate-100 min-h-full">
      <div className="max-w-5xl mx-auto py-5">
        <div className="pt-10">
          {posts.length === 0 ? (
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <img src={NoPostsImage} className="w-32 h-32 m-10 saturate-0" />
                <p className="text-lg">No posts</p>
                <p className="text-gray-600">
                  Posts you create will show up here
                </p>
              </div>
            </div>
          ) : (
            posts.map((post, index) => {
              return (
                <PostCard
                  post={post}
                  setTriggerReload={setTriggerReloadPostList}
                  key={index}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
