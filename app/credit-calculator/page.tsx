import React from "react";
import { Header } from "../../shared/components/shared/header";
import Hero from "../../shared/components/shared/hero";
import Calculator from "../../shared/components/shared/calculator";
import Footer from "@/shared/components/shared/footer";
import TopHeader from "@/shared/components/shared/top-header";
import ReadyLoans from "@/shared/components/ready-loans";
import GoodToKnow from "@/shared/components/shared/good-to-know";
import BenefitsOfLoan from "@/shared/components/shared/benefits-of-loan";

const CreditCalculator: React.FC = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="max-w-[1250px] m-auto">
        <Hero />
        {/* @ts-ignore */}
        <Calculator />
        <ReadyLoans />
        <BenefitsOfLoan/>
        <GoodToKnow/>
      </div>
      <Footer />
    </>
  );
};

export default CreditCalculator;
