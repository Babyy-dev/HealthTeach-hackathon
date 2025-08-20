import mongoose from "mongoose";
const { Schema } = mongoose;

const doctorSchema = new Schema({
  fullName: { type: String, required: true },
  licenseId: { type: String, required: true, unique: true },
  specialization: { type: String, required: true },
  hospital: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
