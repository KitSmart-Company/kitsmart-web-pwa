import React from "react";
import { Title } from "@/shared/components/shared";
import { Button } from "../ui/button";
import { FaClock } from "react-icons/fa6";
import { IoMdCalculator } from "react-icons/io";
import { FaImage } from "react-icons/fa";

const Hero = () => {
  return (
      <div className="h-[400px] relative flex justify-between mt-32 p-[38px] bg-gradient-to-r from-[#7C67C9] rounded-[50px] via-purple-500 to-indigo-500 to-90%">
        <div className="flex flex-col">
          <Title
            className="text-white font-extrabold z-10"
            text="Кредитный калькулятор"
            size="2xl"
          />
          <span className="text-white mb-5 z-10">
            Рассчитайте платёж и узнайте предварительные условия
          </span>
          <Button
            className="text-white text-[16px] w-fit p-7 px-12 border-[#ffffff7a] hover:bg-[#c278ffb9]"
            variant="outline"
          >
            Рассчитать
          </Button>
        </div>
        <img
          className="w-96 h-80 lg:w-[500px] bottom-[-2.5rem] lg:h-[500px] right-0 object-cover absolute"
          src="https://alfabank.servicecdn.ru/site-upload/ba/6a/1053/main-main.png"
          loading="lazy"
          alt=""
        />
        <div className="w-fit m-auto grid grid-cols-2 lg:grid-cols-4 lg-w-full md:grid-cols-2 gap-3 top-[16rem] absolute">
          <div className="w-52 h-52 lg:w-[250px] lg:h-[200px] p-4 relative bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md">
            <h3 className="text-white font-bold text-xl">Онлайн-решение</h3>
            <span className="text-white">за 2 минуты</span>
            <div className="w-fit p-4 rounded-sm absolute bottom-5 right-5 bg-indigo bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
              <FaClock size={25} color="white"/>
            </div>
          </div>
          <div className="w-52 h-52 lg:w-[250px] lg:h-[200px] p-4 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md">
            <h3 className="text-white font-bold text-xl">До 30 млн ₽</h3>
            <span className="text-white">сумма кредита</span>
            <div className="w-fit p-4 rounded-sm absolute bottom-5 right-5 bg-indigo bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
              <IoMdCalculator size={25} color="white"/>
            </div>
          </div>
          <div className="w-52 h-52 lg:w-[250px] lg:h-[200px] p-4 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md">
            <h3 className="text-white font-bold text-xl">От 1 до 15 лет</h3>
            <span className="text-white">срок кредита</span>
            <div className="w-fit p-4 rounded-sm absolute bottom-5 right-5 bg-indigo bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
              <FaImage size={25} color="white"/>
            </div>
          </div>
          <div className="w-52 h-52 lg:w-[250px] lg:h-[200px] p-4 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md">
            <h3 className="text-white font-bold text-xl">Доставка кредита</h3>
            <span className="text-white">на бесплатную дебетовую карту</span>
            <div className="w-fit p-4 rounded-sm absolute bottom-5 right-5 bg-indigo bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
              <FaImage size={25} color="white"/>
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default Hero;
