import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import garmentRoutes from './routes/garments.js';

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/garments', garmentRoutes);

app.get('/health', (req, res) => res.json({ status: 'success', message: 'Backend running' }));

export default app;
