import mongoose from "mongoose";
const { Schema } = mongoose;

const healthWorkerSchema = new Schema({
  fullName: { type: String, required: true },
  workerId: { type: String, required: true, unique: true },
  village: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
});

const HealthWorker = mongoose.model("HealthWorker", healthWorkerSchema);

export default HealthWorker;
