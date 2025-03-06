import React, { useCallback, useEffect, useState } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";

export const Carousel = ({ children, autoSlide = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = children.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (autoSlide && totalSlides > 1) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, autoSlide, interval, totalSlides, nextSlide]);

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 md:mt-8 text-primary">
        <button
          onClick={prevSlide}
          className="w-8 h-8 md:w-10 md:h-10 rounded-[100px] bg-gray text-secondary flex items-center justify-center shadow-[4px_16px_24px_0px_#F6534029] cursor-pointer"
        >
          <CgArrowLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 md:w-10 md:h-10 rounded-[100px] bg-primary text-secondary flex items-center justify-center shadow-[4px_16px_32px_0px_#EEEEEE29] cursor-pointer"
        >
          <CgArrowRight size={16} />
        </button>
      </div>
    </>
  );
};
