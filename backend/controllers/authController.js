import HealthWorker from "../models/healthWorker.js";
import Doctor from "../models/doctor.js";

export const healthWorkerSignup = async (req, res) => {
  try {
    const newWorker = new HealthWorker(req.body);
    await newWorker.save();
    res.status(201).json({ message: "Health worker registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error registering health worker", error });
  }
};

export const healthWorkerLogin = async (req, res) => {
  res.status(200).json({ message: "Login successful" });
};

export const doctorSignup = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error registering doctor", error });
  }
};

export const doctorLogin = async (req, res) => {
  res.status(200).json({ message: "Login successful" });
};
