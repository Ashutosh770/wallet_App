import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach the decoded payload to the request object
        next();
    } catch (err) {
        res.status(403).json({ error: 'Invalid token.' });
    }
};

export default authMiddleware;
