import HomePostCard from "./home-post-card";
import { PostAPI } from "../apis/post-api";
import { useState, useEffect } from "react";
export default function HomePostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await PostAPI.getListPublic();
      setPosts(response);
    }
    getPosts();
  }, []);
  return (
    <>
      {posts.map((post, index) => {
        return (
          <HomePostCard
            authorImgUrl={post.author.photoUrl}
            authorName={post.author.displayName}
            preview={post.preview}
            title={post.title}
            publishedDate={post.publishedDate}
            permaLink={post.permalink}
            thumbnailUrl={post.thumbnailUrl}
            key={index}
          />
        );
      })}
    </>
  );
}
