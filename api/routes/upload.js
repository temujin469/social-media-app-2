import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/").post(upload.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json({ success: true, img: file.filename });
});

export default router;
