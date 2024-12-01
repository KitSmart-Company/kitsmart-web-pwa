import React from 'react'
import { Title } from "./shared/title";
import { Button } from "./ui/button";

import { BiSolidCalculator } from "react-icons/bi";

const ReadyLoans = () => {
  return (
    <div>
    <Title
    className="font-bold mb-10 mt-20"
    text="Готовые кредиты"
    size="xl"
  />
  <div className="grid grid-cols-2 grid-rows-2 gap-4">
    <div className="flex bg-[#F2F3F5] rounded-3xl">
      <img
        loading="lazy"
        className="rounded-3xl"
        src="https://sun9-8.userapi.com/impg/KuTaPMqKgmNUDv0duwzsohWN4L4X8R_trcKSUg/Ga-e9Yfs720.jpg?size=187x217&quality=96&sign=81e4a071a87e898f4917d176c0b3590b&type=album"
        alt=""
      />
      <div className="px-8 mt-3">
        <h5 className="text-xl font-bold mt-5">На ремонт жилья</h5>
        <div className="flex text-[16px] justify-center items-center gap-12">
          <span className="text-xs text-gray-500 mt-5">
            Сумма <br />
            <b className="text-[16px] text-black">1 500 000 ₽</b>
          </span>
          <span className="text-xs text-gray-500 mt-5">
            Платёж <br />
            <b className="text-[16px] text-black">48 600 ₽</b>
          </span>
          <span className="text-xs text-gray-500 mt-5">
            Срок <br />
            <b className="text-[16px] text-black">1 года</b>
          </span>
        </div>
        <div className="flex justify-between mt-5">
          <Button variant={"outline"} className="w-[200px] rounded-xl">
            Получить
          </Button>
          <Button variant={"outline"} className=" rounded-xl">
            <BiSolidCalculator size={30} />
          </Button>
        </div>
      </div>
    </div>
    <div className="bg-[#F2F3F5] rounded-3xl">
      <div className="flex bg-[#F2F3F5] rounded-3xl">
        <img
          loading="lazy"
          className="rounded-3xl"
          src="https://sun9-8.userapi.com/impg/KuTaPMqKgmNUDv0duwzsohWN4L4X8R_trcKSUg/Ga-e9Yfs720.jpg?size=187x217&quality=96&sign=81e4a071a87e898f4917d176c0b3590b&type=album"
          alt=""
        />
        <div className="px-8 mt-3">
          <h5 className="text-xl font-bold mt-5">На ремонт жилья</h5>
          <div className="flex text-[16px] justify-center items-center gap-12">
            <span className="text-xs text-gray-500 mt-5">
              Сумма <br />
              <b className="text-[16px] text-black">1 500 000 ₽</b>
            </span>
            <span className="text-xs text-gray-500 mt-5">
              Платёж <br />
              <b className="text-[16px] text-black">48 600 ₽</b>
            </span>
            <span className="text-xs text-gray-500 mt-5">
              Срок <br />
              <b className="text-[16px] text-black">1 года</b>
            </span>
          </div>
          <div className="flex justify-between mt-5">
            <Button variant={"outline"} className="w-[200px] rounded-xl">
              Получить
            </Button>
            <Button variant={"outline"} className=" rounded-xl">
              <BiSolidCalculator size={30} />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#F2F3F5] rounded-3xl row-start-2">
      <div className="flex bg-[#F2F3F5] rounded-3xl">
        <img
          loading="lazy"
          className="rounded-3xl"
          src="https://sun9-8.userapi.com/impg/KuTaPMqKgmNUDv0duwzsohWN4L4X8R_trcKSUg/Ga-e9Yfs720.jpg?size=187x217&quality=96&sign=81e4a071a87e898f4917d176c0b3590b&type=album"
          alt=""
        />
        <div className="px-8 mt-3">
          <h5 className="text-xl font-bold mt-5">На ремонт жилья</h5>
          <div className="flex text-[16px] justify-center items-center gap-12">
            <span className="text-xs text-gray-500 mt-5">
              Сумма <br />
              <b className="text-[16px] text-black">1 500 000 ₽</b>
            </span>
            <span className="text-xs text-gray-500 mt-5">
              Платёж <br />
              <b className="text-[16px] text-black">48 600 ₽</b>
            </span>
            <span className="text-xs text-gray-500 mt-5">
              Срок <br />
              <b className="text-[16px] text-black">1 года</b>
            </span>
          </div>
          <div className="flex justify-between mt-5">
            <Button variant={"outline"} className="w-[200px] rounded-xl">
              Получить
            </Button>
            <Button variant={"outline"} className=" rounded-xl">
              <BiSolidCalculator size={30} />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#F2F3F5] rounded-3xl row-start-2">
      <div className="flex bg-[#F2F3F5] rounded-3xl">
        <img
          loading="lazy"
          className="rounded-3xl"
          src="https://sun9-8.userapi.com/impg/KuTaPMqKgmNUDv0duwzsohWN4L4X8R_trcKSUg/Ga-e9Yfs720.jpg?size=187x217&quality=96&sign=81e4a071a87e898f4917d176c0b3590b&type=album"
          alt=""
        />
        <div className="px-8 mt-3">
          <h5 className="text-xl font-bold mt-5">На ремонт жилья</h5>
          <div className="flex text-[16px] justify-center items-center gap-12">
            <span className="text-xs text-gray-500 mt-5">
              Сумма <br />
              <b className="text-[16px] text-black">1 500 000 ₽</b>
            </span>
            <span className="text-xs text-gray-500 mt-5">
              Платёж <br />
              <b className="text-[16px] text-black">48 600 ₽</b>
            </span>
            <span className="text-xs text-gray-500 mt-5">
              Срок <br />
              <b className="text-[16px] text-black">1 года</b>
            </span>
          </div>
          <div className="flex justify-between mt-5">
            <Button variant={"outline"} className="w-[200px] rounded-xl">
              Получить
            </Button>
            <Button variant={"outline"} className=" rounded-xl">
              <BiSolidCalculator size={30} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ReadyLoans