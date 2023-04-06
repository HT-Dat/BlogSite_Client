import { api } from "./configs/axios-config";

export const PostAPI = {
  get: async function (id) {
    const response = await api.request({
      url: `/api/post/my-content/${id}`,
      method: "GET",
    });

    return response.data;
  },
  getPublic: async function (permalink) {
    const response = await api.request({
      url: `/api/post/public/${permalink}`,
      method: "GET",
    });

    return response.data;
  },
  getListAdmin: async function () {
    const response = await api.request({
      url: `/api/post/my-content`,
      method: "GET",
    });

    return response.data;
  },
  getListPublic: async function () {
    const response = await api.request({
      url: `/api/post/public`,
      method: "GET",
    });
    return response.data;
  },
  savePost: async function (Post, id) {
    const response = await api.request({
      url: `/api/post/my-content/${id}`,
      method: "PUT",
      data: Post,
    });
    return response.data;
  },
  newPost: async function () {
    const response = await api.request({
      url: `/api/post/my-content`,
      method: "POST",
    });
    return response.data;
  },
  uploadImg: async function (file) {
    const response = await api.request({
      url: `/api/post/my-content/upload-editor-image`,
      method: "POST",
      data: file,
    });
    return response;
  },
  delete: async function (id) {
    const response = await api.request({
      url: `/api/post/my-content/${id}`,
      method: "DELETE",
    });
    return response;
  },
};
