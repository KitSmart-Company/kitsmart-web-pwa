'use client';

import React, {useEffect, useState} from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useQueryFilters, useIngredients, useFilters } from '@/shared/hooks';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading } = useIngredients();
    const filters = useFilters();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add("overflow-hidden");
        } else {
            document.documentElement.classList.remove("overflow-hidden");
        }
        return () => {
            document.documentElement.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };

    return (
        <div className={cn('sticky top-0 z-10', className)}>
            <button
                className="block lg:hidden bg-primary text-white p-2 rounded-md"
                onClick={() => setIsOpen(true)}
            >
                Open
            </button>

            <div className="bg-white overflow-auto lg:w-[250px] md:w-0 sm:w-0 md:px-0 sm:px-0">

                <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

                <CheckboxFiltersGroup
                    title="Основные"
                    name="pizzaTypes"
                    className="mb-5"
                    onClickCheckbox={filters.setPizzaTypes}
                    selected={filters.pizzaTypes}
                    items={[
                        {text: 'Apple', value: '1'},
                        {text: 'Традиционное', value: '2'},
                    ]}
                />

                <CheckboxFiltersGroup
                    title="Размеры"
                    name="sizes"
                    className="mb-5"
                    onClickCheckbox={filters.setSizes}
                    selected={filters.sizes}
                    items={[
                        {text: '20 см', value: '20'},
                        {text: '30 см', value: '30'},
                        {text: '40 см', value: '40'},
                    ]}
                />

                <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                    <p className="font-bold mb-3">Цена</p>
                    <div className="flex gap-3 mb-5">
                        <Input
                            type="number"
                            placeholder="0"
                            min={10000}
                            max={200000}
                            value={String(filters.prices.priceFrom)}
                            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                        />
                        <Input
                            type="number"
                            min={10000}
                            max={200000}
                            placeholder="200000"
                            value={String(filters.prices.priceTo)}
                            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                        />
                    </div>

                    <RangeSlider
                        min={10000}
                        max={200000}
                        step={10}
                        value={[filters.prices.priceFrom || 10000, filters.prices.priceTo || 200000]}
                        onValueChange={updatePrices}
                    />
                </div>

                <CheckboxFiltersGroup
                    title="Ингредиенты"
                    name="ingredients"
                    className="mt-5"
                    limit={6}
                    defaultItems={items.slice(0, 6)}
                    items={items}
                    loading={loading}
                    onClickCheckbox={filters.setSelectedIngredients}
                    selected={filters.selectedIngredients}
                />
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-white z-50 p-5 overflow-auto">
                    <button
                        className="absolute top-4 right-4 text-black"
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>

                    <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

                    <CheckboxFiltersGroup
                        title="Основные"
                        name="pizzaTypes"
                        className="mb-5"
                        onClickCheckbox={filters.setPizzaTypes}
                        selected={filters.pizzaTypes}
                        items={[
                            {text: 'Apple', value: '1'},
                            {text: 'Традиционное', value: '2'},
                        ]}
                    />

                    <CheckboxFiltersGroup
                        title="Размеры"
                        name="sizes"
                        className="mb-5"
                        onClickCheckbox={filters.setSizes}
                        selected={filters.sizes}
                        items={[
                            {text: '20 см', value: '20'},
                            {text: '30 см', value: '30'},
                            {text: '40 см', value: '40'},
                        ]}
                    />

                    <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                        <p className="font-bold mb-3">Цена</p>
                        <div className="flex gap-3 mb-5">
                            <Input
                                type="number"
                                placeholder="0"
                                min={10000}
                                max={200000}
                                value={String(filters.prices.priceFrom)}
                                onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                            />
                            <Input
                                type="number"
                                min={10000}
                                max={200000}
                                placeholder="200000"
                                value={String(filters.prices.priceTo)}
                                onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                            />
                        </div>

                        <RangeSlider
                            min={10000}
                            max={200000}
                            step={10}
                            value={[filters.prices.priceFrom || 10000, filters.prices.priceTo || 200000]}
                            onValueChange={updatePrices}
                        />
                    </div>

                    <CheckboxFiltersGroup
                        title="Ингредиенты"
                        name="ingredients"
                        className="mt-5"
                        limit={6}
                        defaultItems={items.slice(0, 6)}
                        items={items}
                        loading={loading}
                        onClickCheckbox={filters.setSelectedIngredients}
                        selected={filters.selectedIngredients}
                    />
                </div>
            )}
        </div>
    );
};
