import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const menuItems = [
  { text: "Кредитный Калькулятор", href: "/credit-calculator" },
  { text: "О KitSmart", href: "/about" },
  { text: "Мобильное Приложение", href: "/mobile-application" },
];
// sticky top-0 z-20
const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#816ad3] via-[#8847f8] to-[#694ece] p-1">
      <Container className="flex justify-between items-center">
        <ul className="flex items-center gap-5 text-[14px] font-bold cursor-pointer text-[#eeeeee]">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-white transition-all ">
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-3">
          <h5 className="text-[16px] font-extrabold text-white">
            Ещё больше скидок и новых функций в приложении KitSmart
          </h5>
        </div>
        <Dialog>
          <DialogTrigger className="rounded-3x" asChild>
            <Button variant={"secondary"}>Перейти</Button>
          </DialogTrigger>
          <DialogContent className="p-0 m-0 border-none w-[420px]">
            <img
              className="rounded-[30px]"
              loading="lazy"
              src="https://yastatic.net/avatars/get-bunker/120922/efa73b4d8d7b603b2553353b9605b4cecff683b0/orig"
              alt=""
            />
            <div className="p-6                     ">
              <h3 className="text-2xl font-extrabold">
                Наведите камеру телефона на QR-код
              </h3>
              <p className="mt-3 text-gray-600">Чтобы перейти в приложение</p>
            </div>
            <Button
              className="w-full rounded-t-[10px] outline-none p-3"
              variant={"secondary"}
            >
              Хорошо
            </Button>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
};

export default TopHeader;
