import React from "react";
import { expertises } from "../utils/constant";
import { SectionHeader } from "./SectionHeader";

const ExpertiseItem = ({ title, description }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <div className="h-[7px] w-2 bg-primary"></div>
      <h5 className="font-syne text-xl md:text-2xl font-semibold text-primary">
        {title}
      </h5>
    </div>
    <p className="font-poppins text-gray-400 text-sm md:text-base">
      {description}
    </p>
  </div>
);

export const Expertise = () => {
  return (
    <div className="py-10 md:py-12 lg:py-16">
      <SectionHeader title="Expertise" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-6 md:mt-8">
        {expertises.map((expertise, index) => (
          <ExpertiseItem key={index} {...expertise} />
        ))}
      </div>
    </div>
  );
};
