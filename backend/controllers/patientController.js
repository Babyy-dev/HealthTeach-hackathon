import Patient from "../models/patient.js";
import HealthReading from "../models/healthReading.js";

// @route   POST /api/patients
export const createPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res
      .status(201)
      .json({ message: "Patient created successfully", patient: newPatient });
  } catch (error) {
    res.status(400).json({ message: "Error creating patient", error });
  }
};

// @route   GET /api/patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error });
  }
};

// @route   GET /api/patients/:id
export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const readings = await HealthReading.find({ patient: req.params.id })
      .sort({ timestamp: -1 })
      .limit(10); // Get the 10 most recent readings

    res.status(200).json({ patient, readings });
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient data", error });
  }
};
