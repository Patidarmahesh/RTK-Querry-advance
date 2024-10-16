import express from "express";
import upload from "../Middleware/multer.js";
import {
  createPost,
  deletePostById,
  getAllPost,
  getPostById,
  updatePostById,
} from "../Controller/postController.js";

const postRouter = express.Router();

postRouter.route("/post").post(upload.single("image"),createPost);
postRouter.route("/put/:id").put(upload.single("image"), updatePostById);
postRouter.route("/delete/:id").delete(deletePostById);
postRouter.route("/get/:id").get(getPostById);
postRouter.route("/get").get(getAllPost);

export default postRouter;
