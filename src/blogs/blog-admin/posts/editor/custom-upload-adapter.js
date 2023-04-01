import { PostAPI } from "../../../../apis/post-api";
class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise(async (resolve, reject) => {
          const data = new FormData();
          data.append("upload", file);
          try {
            const response = await PostAPI.uploadImg(data);
            if (response.status === 200) {
              resolve({ default: response.data.url });
            } else {
              console.log("WUT");
              reject(`Upload failed: ${response.status}`);
            }
          } catch (error) {
            console.log(error);

            reject(`Upload failed: ${error}`);
          }
        })
    );
  }

  abort() {}
}
export default function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader);
  };
}
