import { IoSend } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { PostAPI } from "../../../apis/post-api";
import AdminEditor from "./editor/blog-admin-editor";
import EditorSidebar from "./blog-admin-edit-post-sidebar";
import { useUserAuth } from "../../../utils/auth/firebase-auth-context";
export default function BlogAdminEditPost() {
  const DRAFT = 0;
  const PENDING = 1;
  const PUBLISHED = 2;

  const { postId } = useParams();
  const { userFromBackend } = useUserAuth();
  useEffect(() => {
    async function getPostData() {
      const postDataResp = await PostAPI.get(postId);
      setTitle(postDataResp.title);
      setEditorData(postDataResp.content);
      setPermalink(postDataResp.permalink);
    }
    getPostData();
  }, []);

  const [labels, setLabels] = useState();
  const [permalink, setPermalink] = useState("");
  const [title, setTitle] = useState("");
  const [editorData, setEditorData] = useState("");
  const toolbarRef = useRef();

  function handlePermaLinkChange(value) {
    setPermalink(value);
  }
  const onWriterChange = (event, editor) => {
    setEditorData(editor.getData());
  };
  async function sendPostData() {
    const postObject = {
      id: postId,
      content: editorData,
      title: title,
      permalink: permalink,
      statusId: DRAFT,
    };
    const response = await PostAPI.savePost(postObject, postId);
    setTitle(response.title);
    setEditorData(response.content);
    setPermalink(response.permalink);
  }
  async function publishPostData() {
    const postObject = {
      id: postId,
      content: editorData,
      title: title,
      permalink: permalink,
      statusId: userFromBackend.isAdmin ? PUBLISHED : PENDING,
    };
    const response = await PostAPI.savePost(postObject, postId);
    setTitle(response.title);
    setEditorData(response.content);
    setPermalink(response.permalink);
  }
  return (
    <>
      <div className="flex w-full min-w-[400px]">
        <div className="w-10/12">
          <input
            className="w-full focus:outline-none h-10 px-2 border-b focus:border-b-2 border-yellow-400"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <div ref={toolbarRef}></div>
        </div>
        <div className="w-full bg-white flex items-center overflow-x-auto">
          <div className="flex justify-end w-full">
            <button
              className="flex items-center justify-between py-1 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              onClick={sendPostData}
            >
              <BsUpload className="w-4 h-4 m-2" />
              <p className="pr-1 hidden lg:block">Save</p>
            </button>
            <button
              className="flex items-center justify-between py-1 mr-2 text-sm font-medium text-white focus:outline-none bg-amber-400 rounded-lg border border-gray-200 hover:bg-amber-500 focus:z-10 focus:ring-4 focus:ring-gray-200"
              onClick={publishPostData}
            >
              <IoSend className="w-4 h-4 m-2" />
              <p className="font-bold pr-1 hidden lg:block">
                {userFromBackend.isAdmin ? "Post" : "Submit"}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between h-[calc(100%-80px)] bg-slate-200">
        <AdminEditor
          toolbarRef={toolbarRef}
          editorData={editorData}
          onWriterChange={onWriterChange}
        />
        <EditorSidebar
          onPermalinkChange={handlePermaLinkChange}
          permaLink={permalink}
        />
      </div>
    </>
  );
}
