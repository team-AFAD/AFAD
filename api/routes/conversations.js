import express from "express";
import { savedConversation, getConversation, twoConversation } from "../controllers/conversation.js";

const router = express.Router();

//new conv
router.post("/", savedConversation);
//get conv of a user
router.get("/:userId", getConversation);
// get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", twoConversation);


export default router;