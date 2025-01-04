'use client'

import React from "react"
import {Categories} from "@/shared/components/shared/dropdown-menu";
import {AuthModal, CartButton, ProfileButton} from "@/shared/components";
import {MdFavorite} from "react-icons/md";

export const MobileNavMenu: React.FC<{}> = () => {

    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    const hasCart = true

    return (
        <div className="z-10 fixed w-full bottom-0 lg:hidden md:block sm:block">
            <div className="flex justify-around items-center bg-primary py-2">
                <Categories/>
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
    )
}