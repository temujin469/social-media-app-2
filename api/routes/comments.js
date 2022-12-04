import express from "express";
import {} from "../controllers/comments.js";

const router = express.Router();

router.route("/").get();
export default router;
