import express from "express";
// import Message from "../models/Message.js";
import { addMessage, getConversation } from "../controllers/message.js";
const router = express.Router();


//add
router.post("/", addMessage);
//get
router.get("/:userId", getMessage);


export default router;