"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";
import { MdFavorite } from "react-icons/md";
import { Categories } from "./dropdown-menu";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Почта успешно подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header
      className={cn(
        (className = "max-w-[1000px] mx-auto absolute rounded-full border-b-none right-0 z-20 left-0  top-14 bg-[#622ddf] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md"),
        className
      )}
    >
      <Container className="px-5 ">
        <div className="flex items-center justify-between py-4 gap-4">
          <div className="hidden lg:flex items-center">
            <Categories/>
          </div>
            <Link href="/">
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="bg-white rounded-full shadow-sm p-2 px-5">
                    <h1 className="text-xl text-[#784BE3] text-center uppercase font-black">
                      KITSMART
                    </h1>
                    <p className="text-xs text-gray-700 leading-3 text-center">
                      Рассрочка без банка
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            {hasSearch && (
                <div className="lg:mx-10 flex-1">
                  <SearchInput/>
                </div>
            )}
            <div className="justify-center items-center gap-6 hidden lg:flex">
              <AuthModal
                  open={openAuthModal}
                  onClose={() => setOpenAuthModal(false)}
              />
              <button className="flex flex-col items-center gap-1 h-[45px]">
                <MdFavorite size={25} className="relative text-white"/>
                <span className="text-[12px] text-white">Избранное</span>
              </button>
              <ProfileButton onClickSignIn={() => setOpenAuthModal(true)}/>
              {hasCart && <CartButton/>}
            </div>
          </div>
      </Container>
    </header>

);
};
