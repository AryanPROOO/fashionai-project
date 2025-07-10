import Garment from '../models/Garment.js';

export const createGarment = async (req, res) => {
  const garment = new Garment({ ...req.body, userId: req.user._id });
  await garment.save();
  res.status(201).json(garment);
};

export const getUserGarments = async (req, res) => {
  const garments = await Garment.find({ userId: req.user._id });
  res.json(garments);
};
