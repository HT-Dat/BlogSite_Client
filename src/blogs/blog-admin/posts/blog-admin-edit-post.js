import { IoSend } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../../../utils/axios";

import AdminEditor from "./blog-admin-editor";
import EditorSidebar from "./blog-admin-edit-post-sidebar";
import { async } from "@firebase/util";
export default function BlogAdminEditPost() {
  const { postId } = useParams();
  //get post data
  useEffect(() => {
    async function getPostData() {
      const postDataResp = (await customFetch.get(`/api/post/${postId}`)).data;
      setTitle(postDataResp.title);
      setEditorData(postDataResp.content);
    }
    getPostData();
  }, []);

  const [labels, setLabels] = useState();
  const [title, setTitle] = useState();
  const [editorData, setEditorData] = useState("");
  const toolbarRef = useRef();
  const onWriterChange = (event, editor) => {
    setEditorData(editor.getData());
  };
  async function sendPostData() {
    const postObject = {
      id: postId,
      content: editorData,
      title: title,
    };
    const resp = await customFetch.put(`/api/post/${postId}`, postObject);
  }
  return (
    <>
      <div className="fixed w-full -ml-80 bg-white">
        <div className="ml-80">
          <div className="flex justify-between">
            <div className="inline-grid w-full">
              <input
                className="focus:outline-none h-10 px-2 border-b focus:border-b-2 border-yellow-400 transition ease-in-out delay-700 mr-10"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
              <div ref={toolbarRef} className=""></div>
            </div>
            <div className="w-72 bg-white flex items-center">
              <div className="flex justify-end w-full">
                <button
                  className="flex items-center justify-between py-1 px-3 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                  onClick={sendPostData}
                >
                  <BsUpload className="w-4 h-4 m-2" />
                  <p className="pr-1">Save</p>
                </button>
                <button className="flex items-center justify-between py-1 px-3 mr-2 text-sm font-medium text-white focus:outline-none bg-amber-400 rounded-lg border border-gray-200 hover:bg-amber-500 focus:z-10 focus:ring-4 focus:ring-gray-200">
                  <IoSend className="w-4 h-4 m-2" />
                  <p className="font-bold pr-1">Post</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between pt-[78px] h-full bg-slate-200">
        <AdminEditor
          toolbarRef={toolbarRef}
          editorData={editorData}
          onWriterChange={onWriterChange}
        />
        <EditorSidebar />
      </div>
    </>
  );
}
