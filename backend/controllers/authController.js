import HealthWorker from "../models/healthWorker.js";
import Doctor from "../models/doctor.js";

// Health Worker Signup (No password)
export const healthWorkerSignup = async (req, res) => {
  try {
    const { fullName, workerId, village, phoneNumber } = req.body;
    const newWorker = new HealthWorker({
      fullName,
      workerId,
      village,
      phoneNumber,
    });
    await newWorker.save();
    res.status(201).json({ message: "Health worker registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error registering health worker", error });
  }
};

// Health Worker Login (Only with workerId)
export const healthWorkerLogin = async (req, res) => {
  try {
    const { workerId } = req.body;
    const worker = await HealthWorker.findOne({ workerId });
    if (!worker) {
      return res.status(404).json({ message: "Worker not found" });
    }
    res.status(200).json({ message: "Login successful", worker });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Doctor Signup (remains the same)
export const doctorSignup = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error registering doctor", error });
  }
};

// Doctor Login (remains the same)
export const doctorLogin = async (req, res) => {
  // This should include password validation in a real app
  res.status(200).json({ message: "Login successful" });
};
