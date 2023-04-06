import { api } from "./configs/axios-config";

export const UserAPI = {
  register: async function () {
    const response = await api.request({
      url: `/api/auth/register`,
      method: "POST",
    });
    return response.data;
  },
};
