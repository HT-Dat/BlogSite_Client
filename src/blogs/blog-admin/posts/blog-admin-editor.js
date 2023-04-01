import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
export default function AdminEditor({
  toolbarRef,
  editorData,
  onWriterChange,
}) {
  const editorConfiguration = {
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: `${process.env.REACT_APP_BASEAPI_URL}/api/post/upload-editor-image`,

      // Enable the XMLHttpRequest.withCredentials property.
      withCredentials: true,

      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        "X-CSRF-TOKEN": "CSRF-Token",
        Authorization: `Bearer ${localStorage.getItem("firebase_auth_token")}`,
      },
    },
  };
  return (
    <div className="w-full h-full">
      <div className="max-w-xl mx-auto h-full pt-5">
        <div className="bg-white w-full h-full overflow-auto prose">
          <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data={editorData}
            onReady={(editor) => {
              if (toolbarRef.current) {
                if (toolbarRef.current.children[0]) {
                  toolbarRef.current.removeChild(
                    toolbarRef.current.children[0]
                  );
                }
                toolbarRef.current.appendChild(editor.ui.view.toolbar.element);
              }

              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
            }}
            onChange={onWriterChange}
          />
        </div>
      </div>
    </div>
  );
}
