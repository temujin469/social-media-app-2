import api from "../utils/axios";

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get("/posts");
  return response.data;
};
