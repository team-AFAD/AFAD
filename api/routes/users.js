import express from "express";
import{updateUser, deleteUser, getUser, idCheck, findId, resetPW } from "../controllers/user.js"
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
// verifyToken,

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


//아이디 수정
router.put("modify/:id", verifyUser, updateUser);
//DELETE
router.delete("modify/:id", verifyUser, deleteUser);
//get a user
router.get("/", verifyUser, getUser);

// 아이디 중복확인
router.post("/idCheck", idCheck);
// 아이디 찾기
router.post("/findId", findId);
// 비밀번호 재설정
router.post("/resetPW", resetPW);





export default router