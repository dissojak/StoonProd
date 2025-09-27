import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const AdminUserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export type AdminUserDocument = InferSchemaType<typeof AdminUserSchema> & { _id: any };

const AdminUser: Model<AdminUserDocument> =
  (models.AdminUser as Model<AdminUserDocument>) ||
  model<AdminUserDocument>("AdminUser", AdminUserSchema);

export default AdminUser;
