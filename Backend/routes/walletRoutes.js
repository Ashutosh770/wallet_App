import express from 'express';
import { createWallet, getWalletsByUser } from '../controllers/walletController.js';

const router = express.Router();

router.post('/', createWallet);
router.get('/user/:userId', getWalletsByUser);

export default router;



// import express from 'express';
// import prisma from '../prismaClient.js';

// const router = express.Router();

// // Create a wallet for a user
// router.post('/', async (req, res) => {
//     const { userId, balance } = req.body;
//     try {
//         const wallet = await prisma.wallet.create({ data: { userId, balance } });
//         res.status(201).json(wallet);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Get wallets for a user
// router.get('/user/:userId', async (req, res) => {
//     const { userId } = req.params;
//     try {
//         const wallets = await prisma.wallet.findMany({ where: { userId } });
//         res.status(200).json(wallets);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// export default router;
