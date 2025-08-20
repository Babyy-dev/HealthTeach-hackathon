import HealthReading from "../models/healthReading.js";
import Patient from "../models/patient.js";

export const receiveData = async (req, res) => {
  try {
    const { patientId, vitals } = req.body;

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const newReading = new HealthReading({
      patient: patientId,
      vitals: vitals,
    });

    await newReading.save();
    res.status(201).json({ message: "Data received and stored successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error storing data", error });
  }
};
