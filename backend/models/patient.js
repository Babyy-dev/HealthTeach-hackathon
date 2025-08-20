import mongoose from "mongoose";
const { Schema } = mongoose;

const patientSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  village: { type: String, required: true },
  healthWorker: {
    type: Schema.Types.ObjectId,
    ref: "HealthWorker",
    required: true,
  },
  status: {
    type: String,
    enum: ["normal", "attention", "critical"],
    default: "normal",
  },
  lastCheckup: { type: Date, default: Date.now },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
