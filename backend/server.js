import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import consultationRoutes from './routes/consultationRoutes.js';

// Load environmental variables
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.use('/api/consultations', consultationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'up', time: new Date() });
});

// Start server only in local development — Vercel uses the exported handler
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5002;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}

// Export app as default — Vercel Serverless Functions use this as the request handler
export default app;
