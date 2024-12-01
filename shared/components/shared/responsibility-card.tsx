import { Button } from "../ui";

const ResponsibilitiesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-4 bg-[#E7E1FF] items-center rounded-[50px]">
    <div className="col-span-3 row-span-4 p-10">
      <h1 className="text-4xl font-extrabold mb-3">Наши клиенты уже получают до 100% кэшбэка</h1>
      <span className="text-[18px] flex flex-col mb-6">Крутите барабан каждый месяц и получайте до 100% кэшбэка на одну категорию</span>
      <Button className="p-6">Скачать приложение</Button>
    </div>
    <div className="col-span-2 row-span-4 col-start-4">
      <video
        className="w-[500px] object-fill rounded-[50px]"
        loop
        playsInline
        src="https://alfabank.servicecdn.ru/site-upload/b3/86/2330/05_Newsroom_SuperCashback_1200x1200.mp4"
        autoPlay
      />
    </div>
  </div>
  );
};
export default ResponsibilitiesSection;
