import {
    Favorite,
    FavoriteItem,
    Product
} from '@prisma/client';

export type FavoriteItemDTO = FavoriteItem & {
    product: Product;
};

export interface FavoriteDTO extends Favorite {
    items: FavoriteItemDTO[];
}

export interface CreateFavoriteItemValues {
    productId: number;
}
