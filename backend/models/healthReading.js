import mongoose from "mongoose";
const { Schema } = mongoose;

const healthReadingSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
  timestamp: { type: Date, default: Date.now },
  vitals: {
    bp: { type: String },
    sugar: { type: Number },
    spo2: { type: Number },
    temperature: { type: Number },
    heartRate: { type: Number },
  },
});

const HealthReading = mongoose.model("HealthReading", healthReadingSchema);

export default HealthReading;
