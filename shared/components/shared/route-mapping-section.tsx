interface RouteMappingCardProps {
  image: string;
  title: string;
  description: string;
}

const RouteMappingCard: React.FC<RouteMappingCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <figure className="w-full m-auto flex flex-col justify-center items-center">
      <img width={250} src={image} alt={title} className="rounded-lg" loading="lazy"/>
      <figcaption className="flex flex-col text-center justify-center items-center">
        <h3 className="font-bold text-center mt-5 text-2xl">{title}</h3>
        <p className="w-[300px] text-gray-500 text-center">{description}</p>
      </figcaption>
    </figure>
  );
};

const routeMappingData = [
  {
    image: "https://static-basket-01.wb.ru/vol0/services/5873/1948757857.webp",
    title: "Составляйте свой маршрут",
    description:
      "Берите заказы из ПВЗ в шаговой доступности и находите задания по пути",
  },
  {
    image: "https://static-basket-01.wb.ru/vol0/services/5873/1948757856.webp",
    title: "Выбирайте, как доставлять",
    description:
      "Выполняйте задания пешком или на транспорте",
  },
  {
    image: "https://static-basket-01.wb.ru/vol0/services/5873/1948757855.webp",
    title: "Управляйте своим доходом",
    description:
      "Завершайте задания и зарабатывайте до 250 000 рублей в месяц",
  },
];

const RouteMappingSection: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-20 mb-20">
      {routeMappingData.map((item, index) => (
        <RouteMappingCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default RouteMappingSection;
