import { useQuery } from "react-query";
import { getPosts } from "../../api/post";
import catchError from "../../utils/cathError";
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {

  const { isLoading, error, data: posts } = useQuery(['posts'], getPosts);
  console.log(posts)

  return <div className="posts">
    {
      error ? catchError(error) : (
        isLoading ? "Loading..." : posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))
      )
    }
  </div>;
};

export default Posts;