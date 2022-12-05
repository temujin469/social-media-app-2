import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQueryClient, useMutation } from "react-query";
import { addPost } from "../../api/post";
import toast from "react-hot-toast";

const Share = () => {

  const [file, setFile] = useState<string | Blob | null>(null);
  const [desc, setDesc] = useState<string | null>(null);



  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    }
  })

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file!)
    const newPost: PostBody = {
      desc: desc!,
      img: file && formData
    }
    mutation.mutate(newPost);
    toast.success("post nemeglee")
  }

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            alt=""
          />
          <input type="text" placeholder={`${currentUser?.name} юу бодож байна?`} onChange={(e: any) => setDesc(e.target.value)} />
        </div>
        {
          file && (
            <div>
              <div className="upload-image-container">
                <span className="remove-btn" onClick={() => setFile(null)}>X</span>
                <img src={URL.createObjectURL(file as Blob)} alt="" />
              </div>
            </div>
          )
        }
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} onChange={(e: any) => setFile(e.target.files[0])} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Зураг</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>
                Байршил</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>
                таглах</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick} disabled={!(desc || file)}>Нийтлэх</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;