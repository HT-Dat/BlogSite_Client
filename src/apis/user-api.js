import { api } from "./configs/axios-config";

export const UserAPI = {
  register: async function () {
    const response = api.request({
      url: `/api/auth/register`,
      method: "POST",
    });
    return response.data;
  },
};
