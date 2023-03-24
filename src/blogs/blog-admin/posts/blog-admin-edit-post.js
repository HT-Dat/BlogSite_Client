import { CKEditor } from "@ckeditor/ckeditor5-react";
// import DocumentEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { IoSend } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../../../utils/axios";
export default function BlogAdminEditPost() {
  const { postId } = useParams();
  //get post data
  // useEffect(() => {
  //   async function getPostData() {
  //     const postDataResp = (await customFetch.get(`/api/post/${postId}`)).data;
  //     setTitle(postDataResp.title);
  //     setEditorData(postDataResp.content)
  //   }
  //   getPostData();
  // }, []);

  const [labels, setLabels] = useState();
  const [title, setTitle] = useState();
  const [editorData, setEditorData] = useState("");
  const toolbarRef = useRef();
  const onWriterChange = (event, editor) => {
    setEditorData(editor.getData());
  };

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
                <button className="flex items-center justify-between py-1 px-3 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
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
        <div className="w-full h-full">
          <div className="max-w-3xl mx-auto h-full pt-5">
            <div className="bg-white w-full h-full overflow-auto prose">
              <CKEditor
                editor={Editor}
                data={editorData}
                onReady={(editor) => {
                  if (toolbarRef.current) {
                    if (toolbarRef.current.children[0]) {
                      toolbarRef.current.removeChild(
                        toolbarRef.current.children[0]
                      );
                    }
                    toolbarRef.current.appendChild(
                      editor.ui.view.toolbar.element
                    );
                  }

                  // You can store the "editor" and use when it is needed.
                  // console.log("Editor is ready to use!", editor);
                }}
                onChange={onWriterChange}
              />
            </div>
          </div>
        </div>
        <div className="w-72 bg-white">
          <div className="p-3">
            <div className="text-gray-600 text-lg">Post setting</div>
            <div className="flex justify-start my-3">
              <div className="h-[1px] w-52 bg-gray-300"></div>
            </div>
            <div className="pl-2">
              <div>
                <label
                  htmlFor="tags"
                  className="block mb-2 text-sm text-gray-600 dark:text-white"
                >
                  Tags
                </label>
                <textarea
                  id="tags"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Enter tags here, separated by comma"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
