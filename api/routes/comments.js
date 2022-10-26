import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// comment 작성
router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:postid", getComments);


export default router;