import prisma from '../prismaClient.js';

// Create a transaction
export const createTransaction = async (req, res) => {
    const { walletId, type, amount, category } = req.body;
    try {
        const transaction = await prisma.transaction.create({
            data: { walletId, type, amount, category },
        });

        // Update wallet balance
        const wallet = await prisma.wallet.findUnique({ where: { id: walletId } });
        const newBalance =
            type === 'receive' ? wallet.balance + amount : wallet.balance - amount;

        await prisma.wallet.update({
            where: { id: walletId },
            data: { balance: newBalance },
        });

        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get transactions for a wallet
export const getTransactionsByWallet = async (req, res) => {
    const { walletId } = req.params;
    try {
        const transactions = await prisma.transaction.findMany({
            where: { walletId },
        });
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Filter transactions by category
export const filterTransactionsByCategory = async (req, res) => {
    const { walletId, category } = req.query;
    try {
        const transactions = await prisma.transaction.findMany({
            where: { walletId, category },
        });
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
