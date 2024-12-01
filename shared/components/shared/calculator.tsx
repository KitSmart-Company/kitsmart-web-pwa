  "use client";

  import React, { useState, useEffect } from "react";
  import { Title } from "./title";
  import { Slider } from "../ui/slider";
  type SliderProps = React.ComponentProps<typeof Slider>;

  const Calculator = ({ ...props }): SliderProps => {
    const [count, setCount] = useState<number>(50000);
    const [month, setMonth] = useState<number>(3);
    const [firstPayment, setFirstPayment] = useState<number>(0);
    const [monthPayment, setMonthPayment] = useState<number>(0);
    const [markUp, setMarkUp] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0.02);
    const [countInput, setCountInput] = useState<number>(count);
    const [monthInput, setMonthInput] = useState<number>(month);

    const handleChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      const inputElement = document.getElementById(
        "inputCountId"
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = value.toString();
      }

      setCountInput(value);
      setCount(value);
      calculateAll(value, month, discount);
    };

    const handleChangeMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);

      const inputElement = document.getElementById(
        "inputMonthId"
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = value.toString();
      }

      setMonthInput(value);
      setMonth(value);
      calculateAll(count, value, discount);
    };

    const handleInputCount = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        const value = Number((event.target as HTMLInputElement).value);
        if (value > 200000) {
          (event.target as HTMLInputElement).value = "200000";
          setCount(200000);
        } else if (value < 8000) {
          (event.target as HTMLInputElement).value = "8000";
          setCount(8000);
        }
        setCountInput(Number((event.target as HTMLInputElement).value));
        setCount(Number((event.target as HTMLInputElement).value));
        calculateAll(
          Number((event.target as HTMLInputElement).value),
          month,
          discount
        );
      }
    };

    const handleInputMonth = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        const value = Number((event.target as HTMLInputElement).value);
        if (value > 12) {
          (event.target as HTMLInputElement).value = "12";
          setMonth(12);
        } else if (value < 2) {
          (event.target as HTMLInputElement).value = "2";
          setMonth(2);
        }
        setMonthInput(Number((event.target as HTMLInputElement).value));
        setMonth(Number((event.target as HTMLInputElement).value));
        calculateAll(
          count,
          Number((event.target as HTMLInputElement).value),
          discount
        );
      }
    };

    const calculateAll = (
      newCount: number,
      newMonth: number,
      newDiscount: number
    ) => {
      let first = Math.round(newCount * 0.3);
      first = Math.ceil(first / 100) * 100;
      let markUpPayment = Math.round(newDiscount * newMonth * newCount);
      let totalPayment = Math.ceil((newCount + markUpPayment) / 100) * 100;
      let sumLeft = totalPayment - first;
      let paymentPerMonth = Math.ceil(sumLeft / newMonth / 100) * 100;

      totalPayment = paymentPerMonth * newMonth + first;
      markUpPayment = totalPayment - newCount;

      setFirstPayment(first);
      setMarkUp(markUpPayment);
      setResult(totalPayment);
      setMonthPayment(paymentPerMonth);
    };

    useEffect(() => {
      calculateAll(count, month, discount);
    }, []);

    return (
      <div className="mt-32" {...props}>
        <Title
          className="font-bold  mb-10"
          text="Калькулятор кредита для расчёта онлайн"
          size="xl"
        />
        <div className="w-full h-full grid grid-cols-2 justify-center p-3 rounded-3xl bg-[#F3F4F6]">
          <div className="p-[18px]">
            <div className="bg-white p-1 rounded-full flex justify-center items-center gap-2 mb-5">
              <button
                className={`${"w-full p-3 transition-all text-[15px]  rounded-full font-bold"} ${
                  discount == 0.02
                    ? "bg-[#7C3AED] transition-all w-full p-3 shadow-md rounded-full text-white"
                    : ""
                }`}
                onClick={() => {
                  setDiscount(0.02);
                  calculateAll(count, month, 0.02);
                }}
              >
                Супер
              </button>
              <button
                className={`${"w-full p-3 transition-all  text-[15px] rounded-full font-bold"} ${
                  discount == 0.03
                    ? "bg-[#7C3AED] transition-all w-full shadow-md p-3 rounded-full text-white"
                    : ""
                }`}
                onClick={() => {
                  setDiscount(0.03);
                  calculateAll(count, month, 0.03);
                }}
              >
                Комфорт
              </button>
              <button
                className={`${"w-full p-3 transition-all text-[15px]  rounded-full font-bold"} ${
                  discount == 0.01
                    ? "bg-[#7C3AED] transition-all w-full p-3 shadow-md rounded-full text-white"
                    : ""
                }`}
                onClick={() => {
                  setDiscount(0.01);
                  calculateAll(count, month, 0.01);
                }}
              >
                Без взноса
              </button>
            </div>
            <figure className="relative mb-5">
              <label className="flex flex-col p-3 bg-[#E2E4E8] rounded-xl rounded-b-none mb-8 relative inputr">
                <span className="text-[14px]">Сумма кредита</span>
                <input
                  min={10000}
                  max={200000}
                  defaultValue={countInput}
                  onKeyDown={handleInputCount}
                  className="bg-[#E2E4E8] outline-none font-bold"
                  type="number"
                  id="inputCountId"
                />                                                          
                <Slider
                  defaultValue={[count]}
                  className="w-full transparent h-[2px] border-transparent bg-neutral-500 absolute bottom-0 left-0"
                  onChange={handleChangeCount}
                  // value={[100000]}
                  min={10000}
                  id="inputCountId"
                  max={200000}
                  step={1}
                  onVolumeChange={handleChangeCount}
                  {...props}
                />
              </label>
              <figcaption className="flex justify-between mt-6">
                <div className=" absolute left-0 top-[5rem] text-xs">10 тыс.</div>
                <div className=" absolute right-0 top-[5rem] text-xs">
                  200 тыс.
                </div>
              </figcaption>
            </figure>
            <figure className="relative">
              <label className="flex flex-col p-3 bg-[#E2E4E8] rounded-xl rounded-b-none mb-8 relative">
                <span className="text-[14px]">Срок кредита</span>
                <input
                  type="number"
                  id="inputMonthId"
                  min={2}
                  max={12}
                  className="bg-[#E2E4E8] outline-none font-bold"
                  defaultValue={monthInput}
                  onKeyDown={handleInputMonth}
                />
                <Slider
                  defaultValue={[month]}
                  className="w-full transparent h-[2px] border-transparent bg-neutral-500 absolute bottom-0 left-0"
                  onChange={handleChangeMonth}
                  // value={[100000]}
                  id="inputCountId"
                  min={2}
                  max={12}
                  step={1}
                  onVolumeChange={handleChangeCount}
                  {...props}
                />
              </label>
              <figcaption className="flex justify-between mt-6">
                <div className=" absolute right-0 top-[5rem] text-xs">1 год</div>
                <div className=" absolute left-0 top-[5rem] text-xs">
                  3 месяца
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="bg-white p-[38px] rounded-3xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-[600]">Общая стоимость рассрочки</h3>
              <p className="text-[25px] font-bold">{result}</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-[16px] text-[#75757D]">Ежемесячный платеж</p>
              <span className="text-[20px] font-bold">{monthPayment}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-[16px] text-[#75757D]">Первоначальный взнос</p>
              <span className="text-[20px] font-bold">
                {discount == 0.01 ? (
                  <span className="text-[20px] font-bold">0</span>
                ) : (
                  firstPayment
                )}
              </span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-[16px] text-[#75757D]">Торговая наценка</p>
              <span className="text-[20px] font-bold">{markUp}</span>
            </div>
            <div className="p-3 border rounded-xl">
              <span className="font-bold">Вам понадобится</span>

              <ul className="flex flex-col text-xs">
                <li className="flex items-center gap-2 mt-3 mb-3">
                  <img
                    loading="lazy"
                    src="https://alfabank.servicecdn.ru/media/get-money/credit/credit-cash/document-eagle_24x24_common_25-07-2022.svg"
                    alt=""
                  />
                  <span>Паспорт</span>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <img
                    loading="lazy"
                    width={25}
                    src="https://alfabank.servicecdn.ru/site-upload/20/45/1053/gosuslugi-logotip.svg"
                    alt=""
                  />
                  <span>
                    Госуслуги справка о официальным или не официальным доходе
                  </span>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <img
                    loading="lazy"
                    src="https://alfabank.servicecdn.ru/site-upload/78/07/6175/house.svg"
                    alt=""
                  />
                  <span>Поручитель</span>
                </li>
              </ul>
            </div>
          </div>
          <span className="text-xs bottom-[0] text-[#75757D]">
            ПСК 29,949% — 36,700%, % ставка от 28,30% до 36,70% годовых
            определяется для каждого заёмщика индивидуально. Не является публичной
            офертой
          </span>
        </div>

      
      </div>
    );
  };

  export default Calculator;
