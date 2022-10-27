import express from "express";
import { sendEmail } from "../controllers/email.js";

const router = express.Router();

//mail을 선언해줘야하는데...
// router.post("/", mail.sendEmail);
router.post("/", sendEmail);

export default router;