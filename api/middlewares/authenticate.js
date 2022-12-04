import asyncHandler from "./asyncHandler.js";
import { verifyToken } from "../utils/token.js";
import MyError from "../utils/myError.js";

const authenticateUser = asyncHandler(async (req, res, next) => {
  let token;
  // check header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  // check cookies
  token = req.cookies.accessToken;

  // console.log("cookies +++++++++++", req.cookies);
  // console.log("signed cookies +++++++", req.signedCookies);

  if (!token) {
    throw new MyError("Токен байхгүй байна.", 400);
  }

  // token hvchentei vgivg shalgan
  const decodedToken = verifyToken(token);
  const { userId } = decodedToken;

  // userId ийг req user объектод хавсаргана
  req.user = {
    userId,
  };

  return next();
});

export default authenticateUser;
