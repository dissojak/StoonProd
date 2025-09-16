import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const ContactMessageSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false },
);

export type ContactMessageDocument = InferSchemaType<typeof ContactMessageSchema> & { _id: any };

const ContactMessage: Model<ContactMessageDocument> =
  (models.ContactMessage as Model<ContactMessageDocument>) ||
  model<ContactMessageDocument>("ContactMessage", ContactMessageSchema);

export default ContactMessage;
