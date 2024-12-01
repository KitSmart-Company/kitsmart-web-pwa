import { useSession } from "next-auth/react";
import React from "react";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <button
          onClick={onClickSignIn}
          className="flex flex-col items-center gap-1 h-[45px] transition-all hover:text-[#7C3AED] text-[#888888]"
        >
          <FaUser size={25} className="relative text-white" />
          <span className="text-[12px] text-white">Войти</span>
        </button>
      ) : (
        <Link href="/profile">
          <button className="flex flex-col items-center gap-1 h-[45px] transition-all  text-white">
          <FaUser size={25} className="relative text-white" />
          <span className="text-[12px] text-white">Профиль</span>
          </button>
        </Link>
      )}
    </div>
  );
};
