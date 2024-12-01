"use client";
import React from "react";

interface TitleImage {
  url: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
  colStart?: number;
  rowStart?: number;
}

const ImageCard: React.FC<TitleImage> = ({
  url,
  alt,
  colSpan,
  rowSpan,
  colStart,
  rowStart,
}) => {
  return (
    <div
      style={{ transition: "0.7s" }}
      className={`col-span-${colSpan} row-span-${rowSpan} ${
        colStart ? `col-start-${colStart}` : ""
      } ${
        rowStart ? `row-start-${rowStart}` : ""
      } overflow-hidden hover:scale-105`}
    >
      <img
        className="rounded-3xl cursor-pointer object-cover transition-transform duration-300 ease-in-out"
        src={url}
        alt={alt}
      />
    </div>
  );
};

const TitleImageExample: React.FC = () => {
  const images: TitleImage[] = [
    {
      url: "https://main-cdn.sbermegamarket.ru/upload/mnt/e1726332-8cc7-46d0-92f1-dbe9e6fd3583.png",
      alt: "Image 1",
      colSpan: 3,
      rowSpan: 6,
    },
    {
      url: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/333/592/683/658/32/600018600068b0.jpg",
      alt: "Image 2",
      colSpan: 2,
      rowSpan: 3,
      colStart: 4,
    },
    {
      url: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/190/384/810/611/793/1/600006882130b0.png",
      alt: "Image 3",
      colSpan: 2,
      rowSpan: 3,
      colStart: 4,
      rowStart: 4,
    },
    {
      url: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/179/238/811/911/111/415/600008794856b0.png",
      alt: "Image 4",
      colSpan: 2,
      rowSpan: 3,
      colStart: 6,
      rowStart: 1,
    },
    {
      url: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/805/234/474/122/312/41/100062901528b0.jpg",
      alt: "Image 5",
      colSpan: 2,
      rowSpan: 3,
      colStart: 6,
      rowStart: 4,
    },
  ];

  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-6">
      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
    </div>
  );
};

export default TitleImageExample;
