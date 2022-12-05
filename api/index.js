import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config();

const app = express();

// import routes
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import uploadRoutes from "./routes/upload.js";
// import usersRoutes from "./routes/users";
// import likesRoutes from "./routes/likes";
import commentsRoutes from "./routes/comments.js";

// import middlewares
import errorHandler from "./middlewares/errorHandler.js";
import logger from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import authenticateUser from "./middlewares/authenticate.js";

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(logger);

app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/posts", authenticateUser, postsRoutes);
// app.use("/api/v1/users", usersRoutes);
// app.use("/api/v1/likes", likesRoutes);
app.use("/api/v1/comments", commentsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Express сэрвэр ${PORT} порт дээр аслаа... `);
});
