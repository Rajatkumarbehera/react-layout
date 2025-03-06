import React from "react";
import { Link } from "react-router-dom";
import ellipse from "../assets/images/ellipse.png";
import { works } from "../utils/constant";
import { PlatformItem } from "./PlatformItem";
import { SectionHeader } from "./SectionHeader";

const WorkItem = ({ title, description, image, platforms }) => (
  <div className="bg-[#626265] rounded-[20px] md:rounded-[40px] p-4 md:p-8 relative">
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 relative z-10">
      <img
        src={image}
        alt={title}
        className="w-full md:w-[350px] lg:w-[572px] h-auto lg:h-[429px] rounded-xl md:rounded-3xl"
      />
      <div className="flex flex-col gap-10 md:justify-between relative">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl md:text-[40px] font-semibold font-syne text-primary">
            {title}
          </h3>
          <p className="font-poppins text-primary text-base md:text-lg leading-[24px] md:leading-[27px]">
            {description}
          </p>
          <PlatformItem items={platforms} />
        </div>
        <Link to={"/"} className="self-end md:self-start">
          <button className="bg-primary font-syne text-secondary font-semibold text-sm px-6 md:px-8 py-3 md:py-4 rounded-[100px] hover:text-primary hover:bg-secondary self-start cursor-pointer transition-colors">
            View Case Study
          </button>
        </Link>
      </div>
    </div>
    <img
      src={ellipse}
      className="hidden md:block absolute bottom-0 right-10 md:right-40"
    />
  </div>
);

export const Works = () => {
  return (
    <div className="py-12 md:py-16">
      <SectionHeader title="Works" showViewAll={true} />

      <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
        {works.map((work, index) => (
          <WorkItem key={index} {...work} />
        ))}
      </div>
    </div>
  );
};
