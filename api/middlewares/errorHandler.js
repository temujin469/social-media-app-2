import MyError from "../utils/myError.js";
import { StatusCodes } from "http-status-codes";

export default (err, req, res, next) => {
  if (err.name === "CastError") {
    const message = `Resource not found invalid: ${err.path}`;
    err = new MyError(message, StatusCodes.BAD_REQUEST);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    err = new MyError(message, StatusCodes.BAD_REQUEST);
  }

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Дотоод серверийн алдаа",
  });
};
