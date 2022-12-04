import express from "express";
import { addPosts, getPosts } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(addPosts);
export default router;
