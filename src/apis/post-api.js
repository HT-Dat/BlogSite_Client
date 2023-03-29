import { api } from "./configs/axios-config";

export const PostAPI = {
  get: async function (id) {
    const response = await api.request({
      url: `/api/post/${id}`,
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
};
