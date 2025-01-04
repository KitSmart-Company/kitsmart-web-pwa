import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useFavoriteStore } from '@/shared/store';
import { toast } from 'react-hot-toast';

interface AddFavoriteProps {
    productId: number;
}

export const AddFavorite: React.FC<AddFavoriteProps> = ({ productId }) => {
    const { items, addFavoriteItem, loading } = useFavoriteStore((state) => ({
        items: state.items,
        addFavoriteItem: state.addFavoriteItem,
        loading: state.loading,
    }));

    const isFavorite = items.includes(productId);

    const handleFavoriteClick = async () => {
        try {
            await addFavoriteItem(productId);
            toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
        } catch (error) {
            console.error('Error toggling favorite', error);
            toast.error('Failed to update favorites');
        }
    };

    return (
        <button onClick={handleFavoriteClick} className="text-violet-600 absolute right-4 top-4" disabled={loading}>
            {isFavorite ? <MdFavorite size={30} /> : <MdFavoriteBorder size={30} />}
        </button>
    );
};
