import { useEffect, useState } from "react";
import BigTitle from "./big-title";
import { PostAPI } from "../apis/post-api";
import { useParams } from "react-router-dom";
import "../ckeditor-data.css";
import DOMPurify from "dompurify";
import HomeFooter from "./home-footer";
export default function PostPage() {
  const { postPermalink } = useParams();
  const [post, setPost] = useState({
    content: "",
  });
  useEffect(() => {
    async function getPublicPostByPermalink() {
      const response = await PostAPI.getPublic(postPermalink);
      console.log(response);
      response.content = DOMPurify.sanitize(response.content);
      setPost(response);
    }
    getPublicPostByPermalink();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-screen-lg mt-16">
        <div className="inline-block font-serif font-extrabold text-6xl">
          {post.title}
        </div>
        <div className="flex ">
          <div className="w-9/12">
            <div className="flex items-center gap-3 pt-10">
              <img
                src={post.author?.photoUrl}
                className="h-12 w-12 border-gray-400 rounded-full border-2"
                referrerPolicy="no-referrer"
              ></img>
              <div className="text-lg">{post.author?.displayName}</div>
            </div>
            <div className="w-[700px] ck-content float-right prose-lg">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
          <div className="w-3/12 flex justify-end">
            <div className="flex flex-col">
              <p className="w-fit ml-auto font-medium text-lg ">
                Filter Posts By Tag
              </p>
              <p className="w-fit ml-auto text-sm text-gray-500 pb-3">
                (Not yet working)
              </p>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                .NET
              </div>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                DOCKER
              </div>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                CKEDITOR
              </div>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                REACT
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}
