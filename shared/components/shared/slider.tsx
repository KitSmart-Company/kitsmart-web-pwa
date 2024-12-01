"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://main-cdn.sbermegamarket.ru/upload/mnt/ff5de9e4-1657-4b3c-a175-29fd20773661.jpg",
  "https://main-cdn.sbermegamarket.ru/upload/mnt/de842a1d-116a-4d8e-86fb-0d305f32cb6d.jpg", 
  "https://main-cdn.sbermegamarket.ru/upload/mnt/7eb0cc89-62e4-41b1-ae3e-c633bb25ec76.jpg",
  "https://main-cdn.sbermegamarket.ru/upload/mnt/63f73d20-c47e-46cc-8d79-90813711bc20.jpg"
];

export function CarouselPlugin() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const handleIndicatorClick = (index: any) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: any) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (diff > 50) {
      handlePrev();
      setIsDragging(false);
    } else if (diff < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="relative  flex items-center gap-3">
        
        <div className="relative m-auto w-full">
          <div className="relative m-0 p-0">
            <p className="bg-gray-200 opacity-80 right-0 text-gray-700 p-0.5 mt-2 mr-3 px-3 text-[10px] rounded-full absolute">Реклама</p>
          <img
            className={`w-full h-[700px] cursor-pointer transition-opacity duration-500 object-cover ${
              isTransitioning ? "" : ""
            }`}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            onLoad={handleTransitionEnd}
            loading="lazy"
          />
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 outline-none bg-white rounded-full p-3 shadow-md"
          >
            <ChevronLeft color="#7C3AED" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 outline-none bg-white rounded-full p-3 shadow-md"
          >
            <ChevronRight color="#7C3AED" />
          </button>
          
          <div className="flex space-x-2 mt-2 justify-center items-center absolute right-0 left-0 top-[33rem]">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-[40px] h-[8px] rounded-full ${
                  currentIndex === index ? "bg-[#9d64ff]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
