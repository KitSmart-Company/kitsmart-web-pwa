import { Container, Header, Title } from "@/shared/components";
import Footer from "@/shared/components/shared/footer";
import TopHeader from "@/shared/components/shared/top-header";
import React from "react";

const About = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Container className="bg-gradient-to-r from-[#2073f0] justify-between mt-32 via-[#6448ff] to-[#5d9eff] h-[500px] p-[38px] rounded-[50px] relative mb-20">
        <Title
          className="text-white font-extrabold text-center"
          text="Работа в удобном районе в вашем городе"
          size="2xl"
        />
        <img
          className="absolute object-cover bottom-0"
          src="https://cdn.tbank.ru/static/pages/files/b1e91e9d-38d4-4705-88bd-ae9e8b38efdb.webp"
          alt=""
        />
        <p className="text-[18px] text-white text-center">
          Банковское обслуживание онлайн на выгодных условиях. Без отделений и
          очередей
        </p>
      </Container>
      <Container className="w-[1000px]">
        <Title text="Преимущества" size="xl" className="font-bold mb-10" />
        <div className="grid grid-cols-2 grid-rows-5 gap-4">
          <div className="h-[500px] row-span-3 bg-[#EBF6FF] rounded-3xl p-6 relative">
            <div>
              <h1 className="text-3xl font-[600] mb-3">Скидки до 70%</h1>
              <span className="text-[17px]">
                Прямо в приложении Т‑Банка есть «Истории»: как в социальных
                сетях, но с подборками того, что вам понравится{" "}
              </span>
              <img
                className="w-[400px] left-0 right-0 object-cover bottom-0 absolute"
                src="https://cdn.tbank.ru/static/pages/files/4a59e08b-4d45-4d88-93da-7f39f5cabd43.png"
                alt=""
              />
            </div>
          </div>
          <div className="row-span-2 col-start-1 row-start-4 bg-[#F2F3F5] rounded-3xl p-6">
            <h1 className="text-3xl font-[600] mb-3">
              Бонус за приглашение друзей
            </h1>
            <span className="text-[17px]">
              Если позовёте знакомых сотрудничать с сервисом, сможете получить
              вознаграждение В Лавке вы будете общаться с курьерами,
              кладовщиками, директором и заместителем{" "}
            </span>
          </div>
          <div className="row-span-2 col-start-2 row-start-1 bg-[#F2F3F5] rounded-3xl p-6">
            <h1 className="text-3xl font-[600] mb-3">Дружелюбный коллектив</h1>
            <span className="text-[17px]">
              В Лавке вы будете общаться с курьерами, кладовщиками, директором и
              заместителем
            </span>
          </div>
          <div className="row-span-3 col-start-2 row-start-3 bg-[#EBF6FF] rounded-3xl p-6 relative">
            <h1 className="text-3xl font-[600] mb-3">
              Бонус за приглашение друзей
            </h1>
            <span className="text-[17px]">
              Если позовёте знакомых сотрудничать с сервисом, сможете получить
              вознаграждение В Лавке вы будете общаться с курьерами,
              кладовщиками, директором и заместителем{" "}
            </span>
            <img
              className="w-[300px] left-0 right-0 object-cover bottom-0 absolute"
              src="https://cdn.tbank.ru/static/pages/files/389eaca3-03ec-4f33-896f-f71df33ff834.png"
              alt=""
            />
          </div>
        </div>
        <Title
          text="Как всё устроено?"
          size="xl"
          className="font-bold mb-10 mt-20"
        />
        <div className="bg-[#EBF6FF] rounded-3xl mt-3 p-10">
          <h1 className="text-2xl text-center mb-10">
            Яндекс Лавка — это специальный магазин без покупателей в разных
            районах города
          </h1>
          <div className="grid grid-cols-4 grid-rows-1 gap-4 relative">
            <div className="bg-white p-3 rounded-3xl">
              <p className="text-[14px]">
                <span className="font-bold">Директор и заместитель</span>{" "}
                контролируют процессы в Лавке
              </p>
              <img
                className="w-[200px] p-5 object-cover"
                src="https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9jZG4udGJhbmsucnUvc3RhdGljL3BhZ2VzL2ZpbGVzLzk4NjcxODA1LWMyYWQtNDdmMy04YTc3LWQyNzQyODc4OTRmZC5wbmc="
                alt=""
              />
            </div>
            <div>
              <div className="bg-white p-3 rounded-3xl">
                <p className="text-[14px]">
                  <span className="font-bold">Курьеры</span> <br /> контролируют
                  процессы в Лавке
                </p>
                <img
                  className="w-[200px] p-5 object-cover"
                  src="https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9jZG4udGJhbmsucnUvc3RhdGljL3BhZ2VzL2ZpbGVzLzYxMjhmNjg4LTEyM2MtNDE3ZC05NTIxLWViNjdmNzgyZmY2Mi5wbmc="
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="bg-white p-3 rounded-3xl">
                <p className="text-[14px]">
                  <span className="font-bold">Кладовщики и сборщики</span>{" "}
                  <br /> контролируют процессы в Лавке
                </p>
                <img
                  className="w-[200px] p-5 object-cover"
                  src="https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9jZG4udGJhbmsucnUvc3RhdGljL3BhZ2VzL2ZpbGVzLzFlODgyZWMxLWI2NDktNDZmMy1iZDE1LTkwNmQ2NDc5MTIyMS5wbmc="
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="bg-white p-3 rounded-3xl">
                <p className="text-[14px]">
                  <span className="font-bold">Повара</span> <br /> процессы в
                  Лавке процессы в Лавке
                </p>
                <img
                  className="w-[200px] p-5 object-cover"
                  src="https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9jZG4udGJhbmsucnUvc3RhdGljL3BhZ2VzL2ZpbGVzL2YzZTA5ZjNiLTBmYjgtNDg0MC05NWMwLWU1ZjRmNDBhZDU0OS5wbmc="
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Title text="Статистика" size="xl" className="font-bold mb-10 mt-20" />
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <div className="col-span-3 row-span-3 p-8 bg-[#F2F3F5] rounded-3xl relative">
            <h3 className="text-xl font-bold">Курсы валют в отделениях</h3>
            <p className="mt-5">
              Информация о курсах обмена иностранных валют является справочной и
              может меняться в течение дня. Точную информацию о курсах можно
              узнать в интернет-банке. Список отделений доступен по ссылке
            </p>
            <img
              className="w-[150px] object-cover absolute bottom-0 right-0"
              src="https://alfabank.servicecdn.ru/site-upload/52/47/1449/D_CardPromo_58x58_071123.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center gap-6 col-span-2 col-start-4 bg-[#F2F3F5] rounded-3xl p-8">
            <div>
              <h3 className="text-xl font-bold mb-1 ">
                Офисы банка и банкоматы
              </h3>
              <span>Найдите ближайшие к вам отделения и банкоматы</span>
            </div>
            <img
              className="w-[50px] object-cover"
              src="https://alfabank.servicecdn.ru/site-upload/52/47/1449/D_CardPromo_58x58_071123.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center gap-6 col-span-2 col-start-4 row-start-2 bg-[#F2F3F5] rounded-3xl p-8">
            <div>
              <h3 className="text-xl font-bold mb-1">Платежи и переводы</h3>
              <span>Оплачивайте и переводите деньги без комиссии</span>
            </div>
            <img
              className="w-[50px] object-cover"
              src="https://alfabank.servicecdn.ru/site-upload/c1/3e/5227/D_CardPromo_58x58_211223_4.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center gap-6 col-span-2 col-start-4 row-start-3 bg-[#F2F3F5] rounded-3xl p-8">
            <div>
              <h3 className="text-xl font-bold mb-1">Для самозанятых</h3>
              <span>Регистрируйтесь самозанятым с Альфа-Банком</span>
            </div>
            <img
              className="w-[50px] object-cover"
              src="https://alfabank.servicecdn.ru/site-upload/7a/fc/5227/D_CardPromo_58x58_211223_2.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center gap-6 col-span-2 col-start-4 row-start-4 bg-[#000000] text-white rounded-3xl p-8">
            <div>
              <h3 className="text-xl font-bold mb-1">
                Купить или продать недвижимость
              </h3>
              <span>Сделка под ключ, быстро и безопасно</span>
            </div>
            <img
              className="w-[50px] object-cover"
              src="https://alfabank.servicecdn.ru/site-upload/5b/13/1449/D_CardPromo_58x58_070324.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center gap-6 col-span-3 col-start-1 row-start-4 bg-[#F2F3F5] rounded-3xl p-8">
            <div>
              <h3 className="text-xl font-bold mb-1">Поддержка</h3>
              <span>Любой вопрос решим по телефону или в чате</span>
            </div>
            <img
              className="w-[50px] object-cover"
              src="https://alfabank.servicecdn.ru/site-upload/3b/91/5227/D_CardPromo_58x58_211223.png"
              alt=""
            />
          </div>
        </div>
        <Title text="О банке" size="xl" className="font-bold mb-10 mt-20" />
        <div className="grid grid-cols-8 grid-rows-5 gap-4">
          <div className="col-span-4 row-span-3 bg-[#E7DCFF] rounded-3xl p-5">
            <h3 className="text-center mb-3 text-xl font-bold">
              1 место в рейтинге Банки.ру
            </h3>
            <img
              className="object-cover"
              src="https://sun9-28.userapi.com/impg/oL7voq4xRIq-RdfQCWpSBh2e-A6pjfhe7U0X3A/i70VXop2R-Q.jpg?size=557x193&quality=96&sign=609bd0b8ba1eb922f80fb9d8f5961660&type=album"
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-4 bg-[#E5ECFF] rounded-3xl p-5">
            <h3 className="text-xl font-bold mb-1">1 место</h3>
            <span className="text-gray-600 text-[16px]">
              в рейтинге Сравни.ру
            </span>
          </div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-4 bg-[#E5ECFF] rounded-3xl p-5">
            <h3 className="text-xl font-bold mb-1">Лучший работадатель</h3>
            <span className="text-gray-600 text-[16px]">На HeadHunter</span>
          </div>
          <div className="col-span-4 row-span-5 col-start-5 row-start-1 bg-[#F2F3F5] rounded-3xl p-5">
            <div className="flex justify-between items-center mt-8">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Крупнейший частный банк
                </h2>
                <p className="text-gray-600 text-[15px]">
                  30 миллионов клиентов выбрали нас
                </p>
              </div>
              <img
                width={50}
                src="https://alfabank.servicecdn.ru/site-upload/36/da/5227/D_ImgCard_58x58_080224.png"
                alt=""
              />
            </div>
            <div className="w-full h-[1px] bg-[#d4d4d4] mt-5"></div>
            <div className="flex justify-between items-center mt-8">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Крупнейший частный банк
                </h2>
                <p className="text-gray-600 text-[15px]">
                  30 миллионов клиентов выбрали нас
                </p>
              </div>
              <img
                width={50}
                src="https://alfabank.servicecdn.ru/site-upload/36/da/5227/D_ImgCard_58x58_080224.png"
                alt=""
              />
            </div>
            <div className="w-full h-[1px] bg-[#d4d4d4] mt-5"></div>
            <div className="flex justify-between items-center mt-8">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Крупнейший частный банк
                </h2>
                <p className="text-gray-600 text-[15px]">
                  30 миллионов клиентов выбрали нас
                </p>
              </div>
              <img
                width={50}
                src="https://alfabank.servicecdn.ru/site-upload/36/da/5227/D_ImgCard_58x58_080224.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <Title text="Справки" size="xl" className="font-bold mb-12 mt-20" />

        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          <div className="bg-[#D8EEFE]  rounded-3xl">
            <figure className="p-5">
              <img
                className="w-[200px] m-auto mt-[-3.5rem]"
                src="https://psv4.userapi.com/s/v1/d/wXrK4j0E042YqLamaZJ4bayiwClxvL7hwE7tiqzrHT_Afhf0-Yr9wbjDAfskV6Sg79MznLFu8fCrDERdtj_8jQm8LojxR-uBYbamsgCs10lDChzKlsu3nw/5343602717328795850.png"
                alt=""
              />
              <figcaption>
                <h3 className="font-bold text-xl">Заполнение данных Реквизиты</h3> 
                <span className="text-[15px] mt-2">не нужно вводить в ручную — они уже
                есть в разделе «Налог самозанятого»</span>
              </figcaption>
            </figure>
          </div>
          <div  className="bg-[#D8EEFE]  rounded-3xl">
          <figure className="p-5">
              <img
                className="w-[200px] m-auto mt-[-3.5rem]"
                src="https://psv4.userapi.com/s/v1/d/wXrK4j0E042YqLamaZJ4bayiwClxvL7hwE7tiqzrHT_Afhf0-Yr9wbjDAfskV6Sg79MznLFu8fCrDERdtj_8jQm8LojxR-uBYbamsgCs10lDChzKlsu3nw/5343602717328795850.png"
                alt=""
              />
              <figcaption>
                <h3 className="font-bold text-xl">Заполнение данных Реквизиты</h3> 
                <span className="text-[15px] mt-2">не нужно вводить в ручную — они уже
                есть в разделе «Налог самозанятого»</span>
              </figcaption>
            </figure>
          </div>
          <div  className="bg-[#D8EEFE] rounded-3xl">
          <figure className="p-5">
              <img
                className="w-[200px] m-auto mt-[-3.5rem]"
                src="https://psv4.userapi.com/s/v1/d/wXrK4j0E042YqLamaZJ4bayiwClxvL7hwE7tiqzrHT_Afhf0-Yr9wbjDAfskV6Sg79MznLFu8fCrDERdtj_8jQm8LojxR-uBYbamsgCs10lDChzKlsu3nw/5343602717328795850.png"
                alt=""
              />
              <figcaption>
                <h3 className="font-bold text-xl">Заполнение данных Реквизиты</h3> 
                <span className="text-[15px] mt-2">не нужно вводить в ручную — они уже
                есть в разделе «Налог самозанятого»</span>
              </figcaption>
            </figure>
          </div>
        </div>

        
      </Container>
      <Footer />
    </>
  );
};

export default About;
