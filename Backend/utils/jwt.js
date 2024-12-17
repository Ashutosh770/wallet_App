import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Create a JWT
export const createToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
};

// Verify a JWT
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        throw new Error('Token verification failed');
    }
};
