import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";


type Props = {
  post: Post
}
const Post = ({ post }: Props) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic ? `./upload/${post.profilePic}` : "./upload/blank-profile-picture.webp"} alt="нүүр зураг" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).format("l")}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          {post.img && <img src={`./upload/${post.img}`} alt="" />}
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <div className="text">
              <p>12</p>
              <p className="md-text">таалагдсан</p>
            </div>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            <div className="text">
              <p>12</p>
              <p className="md-text">сэтгэгдэл</p>
            </div>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <div className="text">
              <p className="md-text">Хуваалцах</p>
            </div>
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;