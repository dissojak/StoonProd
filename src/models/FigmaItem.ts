import mongoose, { type InferSchemaType, type Model } from "mongoose";
const { Schema, model, models } = mongoose;

const FigmaItemSchema = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    order: { type: Number, default: 0 },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

export type FigmaItemDocument = InferSchemaType<typeof FigmaItemSchema> & { _id: any };

const FigmaItem: Model<FigmaItemDocument> =
  (models.FigmaItem as Model<FigmaItemDocument>) ||
  model<FigmaItemDocument>("FigmaItem", FigmaItemSchema);

export default FigmaItem;
