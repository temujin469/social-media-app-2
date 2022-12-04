import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            alt=""
          />
          <input type="text" placeholder={`${currentUser?.name} юу бодож байна?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
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
            <button>Нийтлэх</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;