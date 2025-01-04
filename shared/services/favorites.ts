import { axiosInstance } from './instance';
import { FavoriteDTO, CreateFavoriteItemValues } from './dto/favorites.dto';

export const getFavorites = async (): Promise<FavoriteDTO> => {
    return (await axiosInstance.get<FavoriteDTO>('/favorites')).data;
};

export const addFavoriteItem = async (values: CreateFavoriteItemValues): Promise<FavoriteDTO> => {
    return (await axiosInstance.post<FavoriteDTO>('/favorites', values)).data;
};

export const removeFavoriteItem = async (id: number): Promise<FavoriteDTO> => {
    return (await axiosInstance.delete<FavoriteDTO>('/favorites/' + id)).data;
};

export const toggleFavorite = async (productId: number): Promise<{ isFavorite: boolean }> => {
    const response = await axiosInstance.post<{ isFavorite: boolean }>('/favorites/toggle', { productId });
    return response.data;
};