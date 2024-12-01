import React from "react";
import { Title, Header } from "@/shared/components/shared";
import HeroSection from "@/shared/components/shared/hero-sections";
import ProcessSection from "@/shared/components/shared/process-section";
import ResponsibilitiesSection from "@/shared/components/shared/responsibility-card";
import RouteMappingSection from "@/shared/components/shared/route-mapping-section";
import Footer from "@/shared/components/shared/footer";
import WorkAppSection from "@/shared/components/shared/workapp-section";
import QrInsallApp from "@/shared/components/shared/qr-install-app";
import TopHeader from "@/shared/components/shared/top-header";

const mobileApplication: React.FC = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="max-w-[1250px] m-auto mt-32">
      <ResponsibilitiesSection />
        <Title                      
          text="Как стать курьером"
          className="font-bold px-3 mt-20 mb-10"
          size="xl"
        />
        <ProcessSection />
        <Title
          text="Работа в пункте выдачи"
          className="font-bold px-3 mt-20 mb-10"
          size="xl"
        />
        <WorkAppSection />
        <RouteMappingSection />
        <QrInsallApp />                 
      </div>
      <Footer />
    </>
  );
};

export default mobileApplication;
