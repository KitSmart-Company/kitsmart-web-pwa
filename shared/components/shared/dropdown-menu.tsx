"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const SHEET_SIDES = ["left"] as const;

export const Categories: React.FC = ()  => {
  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <button className="border-gray-300 hover:bg-[#f2f2f267] border transition-all rounded-2xl text-black hover:bg-none outline-none p-2.5">
              <Menu className="text-white transition-all" size={30} />
            </button>
          </SheetTrigger>
          <SheetContent className="h-full m-0 p-0" side={side}></SheetContent>
        </Sheet>
      ))}
    </>
  );
}
