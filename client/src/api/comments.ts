import api from "../utils/axios";

export const getComments = async (postId: number): Promise<Comment[]> => {
  const response = await api.get(`/comments/${postId}`);
  return response.data.data;
};

export const addComment = async ({ desc, postId }: CommentBody) => {
  const response = await api.post(`/comments/${postId}`, { desc });
  return response.data.message;
};
