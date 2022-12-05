import MyError from "../utils/myError.js";
import { db } from "../config/db.js";
import moment from "moment";

export const getComments = (req, res, next) => {
  const q = `SELECT c.*,u.id AS userId, u.name ,i.profilePic FROM comments AS c JOIN users AS u ON (c.userId = u.id) LEFT JOIN userInfo AS i ON (u.id = i.userId) WHERE c.postId = ? ORDER BY c.createdAt DESC`;

  console.log(req.params.postId);
  db.query(q, [req.params.postId], (err, data) => {
    if (err) next(new MyError(err.message, 500));
    return res.status(200).json({ success: true, data: data });
  });
};

export const addComment = (req, res, next) => {
  const q =
    "INSERT INTO comments (`desc`,`createdAt`,`userId`,`postId`) VALUES (?)";

  const values = [
    req.body.desc,
    moment(Date.now()).format("YYYY-MM-DD"),
    req.user.userId,
    req.params.postId,
  ];

  console.log(req.body);

  db.query(q, [values], (err, data) => {
    if (err) return next(new MyError(err.message, 500));
    return res
      .status(201)
      .json({ success: true, message: "amjilttai comment nemlee" });
  });
};
