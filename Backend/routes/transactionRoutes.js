import express from 'express';
import {
    createTransaction,
    getTransactionsByWallet,
    filterTransactionsByCategory,
} from '../controllers/transactionController.js';

const router = express.Router();

router.post('/', createTransaction);
router.get('/wallet/:walletId', getTransactionsByWallet);
router.get('/filter', filterTransactionsByCategory);

export default router;



// import express from 'express';
// import prisma from '../prismaClient.js';

// const router = express.Router();

// // Create a transaction
// router.post('/', async (req, res) => {
//     const { walletId, type, amount, category } = req.body;
//     try {
//         const transaction = await prisma.transaction.create({
//             data: { walletId, type, amount, category },
//         });

//         // Update wallet balance
//         const wallet = await prisma.wallet.findUnique({ where: { id: walletId } });
//         const newBalance =
//             type === 'receive' ? wallet.balance + amount : wallet.balance - amount;

//         await prisma.wallet.update({
//             where: { id: walletId },
//             data: { balance: newBalance },
//         });

//         res.status(201).json(transaction);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Get transactions for a wallet
// router.get('/wallet/:walletId', async (req, res) => {
//     const { walletId } = req.params;
//     try {
//         const transactions = await prisma.transaction.findMany({
//             where: { walletId },
//         });
//         res.status(200).json(transactions);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// export default router;
