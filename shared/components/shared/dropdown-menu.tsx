"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { prisma } from '@/prisma/prisma-client'; // Ensure this import is correct

const SHEET_SIDES = ["left"] as const;

interface Category {
  name: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  mainCategoryId: number;
}

interface MainCategory {
  name: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  categories: Category[];
}

export const Categories: React.FC = () => {
  const router = useRouter();
  const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await prisma.mainCategory.findMany();
        console.log(categories);
        // setMainCategories(categories);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    }

    fetchCategories();
  }, []);


  const handleCategoryClick = (categoryId: number) => {
    router.push(`/category/${categoryId}`);
  };

  return (
      <>
        {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <button className="border-gray-300 hover:bg-[#f2f2f267] border transition-all rounded-2xl text-black hover:bg-none outline-none p-2.5">
                  <Menu className="text-white transition-all" size={30} />
                </button>
              </SheetTrigger>
              <SheetContent className="h-full m-0 p-0" side={side}>
                <div className="p-4">
                  <h2 className="font-bold text-lg">Категории товаров</h2>
                  {mainCategories.map((mainCategory) => (
                      <div key={mainCategory.id}>
                        <button className="block w-full text-left p-2 hover:bg-gray-100">
                          {mainCategory.name}
                        </button>
                        <div className="pl-4">
                          {mainCategory.categories.map((category) => (
                              <button
                                  key={category.id}
                                  onClick={() => handleCategoryClick(category.id)}
                                  className="block w-full text-left p-2 hover:bg-gray-100"
                              >
                                {category.name}
                              </button>
                          ))}
                        </div>
                      </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
        ))}
      </>
  );
};
