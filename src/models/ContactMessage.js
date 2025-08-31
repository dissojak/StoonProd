import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);
