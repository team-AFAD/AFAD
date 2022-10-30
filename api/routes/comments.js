import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.js";
// import { verifyToken } from "../utils/verifyToken.js";
// import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//verifyToken post랑 delete에 잠시 토큰지우기
router.post("/", addComment);
router.delete("/:id", deleteComment);
router.get("/:postid", getComments);


export default router;