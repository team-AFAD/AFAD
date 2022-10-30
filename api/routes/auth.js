import express from "express";
// import User from "./models/User.js";
import { register, login, idCheck, emailCheck, nicknameCheck } from "../controllers/auth.js";
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

router.post("/register", upload.single('profilePicture'), register);
router.post("/login", login);
// 아이디 중복확인
router.post("/idCheck", idCheck);
router.post("/emailCheck", emailCheck);
router.post("/nicknameCheck", nicknameCheck);

export default router