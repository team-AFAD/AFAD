import express from "express";
// import User from "./models/User.js";
import { payments, paymentView } from "../controllers/payments.js";

const router = express.Router();

router.get("/", paymentView);
router.post("/", payments);

export default router