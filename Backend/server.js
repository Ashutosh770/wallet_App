
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import walletRoutes from './routes/walletRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:8081' }));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/wallets', walletRoutes);
app.use('/api/transactions', transactionRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
