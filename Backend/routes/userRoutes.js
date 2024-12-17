import express from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

export default router;


// import express from 'express';
// import prisma from '../prismaClient.js';

// const router = express.Router();

// // Create a user
// router.post('/', async (req, res) => {
//     const { username, email } = req.body;
//     try {
//         const user = await prisma.user.create({ data: { username, email } });
//         res.status(201).json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Get all users
// router.get('/', async (req, res) => {
//     try {
//         const users = await prisma.user.findMany();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// export default router;
