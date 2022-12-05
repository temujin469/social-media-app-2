import express from "express";
import { addComment, getComments } from "../controllers/comments.js";
import authenticateUser from "../middlewares/authenticate.js";

const router = express.Router();

router.route("/:postId").get(getComments).post(authenticateUser, addComment);
export default router;
