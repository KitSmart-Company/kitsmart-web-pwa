import { Container, Header } from "@/shared/components/shared";
import Footer from "@/shared/components/shared/footer";
import OnlineChat from "@/shared/components/shared/online-chat";
import TopHeader from "@/shared/components/shared/top-header";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "KitSmart Рассрочка без банка | Главная",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode; 
  modal: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen">
      <Suspense>
        <TopHeader/>
        <Header />
      </Suspense>
      <main>
        {children}
        {modal}
      </main>
    </main>
  );
}
