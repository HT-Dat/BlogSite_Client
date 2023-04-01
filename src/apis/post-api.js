import { api } from "./configs/axios-config";

export const PostAPI = {
  get: async function (id) {
    const response = await api.request({
      url: `/api/post/${id}`,
      method: "GET",
    });

    return response.data;
  },
  getList: async function () {
    const response = await api.request({
      url: `/api/post`,
      method: "GET",
    });

    return response.data;
  },
  savePost: async function (Post, id) {
    const response = await api.request({
      url: `/api/post/${id}`,
      method: "PUT",
      data: Post,
    });
    return response.data;
  },
  newPost: async function () {
    const response = await api.request({
      url: `/api/post`,
      method: "POST",
    });
    return response.data;
  },
  uploadImg: async function (file) {
    const response = await api.request({
      url: `/api/post/upload-editor-image`,
      method: "POST",
      data: file,
    });
    return response;
  },
};
