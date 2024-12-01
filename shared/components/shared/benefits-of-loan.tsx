import React from "react";
import { Title } from "./title";
import { Button } from "../ui/button";

const BenefitsOfLoan: React.FC = () => {
  return (
    <div>
      <Title
        className="font-bold mt-20 w-[800px]"
        text="Преимущества кредита наличными в Альфа‑Банке"
        size="xl"
      />
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-20">
        <div className="flex justify-between col-span-2 bg-[#F3F4F6] p-[38px] rounded-3xl relative">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Уменьшим вашу ставку</h2>
            <p className="text-[15px] mt-3 w-[500px]">
              Подключите услугу Выгодная ставка, чтобы платить по займу меньше.
              Рассказываем, как это сделать 👇
            </p>
            <span className="text-[15px] w-[500px] mt-3">
              Как подключить услугу
            </span>

            <Button className="w-fit p-6 px-6 mt-10">
              Хочу снизить ставку
            </Button>
          </div>
          <div className="p-4 rounded-lg absolute right-0 bottom-0">
            <img
              width={500}
              src="https://alfabank.servicecdn.ru/site-upload/ba/6a/1053/main-main.png"
              alt="Описание фото"
              loading="lazy"
              className="h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="row-start-2 bg-[#F3F4F6] p-[38px] rounded-3xl relative">
          <h2 className="text-xl font-bold mb-3">Удобно вносить платежи</h2>
          <p className="text-[15px] w-[500px]">
            Гасите кредит по графику или досрочно любым удобным способом — в
            мобильном приложении, интернет-банке, банкоматах или отделениях.
            Быстро и без комиссии
          </p>

          <img
            className="w-[350px] right-0 bottom-0 absolute object-cover"
            src="https://cdn.tbank.ru/static/pages/files/831d1a43-1de3-48ad-8527-abe66f5776f8.webp"
            alt=""
          />
        </div>
        <div className="row-start-2 bg-[#F3F4F6] p-[38px] rounded-3xl relative">
          <h2 className="text-xl font-bold mb-3">Удобно вносить платежи</h2>
          <p className="text-[15px] w-[500px]">
            Гасите кредит по графику или досрочно любым удобным способом — в
            мобильном приложении, интернет-банке, банкоматах или отделениях.
            Быстро и без комиссии
          </p>
          <img
            className="w-[300px] right-0 bottom-0 absolute object-cover"
            src="https://cdn.tbank.ru/static/pages/files/fddaf518-2023-4722-a508-171e94a317ca.webp"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default BenefitsOfLoan;
