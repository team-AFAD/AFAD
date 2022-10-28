import express from "express";
import { joinPeople } from "../controllers/join.js";

const router = express.Router();

//mail을 선언해줘야하는데...
// router.post("/", mail.sendEmail);
router.post("/", joinPeople);

export default router;