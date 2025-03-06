import React from "react";
import designer from "../assets/images/designer.png";
import freelance from "../assets/images/freelance.png";
import { companies } from "../utils/constant";

export const Hero = () => {
  return (
    <div className="py-20 md:py-32 lg:py-44 flex flex-col gap-16 md:gap-24 lg:gap-28">
      <div className="text-primary font-syne font-extrabold sm:text-xl md:text-4xl lg:text-[64px] flex flex-col gap-[17px] leading-tight  lg:leading-[80px] items-center text-center">
        <div className="flex flex-wrap justify-center items-center gap-[17px]">
          <div className="flex items-center gap-2">
            <h1>I AM A</h1>
            <img
              src={freelance}
              alt="freelance"
              className="w-20 h-10 md:w-28 md:h-14 lg:w-32 lg:h-16 rounded-[100px] object-cover object-[50%_30%]"
            />
          </div>
          <h1>FREELANCE</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[17px]">
          <div className="flex items-center gap-2">
            <h1>DESIGNER</h1>
            <img
              src={designer}
              alt="designer"
              className="w-20 h-10 md:w-28 md:h-14 lg:w-32 lg:h-16 rounded-[100px] object-contain bg-primary"
            />
          </div>
          <h1>FROM</h1>
        </div>
        <h1>SAN FRANCISCO</h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="flex items-center overflow-hidden max-w-lg">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex flex-shrink-0 items-center gap-16 md:gap-24 lg:gap-34 animate-marquee"
            >
              {companies.map((company, index) => (
                <img
                  key={index}
                  src={company.image}
                  alt={company.alt}
                  className="last:mr-8 md:last:mr-16 lg:last:mr-34"
                />
              ))}
            </div>
          ))}
        </div>
        <p className="text-gray font-poppins text-center lg:text-left max-w-md md:max-w-lg lg:max-w-[492px] text-sm md:text-base">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>
    </div>
  );
};
