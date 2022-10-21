import express from "express";
import { savedConversation, getConversation } from "../controllers/conversation.js";

const router = express.Router();

//new conv
router.post("/", savedConversation);
//get conv of a user
router.get("/:userId", getConversation);



export default router;