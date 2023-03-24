import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
export default function AdminEditor({
  toolbarRef,
  editorData,
  onWriterChange,
}) {
  return (
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
