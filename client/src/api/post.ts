import api from "../utils/axios";

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data.data;
};

export const addPost = async (newPost: PostBody) => {
  let imgUrl = null;
  if (newPost.img) {
    const { data } = await api.post("/upload", newPost.img as FormData);
    imgUrl = data.img;
  }

  if (newPost.desc || imgUrl) {
    const response = await api.post("/posts", {
      desc: newPost.desc,
      img: imgUrl,
    });
    console.log(response.data);
  }
};
