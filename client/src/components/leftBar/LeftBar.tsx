import "./leftBar.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {

  const authCtx = useContext(AuthContext);
  const currentUser = authCtx?.currentUser;

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt=""
            />
            <span>{currentUser?.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Найзууд</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Бүлгүүд</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Зах зээл</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>үзэх</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Дурсамжууд</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Таны товчлолууд</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Арга хэмжээ</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Тоглоом</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Галерей</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Видеонууд</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Мессежүүд</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Бусад</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Хандив цуглуулах</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Хичээлүүд</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Курсууд</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;