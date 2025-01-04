import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Ingredient } from '@prisma/client';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import {AddFavorite} from "@/shared/components/shared/add-favorite";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
                                               id,
                                               name,
                                               price,
                                               imageUrl,
                                               ingredients,
                                               className,
                                             }) => {
  return (
      <div className={`relative ${className}`}>
          <AddFavorite productId={id} />
        <Link href={`/product/${id}`}>
          <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] mb-2">
            <img className="w-[100] h-[100]" loading="lazy" src={imageUrl} alt={name} />
          </div>

          <span className="text-[20px]">
          <b>{price} ₽</b>
        </span>

          <Title text={name} size="xs" className="mb-1 font-[600] truncate" />

          <p className="text-sm text-gray-400 line-clamp-2">
            {ingredients.map((ingredient) => ingredient.name).join(', ')}
          </p>

          <div className="flex justify-between items-center mt-4">
            <Button className="text-base font-bold flex w-full items-center gap-2">
              <PiShoppingCartSimpleFill size={20} className="mr-1" />
              Добавить
            </Button>
          </div>
        </Link>
      </div>
  );
};
