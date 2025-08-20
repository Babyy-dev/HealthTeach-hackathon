import express from "express";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/health-worker/signup", authController.healthWorkerSignup);
router.post("/health-worker/login", authController.healthWorkerLogin);
router.post("/doctor/signup", authController.doctorSignup);
router.post("/doctor/login", authController.doctorLogin);

export default router;
