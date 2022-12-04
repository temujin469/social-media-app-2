import jwt from "jsonwebtoken";
import MyError from "./myError.js";

// JWT hvchintei vgvig  shalgaad decode hiij butsaah
export const verifyToken = (token) => {
  if (!token) {
    throw new MyError("Токен байхгүй байна.", 400);
  }

  return jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) throw new MyError("Хүчингүй Token", 401);
    return decodedToken;
  });
};

export const attachCookiesToResponse = (res, token) => {
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("accessToken", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: false,
  });
};
