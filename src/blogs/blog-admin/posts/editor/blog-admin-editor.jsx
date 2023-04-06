import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5-custom-build/build/ckeditor";
import CustomUploadAdapterPlugin from "./custom-upload-adapter";
export default function AdminEditor({
  toolbarRef,
  editorData,
  onWriterChange,
}) {

  const editorConfiguration = {
    extraPlugins: [CustomUploadAdapterPlugin],
  };
  return (
    <div className="w-full h-full">
      <div className="max-w-2xl mx-auto h-full pt-5">
        <div className="bg-white w-[700px] h-full overflow-auto prose-lg">
          <CKEditor
            editor={DecoupledDocumentEditor}
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
