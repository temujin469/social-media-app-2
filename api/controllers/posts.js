import { db } from "../config/db.js";
import MyError from "../utils/myError.js";
import moment from "moment";

export const getPosts = (req, res, next) => {
  // const q = `SELECT * FROM posts AS u JOIN users AS u ON (p.userId = u.id)`;
  const q = `SELECT p.*,u.id AS userId, u.name, u.username ,i.profilePic FROM posts AS p JOIN users AS u ON (p.userId = u.id) LEFT JOIN userInfo AS i ON (u.id = i.userId) LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? `;

  const userId = req.user.userId;

  db.query(q, [userId, userId], (err, data) => {
    if (err) next(new MyError(err.message, 500));
    return res.status(200).json({ success: true, data: data });
  });
};

export const addPosts = (req, res, next) => {
  const q = "INSERT INTO posts (`desc`,`img`,`createdAt`,`userId`) VALUES (?)";

  const values = [
    req.body.desc,
    req.body.img,
    moment(Date.now()).format("YYYY-MM-DD"),
    req.user.userId,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return next(new MyError(err.message, 500));
    return res
      .status(201)
      .json({ success: true, message: "amjilttai post nemlee" });
  });
};
