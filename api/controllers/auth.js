import { db } from "../config/db.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import MyError from "../utils/myError.js";
import jwt from "jsonwebtoken";
import { attachCookiesToResponse } from "../utils/token.js";

export const register = (req, res, next) => {
  // hereglegch ali hediin bvrtgvvlsen eshiig shalgah
  const query = "SELECT * FROM users WHERE username = ?";

  db.query(query, [req.body.username], (err, data) => {
    if (err) {
      return next(
        new MyError(`${err.message}`, StatusCodes.INTERNAL_SERVER_ERROR)
      );
    }
    if (data.length) {
      return next(
        new MyError(
          "аль хэдийн бүртгүүлсэн хэрэглэгч байна",
          StatusCodes.BAD_REQUEST
        )
      );
    }

    // shineer herglegch bvrtgeh
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const query =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(query, [values], (err, data) => {
      if (err) {
        return next(
          new MyError(`${err.message}`, StatusCodes.INTERNAL_SERVER_ERROR)
        );
      }
      return res
        .status(StatusCodes.CREATED)
        .json({ success: true, message: "Хэрэглэгчийг амжилттай бүртэглээ" });
    });
  });
};

//=============== LOGIN=================//
export const login = (req, res, next) => {
  // hereglegch ali hediin bvrtgvvlsen eshiig shalgah
  const query =
    "SELECT *,u.id AS id FROM users AS u LEFT JOIN userInfo AS i ON (u.id = i.userId) WHERE username = ?";

  db.query(query, [req.body.username], async (err, data) => {
    if (err) {
      return next(
        new MyError(`${err.message}`, StatusCodes.INTERNAL_SERVER_ERROR)
      );
    }
    if (!data.length) {
      return next(
        new MyError("Бүртгэлтэй хэрглэгч алга", StatusCodes.NOT_FOUND)
      );
    }

    const checkPassword = await bcrypt.compare(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) {
      return next(new MyError("Нууц үг буруу байна", StatusCodes.BAD_REQUEST));
    }

    const token = jwt.sign({ userId: data[0].id }, process.env.JWT_SECRET);

    attachCookiesToResponse(res, token);

    const { password, ...others } = data[0];

    return res
      .status(StatusCodes.OK)
      .json({ success: true, data: others, message: "amjilttai newterlee" });
  });
};
export const logout = (req, res, next) => {
  return res
    .clearCookie("accessToken", { secure: true, sameSite: "none" })
    .status(StatusCodes.OK)
    .json({ message: "Logout", success: true });
};
