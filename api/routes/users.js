import express from "express";
import{updateUser, deleteUser, getUser} from "../controllers/user.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

//admin은 게시판혹은  admin 생성시 사용하면된다. 
//router.put("/:id", verifyAdmin, updatePost);
router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})


//UPDATE
router.put("modify/:id", verifyUser, updateUser);
//DELETE
router.delete("modify/:id", verifyUser, deleteUser);
//GET(find)
// router.get("/find/:id", verifyUser, getUser);
//GET ALL(admin)
// router.get("/", verifyUser, getUsers);
//get a user
router.get("/", verifyUser, getUser);


export default router