import express from "express";
// import User from "./models/User.js";
import { register, login } from "../controllers/auth.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../client/public/images");
    },
    filename: (req, file, cb) =>{
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({storage:storage})

router.post("/register", upload.single('profilePicture'), register);
router.post("/login", login);

export default router