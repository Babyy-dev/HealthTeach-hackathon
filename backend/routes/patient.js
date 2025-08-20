import express from "express";
import * as patientController from "../controllers/patientController.js";

const router = express.Router();

// Route to get all patients and create a new patient
router
  .route("/")
  .get(patientController.getAllPatients)
  .post(patientController.createPatient);

// Route to get a single patient's details
router.route("/:id").get(patientController.getPatientById);

export default router;
