import express from "express";
import{createPost,updatePost, deletePost, getPost, getPosts} from "../controllers/post.js"
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
//GET
router.get("/:id", verifyUser, getPost);
// GET ALL(post)
router.get("/", verifyUser, getPosts);

export default router