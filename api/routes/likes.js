import express from "express";
import { postLike, deleteLike, isLike, getLike} from "../controllers/like.js";
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post("/", verifyToken, postLike);
router.delete("/delete", deleteLike);
router.get("/islike", isLike);
router.get("/getLike", getLike);

export default router;