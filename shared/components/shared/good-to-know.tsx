"use client"

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { TabsContent } from "../ui/tabs";
import { Title } from "./title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";


const GoodToKnow = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonClick = (index: any) => {
    setActiveIndex(index);
  };

  const buttons = [
    { text: "Требования к Заямщику", value: "account" },
    { text: "Необходимые документы", value: "password" },
    { text: "Тарифы и документы банка", value: "tariff" },
    { text: "Погашение кредита", value: "repayment" },
  ];
  return (
    <div>
      <Title className="font-bold mb-10 mt-20" text="Полезно знать" size="xl" />
      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-full bg-[#EDEEF0] p-1 text-[15px] rounded-full grid-cols-4">
          {buttons.map((item: any, index) => (
            <TabsTrigger
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`${"p-3.5 font-bold  rounded-full"} ${
                activeIndex === index
                  ? "bg-[#212124] p-3.5 font-bold  rounded-full text-white transition-all"
                  : ""
              }`}
              value={item.value}
            >
              {item.text}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="account">
          <Title
            className="font-bold mt-10"
            text="Кто может получить кредит?"
            size="sm"
          />
          <ul className="mb-10">
            <li className="p-3">
              <span className="text-indigo-600">•</span> Гражданин или гражданка
              РФ от 21 года и старше.
            </li>
            <li className="p-3">
              <span className="text-indigo-600">•</span> Размер постоянного
              дохода — от 10 000 ₽ после вычета налогов.
            </li>
            <li className="p-3">
              <span className="text-indigo-600">•</span> Непрерывный трудовой
              стаж — больше трёх месяцев.
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="password">
          <Accordion type="single" collapsible className="w-full mt-10 ">
            <AccordionItem
              className="bg-[#F3F4F6] p-3 rounded-3xl"
              value="item-1"
            >
              <AccordionTrigger className="text-xl font-bold">
                Общие условия
              </AccordionTrigger>
              <AccordionContent>
                <h3 className="text-xl font-bold px-3">Обязательные:</h3>
                <p className="text-[16px] p-3">
                  <span className="text-indigo-600">•</span> паспорт гражданина
                  РФ
                </p>
                <div className="text-[15px] w-[800px] px-3">
                  При сумме кредита без залога более 300 000 ₽: • справка о
                  доходах и сумме налога физических лиц (ранее 2-НДФЛ) за
                  последние 3 месяца • или по форме банка Справка по форме банка
                  Образец заполненной справки по форме банка При оформлении
                  кредита под залог недвижимости подтверждение дохода
                  необязательно. Банк вправе запросить дополнительную
                  информацию, а также документы, необходимые для подтверждения
                  информации. По кредиту под залог квартиры, апартаментов,
                  коммерческой недвижимости или машино-места — подтверждение
                  дохода справкой по форме банка или 2-НДФЛ является
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="w-full mb-10">
            <AccordionItem
              className="bg-[#F3F4F6] p-3 rounded-3xl mt-2"
              value="item-1"
            >
              <AccordionTrigger className="text-xl font-bold p-3">
                Владельцам зарплатных карт
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[16px] p-3">
                  <span className="text-indigo-600">•</span> паспорт гражданина
                  РФ
                </p>
                <p className="mt-3 px-3 text-[15px] w-[800px]">
                  Банк вправе запросить дополнительную информацию, а также
                  документы, необходимые для подтверждения информации. В случае,
                  если стаж на текущем месте работы составляет менее 3 месяцев,
                  необходимо предоставить подтверждение дохода в форме справки о
                  доходах и сумме налога физических лиц (ранее 2-НДФЛ) или по
                  форме банка.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="tariff">
          <h3 className="mt-10 font-bold text-xl">Обязательные:</h3>
          <p className=" mb-10">
            <p className="text-[16px] p-3">
              <span className="text-indigo-600">•</span> паспорт гражданина РФ
            </p>
            <p className="text-[16px] p-3">
              <span className="text-indigo-600">•</span> В мобильном банке
              Альфа‑Мобайл
            </p>
            <p className="text-[16px] p-3">
              <span className="text-indigo-600">•</span> В банкоматах
              Альфа‑Банка и банкоматах партнёров
            </p>
            <p className="text-[16px] p-3">
              <span className="text-indigo-600">•</span> В «Альфа-Онлайн»
            </p>
          </p>
        </TabsContent>
        <TabsContent value="repayment">
          <h3 className="mt-10 text-xl font-bold">
            Где вносить ежемесячные платежи или оформить досрочное погашение
            кредита?
          </h3>
          <div className="w-[800px] mb-10 mt-3">
            <p className=" mb-10">
              <p className="text-[16px] p-3">
                <span className="text-indigo-600">•</span> паспорт гражданина РФ
              </p>
              <p className="text-[16px] p-3">
                <span className="text-indigo-600">•</span> В мобильном банке
                Альфа‑Мобайл
              </p>
              <p className="text-[16px] p-3">
                <span className="text-indigo-600">•</span> В банкоматах
                Альфа‑Банка и банкоматах партнёров
              </p>
              <p className="text-[16px] p-3">
                <span className="text-indigo-600">•</span> В «Альфа-Онлайн»
              </p>
            </p>
          </div>
        </TabsContent>
      </Tabs>
      <div className="w-[800px]">
          <span className="text-gray-600 text-[15px]">
            Действуют для заёмщиков, заключивших Договор выдачи Кредита наличными
            и подписавших Индивидуальные условия выдачи Кредита наличными,
            предоставленные на основании Заявления на получение Кредита наличными
            с 1 июня 2014 года и для заемщиков, заключивших Договор выдачи Кредита
            наличными, обеспеченного залогом недвижимого имущества, и подписавших
            Индивидуальные условия выдачи Кредита наличными, обеспеченного залогом
            недвижимого имущества, предоставленные на основании Заявления на
            получение Кредита наличными, обеспеченного залогом недвижимого
            имущества, с 8 апреля 2022 года ПСК 29,949% — 36,700%, % ставка от
            28,30% до 36,70% годовых определяется для каждого заёмщика
            индивидуально.
          </span>
          <p className="mt-5 text-gray-600 text-[15px]">
            Минимальное значение ПСК в диапазоне ПСК предоставляется при
            оформлении Кредита наличными, обеспеченного залогом недвижимости.
            Минимальная % ставка в диапазоне ставок доступна при оформлении
            Кредита наличными, обеспеченного залогом недвижимости, и применении
            дисконта к % ставке при заключении добровольного договора страхования
            (при отсутствии договора страхования, соответствующего требованиям
            кредитного договора, на весь оставшийся срок устанавливается % ставка
            без дисконта). Ставка действительна на весь срок кредитования.
            Неустойка за просрочку платежа — 0,06% или 0,1% за каждый день
            просрочки (в зависимости от оформленного продукта). Лимит — от
            50 000 ₽ до 30 млн ₽. Срок — от 1 года до 15 лет. Подробнее на
            alfabank.ru. Банк оставляет за собой исключительное право на изменение
            срока действия предложения и на предоставление или отказ в
            предоставлении кредита. АО Альфа⁠-⁠Банк. Ген. лицензия ЦБ РФ № 1326 от
            16.01.2015 г
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-20">
        <AccordionItem className="bg-[#F3F4F6] p-3 rounded-3xl" value="item-1">
          <AccordionTrigger className="text-xl font-bold p-3">
            Другие предложения по рефинансированию и кредиту наличными
          </AccordionTrigger>
          <AccordionContent>
            Обязательные: • паспорт гражданина РФ При сумме кредита без залога
            более 300 000 ₽: • справка о доходах и сумме налога физических лиц
            (ранее 2-НДФЛ) за последние 3 месяца • или по форме банка Справка по
            форме банка Образец заполненной справки по форме банка При
            оформлении кредита под залог недвижимости подтвеaрждение дохода
            необязательно. Банк вправе запросить дополнительную информацию, а
            также документы, необходимые для подтверждения информации. По
            кредиту под залог квартиры, апартаментов, коммерческой недвижимости
            или машино-места — подтверждение дохода справкой по форме банка или
            2-НДФЛ является необязательным.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default GoodToKnow;
