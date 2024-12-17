import express from 'express';
import dotenv from 'dotenv';
import authMiddleware from './middleware/authMiddleware.js';
import userRoutes from './routes/user.js';
import walletRoutes from './routes/wallet.js';
import transactionRoutes from './routes/transaction.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Public Routes
app.use('/api/users', userRoutes); // Example: User registration/login doesn't require authentication

// Protected Routes
app.use('/api/wallets', authMiddleware, walletRoutes);
app.use('/api/transactions', authMiddleware, transactionRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

export default app;
