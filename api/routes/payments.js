import express from "express";
// import User from "./models/User.js";
import { payments, paymentView, paymentComp, paymentCompView } from "../controllers/payments.js";

const router = express.Router();

router.get("/", paymentView);
router.post("/", payments);
router.get("/complete", paymentCompView);
router.post("/complete", paymentComp);

export default router