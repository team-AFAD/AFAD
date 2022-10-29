import express from "express";
import{createPost,updatePost, deletePost, getPost, getPosts} from "../controllers/post.js";

// import{ likePost } from "../controllers/like.js"

import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import multer from "multer";
import path from 'path';



const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "../client/public/images");
  },
  filename: (req, file, cb) =>{
        const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}.${ext}`);
  }
});

const upload = multer({storage:storage})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//CREATE
router.post("/write", upload.single('photo'), createPost);
//UPDATE
// router.put("/:id", verifyUser, updatePost);
router.put("/:id", updatePost);
//DELETE
router.delete("/:id", verifyUser, deletePost);
//like a post
router.put("/:id/like", verifyUser);
//GET
router.get("/:id", getPost);
// GET ALL(post)
router.get("/", getPosts);


export default router;