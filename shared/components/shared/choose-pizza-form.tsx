'use client';

import React from 'react';
import {Ingredient, Prisma, ProductItem} from '@prisma/client';

import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { ProducstSize, ProducstType, ProductTypes } from '@/shared/constants/product';
import { IngredientItem } from './ingredient-item';
import { cn } from '@/shared/lib/utils';
import { getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';
import JsonValue = Prisma.JsonValue;

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
  stats: JsonValue;
}


export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
    stats,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients,
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
      <div className={cn(className, 'grid items-center grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-2 my-16 mx-2')}>
        <div className="grid-cols-1 lg:col-span-2 md:col-span-2">
          <PizzaImage imageUrl={imageUrl} size={size}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 lg:col-span-3 md:col-span-2 gap-2">
          <div className="col-span-1 lg:col-span-3 md:col-span-4">
            <Title text={name} size="sm" className="font-bold mb-1"/>
            <p className="text-gray-400">{textDetaills}</p>

            <div className="flex flex-col gap-4 mt-5">
              <GroupVariants
                  items={availableSizes}
                  value={String(size)}
                  onClick={(value) => setSize(Number(value) as ProducstSize)}
              />

              <GroupVariants
                  items={ProductTypes}
                  value={String(type)}
                  onClick={(value) => setType(Number(value) as ProducstType)}
              />
            </div>
            <div className="p-5 mt-5 rounded-md bg-[#F3F4F6]">
              <Title text="Характеристики" size="xs" className="font-[600] mb-2"/>
              <table className="w-full text-left">
                <thead>
                </thead>
                <tbody>
                {Object.entries(stats).map(([key, value]: [string, any]) => (
                    <tr key={key}>
                      <td className="py-2">{key}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#F3F4F6] p-5 h-[420px] overflow-auto scrollbar mt-5">
              <Title text="Дополни свою покупку" size="xs" className="font-[600] mb-2"/>
              <div className="grid grid-cols-3 gap-3">
                {ingredients.map((ingredient) => (
                    <IngredientItem
                        key={ingredient.id}
                        name={ingredient.name}
                        price={ingredient.price}
                        imageUrl={ingredient.imageUrl}
                        onClick={() => addIngredient(ingredient.id)}
                        active={selectedIngredients.has(ingredient.id)}
                    />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-4">
            <div className="bg-[#F3F4F6] px-6 py-4 rounded-sm">
              <span className="text-2xl font-bold">{totalPrice} ₽</span>
              <Button
                  loading={loading}
                  onClick={handleClickAdd}
                  className="text-base rounded-[18px] w-full mt-4 py-4">
                Добавить в корзину
              </Button>
            </div>
          </div>
        </div>
      </div>

  );
};
