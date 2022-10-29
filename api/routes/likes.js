import express from "express";
import { postLike, deleteLike} from "../controllers/like.js";

const router = express.Router();

router.post("/like", postLike);
router.delete("/delete", deleteLike);

export default router;