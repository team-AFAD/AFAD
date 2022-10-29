import express from "express";
import { postLike, deleteLike, isLike} from "../controllers/like.js";

const router = express.Router();

router.post("/", postLike);
router.delete("/delete", deleteLike);
router.get("/islike", isLike);

export default router;