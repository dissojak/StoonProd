import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // In production, hash passwords!
  email: { type: String },
  verified: { type: Boolean, default: false },
});

export default mongoose.models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);
