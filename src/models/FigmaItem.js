import mongoose from 'mongoose';

const FigmaItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.FigmaItem || mongoose.model('FigmaItem', FigmaItemSchema);
