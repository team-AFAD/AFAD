import express from "express";
import{createPost,updatePost, deletePost, getPost, getPosts} from "../controllers/post.js";

import{ likePost } from "../controllers/like.js"

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//CREATE
router.post("/", verifyUser, createPost);
//UPDATE
router.put("/:id", verifyUser, updatePost);
//DELETE
router.delete("/:id", verifyUser, deletePost);
//like a post
router.put("/:id/like", verifyUser, likePost);
//GET
router.get("/:id", getPost);
// GET ALL(post)
router.get("/", getPosts);

export default router;