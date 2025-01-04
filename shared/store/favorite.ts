import { create } from 'zustand';
import { Api } from '../services/api-client';

export interface FavoriteState {
    items: number[];
    loading: boolean;
    error: boolean;

    fetchFavorites: () => Promise<void>;
    addFavoriteItem: (productId: number) => Promise<void>;
    removeFavoriteItem: (productId: number) => Promise<void>;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
    items: [],
    loading: false,
    error: false,

    fetchFavorites: async () => {
        try {
            set({ loading: true, error: false });
            const data = await Api.favorites.getFavorites();
            set({ items: data });
        } catch (error) {
            console.error(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    addFavoriteItem: async (productId: number) => {
        try {
            set({ loading: true, error: false });
            await Api.favorites.addFavoriteItem({ productId });
            set((state) => ({
                items: [...state.items, productId],
            }));
        } catch (error) {
            console.error(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    removeFavoriteItem: async (productId: number) => {
        try {
            set({ loading: true, error: false });
            await Api.favorites.removeFavoriteItem(productId);
            set((state) => ({
                items: state.items.filter((id) => id !== productId),
            }));
        } catch (error) {
            console.error(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
}));
