import prisma from '../prismaClient.js';
import { createToken } from '../utils/jwt.js';

// Register a new user
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body; // Assume password is stored securely (hashed)
    try {
        const user = await prisma.user.create({
            data: { username, email,password },
        });
        res.status(200).json({type:'success',data:user});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// User login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // const token = createToken({ id: user.id, username: user.username });
        res.status(200).json({ type:'success' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
