import User from '../models/User.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  const token = user.generateAuthToken();
  res.status(201).json({ user: { id: user._id, username, email }, token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
  }
  const token = user.generateAuthToken();
  res.json({ user: { id: user._id, username: user.username, email }, token });
};
