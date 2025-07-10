import mongoose from 'mongoose';

const garmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  category: String,
  color: String,
  size: String,
  season: String,
  occasions: [String],
  images: [{ url: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Garment', garmentSchema);
