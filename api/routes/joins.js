import express from "express";
import { joinPeople, groupPeople, joinCheck } from "../controllers/join.js";

const router = express.Router();

//mail을 선언해줘야하는데...
// router.post("/", mail.sendEmail);
router.post("/", joinPeople);
router.get("/groupPeople", groupPeople);
router.get("/joinCheck", joinCheck);

export default router;