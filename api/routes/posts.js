import express from "express";
import{createPost,updatePost, deletePost, getPost, getPosts} from "../controllers/post.js";

import{ likePost } from "../controllers/like.js"

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import multer from "multer";



const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "images/post/");
  },
  filename: (req, file, cb) =>{
      cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({storage:storage})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//CREATE
router.post("/write", upload.single('photo'), createPost);
//UPDATE
router.put("/:id", verifyUser, updatePost);
//DELETE
router.delete("/:id", verifyUser, deletePost);
//like a post
router.put("/:id/like", verifyUser, likePost);
//GET
router.get("/:id", getPost);
// GET ALL(post)


// router.get("/", verifyUser, getPosts);


export default router;