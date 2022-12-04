import express from "express";
import {} from "../controllers/users.js";

const router = express.Router();

router.route("/").get();
export default router;
