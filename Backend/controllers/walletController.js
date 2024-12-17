import prisma from '../prismaClient.js';

// Create a wallet for a user
export const createWallet = async (req, res) => {
    const { userId, balance } = req.body;
    try {
        const wallet = await prisma.wallet.create({
            data: { userId, balance },
        });
        res.status(201).json(wallet);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get wallets for a user
export const getWalletsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const wallets = await prisma.wallet.findMany({
            where: { userId },
        });
        res.status(200).json(wallets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
