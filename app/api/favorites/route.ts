// File: app/api/favorites.ts or pages/api/favorites.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prisma/prisma-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        // Logic to add a product to favorites
        const favorite = await prisma.favorite.create({
            data: {
                userId: req.user.id, // Assuming you have user authentication
                items: {
                    create: {
                        productId,
                    },
                },
            },
        });

        return res.status(200).json(favorite);
    } catch (error) {
        console.error('Error adding to favorites', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
